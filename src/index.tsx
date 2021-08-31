// Basic set up
import * as React from "react"
import * as ReactDOM from "react-dom"
import "reset-css"
import App from "./App"

// Redux
import { Provider } from "react-redux"
import store from "./store/index"

// Router
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById("app")
)