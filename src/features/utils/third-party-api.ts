interface ThirdPartyApi {
  openAi: string
}

type ThirdPartyApiType = 'openAi'

function getThirdPartyApi() {
  const originalData = localStorage.getItem('thirdPartyApi')
  return originalData ? (JSON.parse(originalData) as ThirdPartyApi) : null
}

function setThirdPartyApi(key: ThirdPartyApiType, value: string) {
  const newData = {
    ...getThirdPartyApi(),
    [key]: value,
  }
  localStorage.setItem('thirdPartyApi', JSON.stringify(newData))
}

export { getThirdPartyApi, setThirdPartyApi }
