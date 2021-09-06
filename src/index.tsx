// Basic set up
import * as React from "react"
import * as ReactDOM from "react-dom"
import "reset-css"
import App from "@/App"

// Redux
import { Provider } from "react-redux"
import store from "@/store"

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
)