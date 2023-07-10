import { LoadingContainer } from './styles'

import { useTheme } from 'styled-components'

import { BounceLoader } from 'react-spinners'

export function Loading() {
  const theme = useTheme()

  return (
    <LoadingContainer>
      <BounceLoader
        color={theme['base-label']}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingContainer>
  )
}
