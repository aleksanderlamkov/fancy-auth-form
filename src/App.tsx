import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppRoute, AppStateClasses } from "./types/const"
import Layout from "./components/views/Layout/Layout"
import PrivateRoute from "./components/views/PrivateRoute/PrivateRoute"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import AuthPage from "./pages/AuthPage"
import ErrorPage from "./pages/ErrorPage"
import Page from "./components/views/Page/Page"

const App = (): JSX.Element => {
  useEffect(() => {
    document.documentElement.classList.add(AppStateClasses.isDomReady)
  }, [])

  return (
    <div className="app">
      <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
        <Routes>
          <Route path={AppRoute.index} element={<Layout />}>
            <Route
              index
              element={(
                <PrivateRoute>
                  <Page>
                    <HomePage/>
                  </Page>
                </PrivateRoute>
              )}
            />
            <Route
              path={AppRoute.auth}
              element={(
                <Page title="Fancy Auth Form: Sign In" hasRedirectToHomeIfAuth>
                  <AuthPage />
                </Page>
              )}
            />
            <Route
              path={AppRoute.register}
              element={(
                <Page title="Fancy Auth Form: Sign Up" hasRedirectToHomeIfAuth>
                  <RegisterPage />
                </Page>
              )}
            />
            <Route
              path={AppRoute.error404}
              element={(
                <Page title="Fancy Auth Form: Page Not Found">
                  <ErrorPage />
                </Page>
              )}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App