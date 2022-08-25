import React, { FC, ReactNode, MouseEvent, useMemo, useCallback, useState, AnimationEventHandler } from "react"
import classNames from "classnames"
import SvgIcon from "../SvgIcon/SvgIcon"
import "./Button.pcss"
import { wait } from "../../../utils/wait"

export type ButtonClickEvent = MouseEvent<HTMLButtonElement | HTMLAnchorElement>

interface ButtonProps {
  className?: string
  type?: "button" | "submit" | "reset"
  title?: string
  icon?: string
  iconPosition?: "before" | "after"
  children?: ReactNode
  onClick?: (event: ButtonClickEvent) => void
}

interface Coordinates {
  x: number
  y: number
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className = "",
    type = "button",
    title,
    icon,
    iconPosition = "after",
    children,
    onClick,
  } = props

  const [ isAnimationEnd, setIsAnimationEnd ] = useState<boolean>(false)
  const [ isRipple, setIsRipple ] = useState<boolean>(false)
  const [ rippleOffset, setRippleOffset ] = useState<Coordinates>({ x: 0, y: 0 })

  const materializeEffect = (coordinates: Coordinates) => {
    setIsAnimationEnd(false)
    setIsRipple(false)
    wait(1).then(() => {
      setRippleOffset(coordinates)
      setIsRipple(true)
    })
  }

  const iconMarkup = useMemo(() => {
    if (!icon) return null
    return <SvgIcon className="button__icon" name={icon} />
  }, [ icon ])

  const bodyMarkup = useMemo(() => {
    return (
      <>
        {(icon && iconPosition === "before") && iconMarkup}
        {children && <span className="button__label">{children}</span>}
        {(icon && iconPosition === "after") && iconMarkup}
      </>
    )
  }, [ iconMarkup, iconPosition, children ])

  const _onClick = useCallback((event: ButtonClickEvent) => {
    const {
      offsetX,
      offsetY,
      target,
    } = event.nativeEvent

    materializeEffect({
      x: offsetX || (target as HTMLElement).offsetLeft / 2,
      y: offsetY || (target as HTMLElement).offsetHeight / 2,
    })
    onClick?.(event)
  }, [ onClick ])

  const onAnimationEnd = () => {
    setIsAnimationEnd(true)
  }

  return (
    <button
      className={classNames(className, "button", {
        "is-ripple": isRipple,
        "is-animation-end": isAnimationEnd,
      })}
      type={type}
      style={{
        "--rippleOffsetX": `${rippleOffset.x}px`,
        "--rippleOffsetY": `${rippleOffset.y}px`,
      } as React.CSSProperties}
      title={title}
      onClick={_onClick}
      onAnimationEnd={onAnimationEnd}
    >
      <span className="button__body">
        {bodyMarkup}
      </span>
    </button>
  )
}

export default Button