// Basic set up
import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"
// @ts-ignore
import App from "./App.tsx"

// Redux
import { Provider } from "react-redux"
// @ts-ignore
import store from "./store/index.ts"

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