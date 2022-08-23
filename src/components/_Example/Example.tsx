import React from "react"
import classNames from "classnames"
import "./Example.pcss"

interface ExampleProps {
  className?: string
}

const Example = (props: ExampleProps): JSX.Element => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, "example")}
    >

    </div>
  )
}

export default Example