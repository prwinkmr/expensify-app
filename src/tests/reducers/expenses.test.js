import expensesReducer from '../../reducers/expenses';
import expenses from  '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual([]);
});

test('should remove expense by id present in the array', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[0] , expenses[2] ]); //2nd array element must be removed as it has the id=2 
});

test('should not remove expense if id not present in the array', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses); //Nothing should be removed
});

test('should add an expense', () => {
	const expense = {
		id: '4',
		description: 'Water Bill',
		amount: 8000,
		note: '',
		createdAt: moment(0).add(20, 'days').valueOf()
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense if id matches', () => {
	const id = expenses[2].id;
	const updates = {
		description: 'Water Bill',
		amount: 8000,
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
	const state = expensesReducer(expenses, action);
	expect(state[2]).toEqual({...expenses[2], ...updates});
});

test('should not edit an expense if expense not present', () => {
	const id = '-1';
	const updates = {
		description: 'Water Bill',
		amount: 8000,
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[1]]
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
})