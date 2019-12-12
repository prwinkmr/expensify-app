const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			]; // same as return state.concat(action.expense) using spread operator
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id); // we can use exxpense and then access id by epense.id
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				}
				else {
					return expense;
				}
			});
		case 'SET_EXPENSES':
			return action.expenses;
		default: 
			return state;
	}
};

export default expensesReducer;