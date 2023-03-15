import { useState, useRef, useEffect } from 'react'
import { useChat } from '../features/apis'
import { Typewriter, TypeMarkdownWriter } from '../features/type-writer'

enum Role {
  polishing = 'polishing',
  translate = 'translate',
  analyze = 'analyze',
  summarize = 'summarize',
  i18nKey = 'i18nKey',
}

const mapOptionToMessage = {
  [Role.polishing]: '使用繁體中文语言潤飾此段文本',
  [Role.translate]: '翻譯成台灣常用用法之繁體中文白話文',
  [Role.analyze]: '優化此段程式碼，使其更易讀，給我 markdown ',
  [Role.summarize]: '用最簡潔的語言使用中文總結此段文本',
  [Role.i18nKey]:
    '將以下我說的任何字句轉換成i18n的key，只能是英文使用 lower_snake_case',
}

const options = [
  {
    value: Role.polishing,
    label: '潤飾',
  },
  {
    value: Role.translate,
    label: '翻譯',
  },
  {
    value: Role.analyze,
    label: '優化',
  },
  {
    value: Role.summarize,
    label: '總結',
  },
  {
    value: Role.i18nKey,
    label: '抽多語系',
  },
]

function HomePage() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [selectedOption, setSelectedOption] = useState<Role>(options[0].value)
  const { fetchChat, chatData, isChatLoading, isChateError } = useChat()
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === selectedOption) return
    setSelectedOption(event.target.value as Role)
    syncChatData({
      inputMessage: inputText,
      selectedOption: event.target.value as Role,
      timer: 0,
    })
  }

  const syncChatData = ({
    inputMessage,
    selectedOption,
    timer = 2000,
  }: {
    inputMessage: string
    selectedOption: Role
    timer?: number
  }) => {
    debounceRef.current && clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      const messages = [
        {
          role: 'user',
          content: mapOptionToMessage[selectedOption],
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
          {selectedOption === Role.analyze ? (
            <TypeMarkdownWriter content={outputText} />
          ) : (
            <Typewriter content={outputText} />
          )}
        </div>
      </div>
    </div>
  )
}
export { HomePage }
