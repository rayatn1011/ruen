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
    }, 3)
    return () => clearInterval(intervalId)
  }, [content])

  return (
    <div className="relative h-full rounded border-2 border-stone-300 bg-white outline-none transition focus:border-teal-600">
      <div className="absolute top-0 right-0 bottom-0 left-0 overflow-auto p-2">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  customStyle={{ margin: '4px 0', borderRadius: 4 }}
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
      </div>
    </div>
  )
}

export { TypeMarkdownWriter }
