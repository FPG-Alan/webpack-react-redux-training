import React from 'react'
import { render } from 'react-dom'
import App from './app.js'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

render(
	<Provider store={store}>
		<App/>
	</Provider>
	,
    document.getElementById("main-container")
);
