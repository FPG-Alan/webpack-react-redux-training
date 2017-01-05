const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					id: state.length>0?state[state.length-1].id+1:0,
					text: action.text,
					completed: false
				}
			]
		default: 
			return state
	}
}

export default todos