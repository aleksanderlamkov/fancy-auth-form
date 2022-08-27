import React, { FC } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { AppRoute } from "../../../types/const"
import { useLocation } from "react-router-dom"
import classNames from "classnames"
import Logo from "../Logo/Logo"
import Container from "../../UI/Container/Container"
import UserPanel from "../UserPanel/UserPanel"
import Button from "../../UI/Button/Button"
import "./Header.pcss"

interface IHeader {
  className?: string
}

const Header: FC<IHeader> = (props) => {
  const {
    className,
  } = props

  const { isAuth, email } = useAuth()
  const { pathname } = useLocation()
  const isNotAuthURL = pathname !== AppRoute.auth
  const isNotRegisterURL = pathname !== AppRoute.register

  return (
    <header
      className={classNames(className, "header")}
    >
      <Container className="header__inner">
        <Logo className="header__logo" />
        {
          isAuth ?
            <UserPanel className="header__user-panel" name={email} /> :
            <div className="header__actions">
              {isNotAuthURL && <Button className="header__button" href={AppRoute.auth} icon="sign-in">Sign In</Button>}
              {isNotRegisterURL && <Button className="header__button" href={AppRoute.register} icon="sign-up">Sign Up</Button>}
            </div>
        }
      </Container>
    </header>
  )
}

export default Header