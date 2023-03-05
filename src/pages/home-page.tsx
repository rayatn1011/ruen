import { useState } from 'react'

function HomePage() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  return (
    <div className="h-screen w-screen bg-stone-100 p-16">
      <div className="flex h-full w-full gap-8">
        <div className="relative flex-1 shrink-0">
          <textarea
            className="h-full w-full resize-none"
            autoComplete="false"
            placeholder="Please enter text."
            onChange={(e) => setInputText(e.target.value)}
          >
            {inputText}
          </textarea>
        </div>
        <div className="flex-1 shrink-0 border">
          <textarea
            readOnly
            className="h-full w-full resize-none"
            autoComplete="false"
          >
            {outputText}
          </textarea>
        </div>
      </div>
    </div>
  )
}
export { HomePage }
