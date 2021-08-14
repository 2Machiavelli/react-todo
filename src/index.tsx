import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"
// @ts-ignore
import App from "./App.tsx"
import { createStore } from "redux"
import { Provider } from "react-redux"
// @ts-ignore
import todos from "./store/reducers/index.ts"

const store = createStore(
	todos
)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>,
	</React.StrictMode>,
	document.getElementById("app")
)