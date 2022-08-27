import React, { FC, ReactNode } from "react"
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import { useAuth } from "../../../hooks/useAuth"
import { Navigate } from "react-router-dom"
import { AppRoute } from "../../../types/const"

interface IPage {
  title?: string
  children: ReactNode
  hasRedirectToHomeIfAuth?: boolean
}

const Page: FC<IPage> = (props) => {
  const {
    title = "Fancy Auth Form",
    children,
    hasRedirectToHomeIfAuth = false,
  } = props
  const { isAuth } = useAuth()

  if (hasRedirectToHomeIfAuth && isAuth) return <Navigate to={AppRoute.index} />

  useDocumentTitle(title)

  return (
    <>
      {children}
    </>
  )
}

export default Page