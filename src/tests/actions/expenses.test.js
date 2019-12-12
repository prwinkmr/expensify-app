import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, startEditExpense, removeExpense, startRemoveExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = "abcdqwertyuiop";
const defaultAuthState = {
	auth: {
		uid
	}
};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
	const expenseData = {};
	expenses.forEach(({ id, description, amount, note, createdAt }) => {
		expenseData[id] = { description, amount, note, createdAt };
	});
	database.ref(`users/${uid}/expenses`).set(expenseData).then( () => done());
});

test('should set up edit expense action object', () => {
	const action = editExpense('qwerty', {note: 'This is new note.'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 'qwerty',
		updates: {
			note: 'This is new note.'
		}
	});
});

test('should edit expense in database', (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[1].id;
	const updates = {
		note: 'New Note',
		amount: 5566
	};
	store.dispatch(startEditExpense(id, updates)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'EDIT_EXPENSE',
			id,
			updates
		});
		return database.ref(`users/${uid}/expenses/${id}`).once('value');
	}).then((snapshot) => {
		expect({ id: snapshot.key, ...snapshot.val() }).toEqual({ ...expenses[1], ...updates });
		done();
	});
});

test('should setup add expense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const expenseData = {
		description: 'Rent',
		amount: 1234,
		createdAt: 3000,
		note: 'Random Note'
	};

	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test('should add expense with defaults to database and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const expenseDefaults = {
		description: '',
		amount: 0,
		createdAt: 0,
		note: ''
	};

	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		});
		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseDefaults);
		done();
	});
});

test('should set expenses', (done) => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
	done();
});

test('should fetch expenses from the database', (done) => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});

test('should set up remove expense action object', () => {
	const action = removeExpense( {id : 'qwerty'} );
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: 'qwerty'
	});
});

test('should remove expense from the database', (done) => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startRemoveExpense( { id : expenses[2].id } )).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id: expenses[2].id
		});
		return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy();
		done();
	});
});

// test('should set up add expense action object',() => {
// 	const expenseData = {
// 		description: 'Rent',
// 		amount: 1234,
// 		createdAt: 3000,
// 		note: 'Random Note'
// 	}
// 	const action = addExpense(expenseData);
// 	expect(action).toEqual({
// 		type: 'ADD_EXPENSE',
// 		expense: {
// 			...expenseData,
// 			id : expect.any(String)
// 		}
// 	});
// });

// test('should set up add expense action object defaults',() => {
// 	const expenseExpectedData = {
// 		description: '',
// 		amount: 0,
// 		createdAt: 0,
// 		note: ''
// 	}
// 	const action = addExpense();
// 	expect(action).toEqual({
// 		type: 'ADD_EXPENSE',
// 		expense: {
// 			...expenseExpectedData,
// 			id : expect.any(String)
// 		}
// 	});
// });