import React, { FC } from "react"
import { AppRoute } from "../../../types/const"
import classNames from "classnames"
import Button from "../../UI/Button/Button"
import "./Error404.pcss"

interface IError404 {
  className?: string
}

const Error404: FC<IError404> = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, "error404")}
    >
      <p>Oooops! Page not found :(</p>
      <Button href={AppRoute.index}>Go to home page</Button>
    </div>
  )
}

export default Error404