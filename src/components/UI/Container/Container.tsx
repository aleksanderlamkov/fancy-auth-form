import React from "react"
import "./Container.pcss"

interface ContainerProps {
  children: JSX.Element,
}

const Container = (props: ContainerProps): JSX.Element => {
  const {
    children,
  } = props

  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Container