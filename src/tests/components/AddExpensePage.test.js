import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach(() => {
	startAddExpense = jest.fn();
	history =  { push: jest.fn() };
	wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);	
});

test('should render AddExpensePage correctly', () => {
	// const addExpense = jest.fn();
	// const history =  { push: jest.fn() };
	// const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
	expect(wrapper).toMatchSnapshot();
});

test('should handle startAddExpense correctly', () => {
	// const addExpense = jest.fn();
	// const history =  { push: jest.fn() };
	// const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});