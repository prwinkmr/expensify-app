import uuid from 'uuid';
import { createStore, combineReducers } from 'redux';

console.log('Expensify');

// ADD_EXPENSE Action Generator
const addExpense = (
	{
		description = '',
		note = '',
		amount = 0,
		createdAt = 0
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

const removeExpense = ({id} = {}) => (
	{
		type: 'REMOVE_EXPENSE',
		id
	}
);

const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
}); 

const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
}); 

// Expense Reducer
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
		default: 
			return state;
	}
};

// Filter Reducer
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text :action.text
			}
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		default:
			return state;
	}
};

//Get Visible Expenses 
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		}
		else if(sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
	description: 'Coffee',
	note: 'Note',
	amount: 300,
	createdAt: 323
}));
const expenseTwo =  store.dispatch(addExpense({
	description: 'Tea',
	note: 'Note',
	amount: 234,
	createdAt: 230
}));
const expenseThree =  store.dispatch(addExpense({
	description: 'Tea2',
	note: 'Note',
	amount: 434,
	createdAt: 250
}));
store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {note :'Rent'}));
store.dispatch(setTextFilter('ee'));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(300));
store.dispatch(setEndDate(300));
store.dispatch(setStartDate());
store.dispatch(setEndDate());