import React, { FC } from "react"
import classNames from "classnames"
import "./Loader.pcss"

interface ILoader {
  className?: string,
  isShown: boolean
}

const Loader: FC<ILoader> = (props) => {
  const {
    className,
    isShown = false,
  } = props

  return (
    <div
      className={classNames(className, "loader", {
        "is-shown": isShown,
      })}
    >
      <div className="loader__inner">
        <div className="loader__circle loader__circle--main"></div>
        <div className="loader__circle loader__circle--extra"></div>
      </div>
    </div>
  )
}

export default Loader