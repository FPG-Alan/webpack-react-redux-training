import React, {Component} from 'react'
import './style.css'

class AddTodo extends Component{
	render(){
		let inputDom;
		const {onAddClick} = this.props
		return (
			<div>
				<input ref={node=>{inputDom = node}}/>
				<div className="add-btn" onClick={onAddClick}>Add New Todo</div>
			</div>
		)
	}
}

export default AddTodo