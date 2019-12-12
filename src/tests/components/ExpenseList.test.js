import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import { shallow } from 'enzyme';
import expenses from  '../fixtures/expenses';

test('should render ExpenseList with expenses correctly',() => {
	const wrapper = shallow(<ExpenseList expenses={expenses}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList without expenses(empty array) correctly',() => {
	const wrapper = shallow(<ExpenseList expenses={[]}/>);
	expect(wrapper).toMatchSnapshot();
});