import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from './providers/Store'

const AppContainer = styled.div`
  border: 1px solid dodgerblue;
`

export default function App() {
  const [appState] = useContext(AppStateContext)
  console.log(appState)
  return (
    <AppContainer>
      <h1>App Component</h1>
    </AppContainer>
  )
}