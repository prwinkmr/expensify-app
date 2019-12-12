import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense',() => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={2345} />);
	expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={12} expenseTotal={142503475.34} />);
	expect(wrapper).toMatchSnapshot();
});


