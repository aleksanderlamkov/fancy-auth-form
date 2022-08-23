import React from "react"
import AuthForm from "./components/views/AuthForm/AuthForm"
import Container from "./components/views/Container/Container"

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Container>
        <AuthForm/>
      </Container>
    </div>
  )
}

export default App