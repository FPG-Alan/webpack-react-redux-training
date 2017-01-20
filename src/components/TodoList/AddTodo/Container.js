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
    	onAddClick: (e) => {
	    	dispatch({
	    		'type':'ADD',
	    		'text':e.value,
	    		'completed':false
	    	})
    	}
  	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)

export default Container