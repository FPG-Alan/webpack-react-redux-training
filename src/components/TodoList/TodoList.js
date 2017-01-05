import React, { Component }from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class TodoList extends Component{
	render(){
		return(
			<div>
				<div>This is a ToDo List:</div>
				<ul>
					{this.props.todolist.map((todo) => (<Todo key = {todo.id} {...todo}/>))}
				</ul>
				<AddTodo />
			</div>
		)
	}
}

export default TodoList

