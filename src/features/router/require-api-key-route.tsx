import { Navigate } from 'react-router-dom'
import { RoutePaths } from './router'
import { getThirdPartyApi } from '../utils'

interface Props {
  children: React.ReactNode
}

function RequireApiKeyRoute({ children }: Props) {
  const thirdPartyApi = getThirdPartyApi()
  console.log(thirdPartyApi)
  const hasOpenAiKey = !!thirdPartyApi?.openAi

  return hasOpenAiKey ? (
    <>{children}</>
  ) : (
    <Navigate to={RoutePaths.FillInApiKey} />
  )
}

export { RequireApiKeyRoute }
