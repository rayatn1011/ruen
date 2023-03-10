import { useState, useRef, useEffect } from 'react'
import { openAiApiUrl } from '../utils'
import { getThirdPartyApi } from '../utils/third-party-api'

interface ChatData {
  role: string
  content: string
}
interface ChatCompletion {
  id: string
  object: string
  created: number
  model: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  choices: {
    message: {
      role: string
      content: string
    }
    finish_reason: string
    index: number
  }[]
}

const useChat = () => {
  const apiKey = getThirdPartyApi()?.openAi
  const fetchController = useRef<AbortController | null>(null)
  const [fetchState, setFetchState] = useState<{
    data: ChatCompletion | null
    isLoading: boolean
    isError: boolean
  }>({
    data: null,
    isLoading: false,
    isError: false,
  })

  const fetchApi = (chatData: ChatData[]) => {
    if (fetchController.current !== null) {
      fetchController.current.abort()
    }

    fetchController.current = new AbortController()

    setFetchState((prev) => ({
      ...prev,
      isLoading: true,
      isError: false,
    }))
    fetch(openAiApiUrl + 'v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: chatData,
      }),
      signal: fetchController.current.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw response
        }
        return response.json()
      })
      .then((responseData) => {
        setFetchState((prev) => ({
          ...prev,
          data: responseData,
        }))
      })
      .catch((error) => {
        console.error(error)
        setFetchState((prev) => ({
          ...prev,
          isError: true,
        }))
      })
      .finally(() => {
        setFetchState((prev) => ({
          ...prev,
          isLoading: false,
        }))
      })
  }

  useEffect(() => {
    return () => {
      if (fetchController.current !== null) {
        fetchController.current.abort()
      }
    }
  }, [])

  return {
    chatData: fetchState.data,
    isChatLoading: fetchState.isLoading,
    isChateError: fetchState.isError,
    fetchChat: fetchApi,
  }
}

export { useChat }
