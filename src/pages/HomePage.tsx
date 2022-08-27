import React, { FC } from "react"
import PageTitle from "../components/UI/PageTitle/PageTitle"
import RegisterForm from "../components/views/RegisterForm/RegisterForm"

const HomePage: FC = () => {
  return (
    <>
      <PageTitle>Home page</PageTitle>
      <p>The following libraries and technologies were used to create this application:</p>
      <ul>
        <li><a href="https://vitejs.dev/" target="_blank" title="Go to an external website">Vite</a></li>
        <li><a href="https://www.typescriptlang.org/" target="_blank" title="Go to an external website">TypeScript</a></li>
        <li><a href="https://reactjs.org/" target="_blank" title="Go to an external website">React</a></li>
        <li><a href="https://reactrouter.com/en/main" target="_blank" title="Go to an external website">React Router</a></li>
        <li><a href="https://redux.js.org/" target="_blank" title="Go to an external website">Redux</a> + <a href="https://redux-toolkit.js.org/" target="_blank" title="Go to an external website">Redux Toolkit</a> + <a href="https://github.com/rt2zz/redux-persist" target="_blank" title="Go to an external website">Redux Persist</a></li>
        <li><a href="https://formik.org/" target="_blank" title="Go to an external website">Formik</a> + <a href="https://github.com/jquense/yup" target="_blank" title="Go to an external website">Yup</a></li>
        <li><a href="https://firebase.google.com/" target="_blank" title="Go to an external website">Firebase</a></li>
        <li><a href="https://github.com/JedWatson/classnames" target="_blank" title="Go to an external website">ClassNames</a></li>
        <li>A few favorite must-have <a href="https://postcss.org/" target="_blank" title="Go to an external website">PostCSS</a> plugins</li>
        <li>A small <a href="https://github.com/vbenjs/vite-plugin-svg-icons" target="_blank" title="Go to an external website">plugin</a> for SVG icons</li>
      </ul>
    </>
  )
}

export default HomePage