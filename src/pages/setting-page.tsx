import { useState } from 'react'

import { getThirdPartyApi, setThirdPartyApi } from '../features/utils'

function SettingPage() {
  const [openAiKey, setOpenAiKey] = useState(getThirdPartyApi()?.openAi)
  const [isChanged, setIsChanged] = useState(false)

  const handleClick = () => {
    setThirdPartyApi('openAi', openAiKey ?? '')
    setIsChanged(false)
  }
  return (
    <div className="flex h-full flex-col">
      <h1 className="mb-6 text-4xl font-bold">Settings</h1>
      <h2 className="mb-4 text-lg font-bold">API Key</h2>
      <div className="flex flex-col gap-y-1">
        <div className="ml-1 text-sm">
          <label className="mr-2" htmlFor="openAiKey">
            OpenAI
          </label>
          <a
            className="text-teal-600 underline decoration-transparent transition hover:decoration-teal-600"
            href="https://platform.openai.com/account/api-keys"
            target="_blank"
            rel="noreferrer"
          >
            application URL
          </a>
        </div>
        <input
          id="openAiKey"
          type="text"
          value={openAiKey}
          onChange={(e) => {
            setIsChanged(true)
            setOpenAiKey(e.target.value)
          }}
        />
      </div>
      {isChanged && (
        <div className="mt-auto">
          <button
            className="ml-auto block rounded bg-teal-600 px-4 py-2 text-teal-50 transition hover:bg-teal-700 active:bg-teal-800"
            type="button"
            onClick={handleClick}
          >
            Save
          </button>
        </div>
      )}
    </div>
  )
}

export { SettingPage }
