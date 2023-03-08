import { useEffect, useState } from 'react'

function Typewriter({ content }: { content: string }) {
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setText(content.substring(0, i++))
      if (i > content.length) clearInterval(intervalId)
    }, 10)
    return () => clearInterval(intervalId)
  }, [content])

  return (
    <textarea
      readOnly
      className="h-full w-full resize-none"
      autoComplete="false"
      value={text}
    />
  )
}

export { Typewriter }
