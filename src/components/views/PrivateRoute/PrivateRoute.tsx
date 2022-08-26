import React, { FC } from "react"
import { Navigate } from "react-router-dom"
import { AppRoute } from "../../../types/const"
import { useAuth } from "../../../hooks/useAuth"

interface IPrivateRoute {
  children: JSX.Element
}

const PrivateRoute: FC<IPrivateRoute> = (props) => {
  const {
    children,
  } = props

  const { isAuth } = useAuth()

  return isAuth ? children : <Navigate to={AppRoute.auth} />
}

export default PrivateRoute
