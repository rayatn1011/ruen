import { useState } from 'react'
import { openAiApiUrl } from '../utils'

const useChat = () => {
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    isError: false,
  })

  const fetchApi = () => {
    setFetchState((prev) => ({
      ...prev,
      isLoading: true,
      isError: false,
    }))
    fetch(openAiApiUrl + 'v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hello!' }],
      }),
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

  return {
    chatData: fetchState.data,
    isChatLoading: fetchState.isLoading,
    isChateError: fetchState.isError,
    fetchChat: fetchApi,
  }
}

export { useChat }
