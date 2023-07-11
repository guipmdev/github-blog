import { LoadingContainer } from './styles'

import { useTheme } from 'styled-components'

import { PropagateLoader } from 'react-spinners'

export function Loading() {
  const theme = useTheme()

  return (
    <LoadingContainer>
      <PropagateLoader
        color={theme['base-label']}
        size={75}
        speedMultiplier={0.75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingContainer>
  )
}
