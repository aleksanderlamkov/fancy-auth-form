import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "./store"
import App from "./App"
import Loader from "./components/UI/Loader/Loader"
import "virtual:svg-icons-register"
import "./styles"
import "./firebase.js"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={<Loader isShown/>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)
