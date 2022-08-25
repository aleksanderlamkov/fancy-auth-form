import React, { useEffect } from "react"
import AuthForm from "./components/views/AuthForm/AuthForm"
import Container from "./components/UI/Container/Container"

enum stateClasses {
  isDomReady = "is-dom-ready"
}

const App = (): JSX.Element => {
  useEffect(() => {
    document.documentElement.classList.add(stateClasses.isDomReady)
  }, [])

  return (
    <div className="app">
      <Container>
        <AuthForm/>
      </Container>
    </div>
  )
}

export default App