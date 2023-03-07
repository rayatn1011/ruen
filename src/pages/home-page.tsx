import { useState, useRef, useEffect } from 'react'
import { useChat } from '../features/apis'

function HomePage() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const { fetchChat, chatData, isChatLoading, isChateError } = useChat()
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const syncChatData = (inputMessage: string) => {
    debounceRef.current && clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      const messages = [
        { role: 'user', content: `請幫我潤飾以下文字 ${inputMessage}` },
      ]
      fetchChat(messages)
    }, 2000)
  }

  useEffect(() => {
    if (chatData) {
      const outputMessage = chatData?.choices?.[0]?.message?.content ?? ''
      setOutputText(outputMessage)
    }
  }, [chatData])

  return (
    <div className="flex h-full w-full gap-8">
      <div className="relative flex-1 shrink-0">
        <textarea
          className="h-full w-full resize-none"
          autoComplete="false"
          placeholder="Please enter text."
          onChange={(e) => {
            setInputText(e.target.value)
            syncChatData(e.target.value)
          }}
          value={inputText}
        />
      </div>
      <div className="flex-1 shrink-0 border">
        <textarea
          readOnly
          className="h-full w-full resize-none"
          autoComplete="false"
          value={outputText}
        />
      </div>
    </div>
  )
}
export { HomePage }
