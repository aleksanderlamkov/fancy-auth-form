import React, { AnimationEvent, FC } from "react"
import classNames from "classnames"
import { getStatuses } from "../../../store/slices/statusesSlice"
import { useAppSelector } from "../../../hooks/redux"
import "./StatusBar.pcss"

const StatusBar: FC = () => {
  const items = useAppSelector(getStatuses)

  if (!items.length) return null

  const onLabelAnimationEnd = ({ target }: AnimationEvent<HTMLDivElement>) => {
    (target as HTMLInputElement).remove()
  }

  return (
    <div className="status-bar">
      <ul className="status-bar__list">
        {items.map(({ label, expirationTimeMS }, index) => {
          return (
            <li className="status-bar__item" key={index}>
              <div
                className="status-bar__label"
                style={{ "--expirationTimeMS": `${expirationTimeMS}ms` } as React.CSSProperties}
                onAnimationEnd={onLabelAnimationEnd}
              >
                {label}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StatusBar