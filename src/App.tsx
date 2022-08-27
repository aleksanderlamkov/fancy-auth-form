import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppRoute, AppStateClasses } from "./types/const"
import Layout from "./components/views/Layout/Layout"
import PrivateRoute from "./components/views/PrivateRoute/PrivateRoute"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import AuthPage from "./pages/AuthPage"

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
                  <HomePage />
                </PrivateRoute>
              )}
            />
            <Route path={AppRoute.auth} element={<AuthPage />} />
            <Route path={AppRoute.register} element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App