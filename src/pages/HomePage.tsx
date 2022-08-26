import React from "react"
import PageTitle from "../components/UI/PageTitle/PageTitle"
import RegisterForm from "../components/views/RegisterForm/RegisterForm"

const HomePage = () => {
  return (
    <>
      <PageTitle>Home page</PageTitle>
      <p>The following libraries and technologies were used to create this application:</p>
      <ul>
        <li>Vite</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>React Router</li>
        <li>Redux + Redux Toolkit</li>
        <li>Formik + Yup</li>
        <li>Firebase</li>
        <li>ClassNames</li>
        <li>A few favorite must-have PostCSS plugins</li>
        <li>A small plugin for SVG icons</li>
      </ul>
    </>
  )
}

export default HomePage