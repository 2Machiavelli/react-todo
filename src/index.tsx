// node_modules/react
import * as React from "react"
import * as ReactDOM from "react-dom"
// node_modules/reset-css
import "reset-css"
// node_modules/react-redux
import { Provider } from "react-redux"

// components
import App from "@/App"

// store
import store from "@/store"

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
)