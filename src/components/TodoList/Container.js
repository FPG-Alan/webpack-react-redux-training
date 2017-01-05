import { connect } from 'react-redux'
import TodoList from './TodoList'

// map state to props
const mapStateToProps = (state) => {
	return {
		todolist: state.todos
	}
}
// 

const Container = connect(
	mapStateToProps
)(TodoList)

export default Container