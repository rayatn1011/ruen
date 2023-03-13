import { useState, useRef, useEffect } from 'react'
import { useChat } from '../features/apis'
import { Typewriter } from '../features/type-writer'

const options = [
  {
    value: '使用繁體中文语言潤飾此段文本',
    label: '潤飾',
  },
  {
    value: '翻譯成台灣常用用法之繁體中文白話文',
    label: '翻譯',
  },
  {
    value: '優化此段程式碼，使用markdown回覆程式碼',
    label: '優化',
  },
]

function HomePage() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [selectedOption, setSelectedOption] = useState(options[0].value)
  const { fetchChat, chatData, isChatLoading, isChateError } = useChat()
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === selectedOption) return
    setSelectedOption(event.target.value)
    syncChatData({
      inputMessage: inputText,
      selectedOption: event.target.value,
      timer: 0,
    })
  }

  const syncChatData = ({
    inputMessage,
    selectedOption,
    timer = 2000,
  }: {
    inputMessage: string
    selectedOption: string
    timer?: number
  }) => {
    debounceRef.current && clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      const messages = [
        {
          role: 'user',
          content: selectedOption,
        },
        {
          role: 'user',
          content: inputMessage,
        },
      ]
      if (inputMessage.trim().length > 0) {
        fetchChat(messages)
      }
    }, timer)
  }

  useEffect(() => {
    if (chatData) {
      const outputMessage = chatData?.choices?.[0]?.message?.content ?? ''
      setOutputText(outputMessage)
    }
  }, [chatData])

  return (
    <div className="flex h-full w-full flex-col gap-1">
      <div className="flex">
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex h-full w-full gap-8">
        <div className="relative flex-1 shrink-0">
          <textarea
            className="h-full w-full resize-none"
            autoComplete="false"
            placeholder="Please enter text."
            onChange={(e) => {
              setInputText(e.target.value)
              syncChatData({ inputMessage: e.target.value, selectedOption })
            }}
            value={inputText}
          />
        </div>
        <div className="flex-1 shrink-0 border">
          <Typewriter content={outputText} />
        </div>
      </div>
    </div>
  )
}
export { HomePage }
