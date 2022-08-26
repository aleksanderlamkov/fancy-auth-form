import React, { FC } from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { AppRoute } from "../../../types/const"
import "./Logo.pcss"

interface ILogo {
  className?: string
}

const Logo: FC<ILogo> = (props) => {
  const {
    className,
  } = props

  return (
    <Link
      className={classNames(className, "logo")}
      to={AppRoute.index}
      title="Home page"
    >
      Fancy<br/>
      Auth<br/>
      Form
    </Link>
  )
}

export default Logo