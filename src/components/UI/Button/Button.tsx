import React, { FC, ReactNode, MouseEvent, useMemo, useCallback, useState } from "react"
import classNames from "classnames"
import SvgIcon from "../SvgIcon/SvgIcon"
import { wait } from "../../../utils/wait"
import { Link } from "react-router-dom"
import "./Button.pcss"

type ButtonClickEvent = MouseEvent<HTMLButtonElement | HTMLAnchorElement>

interface IButton {
  className?: string
  children?: ReactNode
  type?: "button" | "submit" | "reset"
  href?: string
  title?: string
  ariaLabel?: string
  isDisabled?: boolean
  icon?: string
  iconPosition?: "before" | "after"
  onClick?: (event: ButtonClickEvent) => void
}

interface Coordinates {
  x: number
  y: number
}

const Button: FC<IButton> = (props) => {
  const {
    className,
    children,
    type = "button",
    href = "",
    title,
    ariaLabel,
    isDisabled = false,
    icon,
    iconPosition = "after",
    onClick,
  } = props

  const [ isAnimationEnd, setIsAnimationEnd ] = useState<boolean>(false)
  const [ isRipple, setIsRipple ] = useState<boolean>(false)
  const [ rippleOffset, setRippleOffset ] = useState<Coordinates>({ x: 0, y: 0 })
  const isLink = Boolean(href)

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
      <span className="button__body">
        {(icon && iconPosition === "before") && iconMarkup}
        {children && <span className="button__label">{children}</span>}
        {(icon && iconPosition === "after") && iconMarkup}
      </span>
    )
  }, [ iconMarkup, iconPosition, children ])

  const _onClick = useCallback((event: ButtonClickEvent) => {
    const {
      offsetX,
      offsetY,
      target,
    } = event.nativeEvent

    materializeEffect({
      x: offsetX || (target as HTMLElement).offsetWidth / 2,
      y: offsetY || (target as HTMLElement).offsetHeight / 2,
    })
    onClick?.(event)
  }, [ onClick ])

  const onAnimationEnd = () => {
    setIsAnimationEnd(true)
  }

  const args = {
    className: classNames(className, "button", {
      "is-ripple": isRipple,
      "is-animation-end": isAnimationEnd,
    }),
    style: {
      "--rippleOffsetX": `${rippleOffset.x}px`,
      "--rippleOffsetY": `${rippleOffset.y}px`,
    } as React.CSSProperties,
    title,
    ["aria-label"]: ariaLabel,
    onClick: _onClick,
    onAnimationEnd,
  }

  return isLink ?
    <Link {...args} to={href}>{bodyMarkup}</Link> :
    <button {...args} type={type} disabled={isDisabled}>{bodyMarkup}</button>
}

export default Button