import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setThirdPartyApi } from '../features/utils'
import { RoutePaths } from '../features/router'

function FillInApiKeyPage() {
  const navigate = useNavigate()
  const [apiKey, setApiKey] = useState('')

  const isApiKeyEmpty = apiKey.length === 0

  const handleClick = () => {
    setThirdPartyApi('openAi', apiKey)
    navigate(RoutePaths.Home)
  }

  return (
    <div className="h-screen w-screen bg-stone-100 p-16">
      <div className="w-3/4">
        <h1 className="mb-4 text-2xl font-bold">Welcome to Ruen!</h1>
        <div className="mb-8 flex flex-col gap-2">
          <p>
            Please enter your&#32;
            <span className="font-medium underline decoration-stone-700">
              API Key
            </span>
            &#32;from OpenAI to use this application.
          </p>
          <p>
            If you don&#39;t have a key, please visit&#32;
            <a
              className="text-teal-600 underline decoration-transparent transition hover:decoration-stone-900"
              href="https://platform.openai.com/account/api-keys"
              target="_blank"
              rel="noreferrer"
            >
              https://platform.openai.com/account/api-keys
            </a>
            &#32; to create one.
          </p>
          <p>Thank you for using Ruen!</p>
        </div>
        <div>
          <input
            id="apiKey"
            className="mb-8 block w-full"
            type="text"
            placeholder="Please enter your API Key."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button
            className={
              'ml-auto block rounded px-4 py-2 text-teal-50 transition ' +
              (isApiKeyEmpty
                ? 'bg-teal-600/50'
                : 'bg-teal-600 hover:bg-teal-700 active:bg-teal-800')
            }
            type="button"
            disabled={isApiKeyEmpty}
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export { FillInApiKeyPage }
