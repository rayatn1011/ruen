import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const TypeMarkdownWriter = ({ content }: { content: string }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    let textLengthCount = 0
    const intervalId = setInterval(() => {
      setText(content.substring(0, textLengthCount++))
      if (textLengthCount > content.length) clearInterval(intervalId)
    }, 10)
    return () => clearInterval(intervalId)
  }, [content])

  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus as any}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {text}
    </ReactMarkdown>
  )
}

export { TypeMarkdownWriter }
