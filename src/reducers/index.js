import { combineReducers } from 'redux'
import todos from './add_todo'

const todoApp = combineReducers({
	'todos':todos
})

export default todoApp