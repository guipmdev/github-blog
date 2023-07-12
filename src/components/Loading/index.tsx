import { LoadingContainer } from './styles'

import { useTheme } from 'styled-components'

import { PropagateLoader } from 'react-spinners'

export function Loading() {
  const theme = useTheme()

  return (
    <LoadingContainer className="loading">
      <PropagateLoader
        color={theme['base-label']}
        speedMultiplier={0.75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingContainer>
  )
}
