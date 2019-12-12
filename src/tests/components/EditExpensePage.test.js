import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history =  { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			expense={expenses[2]}
			startRemoveExpense={startRemoveExpense}
			startEditExpense={startEditExpense} 
			history={history}
		/>
	);	
});

test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense correctly', () => {
	const updates = {
		description: 'Random Stuff',
		note: 'Random Note'
	};
	wrapper.find('ExpenseForm').prop('onSubmit')(updates);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, updates);
});

test('should handle startRemoveExpense correctly', () => {
	wrapper.find('button').simulate('click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});