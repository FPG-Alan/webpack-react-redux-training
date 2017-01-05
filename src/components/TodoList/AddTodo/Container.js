import { connect } from 'react-redux'
import AddTodo from './AddTodo'

// map state to props
const mapStateToProps = (state) => {
	return {
		todolist: state.todos
	}
}
// map Dispatch from props
const mapDispatchToProps = (dispatch) => {
	return {
    	onAddClick: () => dispatch({
    		'type':'ADD',
    		'text':'test1',
    		'completed':false
    	})
  	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)

export default Container