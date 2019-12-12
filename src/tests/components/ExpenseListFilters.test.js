import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByAmount = jest.fn();
	sortByDate = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			setTextFilter = {setTextFilter}
			sortByDate = {sortByDate}
			sortByAmount = {sortByAmount}
			setStartDate = {setStartDate}
			setEndDate = {setEndDate}
			filters = {filters}
		/>
	);
});

test('should render ExpenseListFilters with filter data correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilter data correctly', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change correctly', () => {
	const value = 'rent';
	wrapper.find('input').simulate('change', {
		target : { value }
	});
	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date correctly', () => {
	const value = 'date';
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find('select').simulate('change', {
		target : { value }
	});
	expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by date correctly', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change', {
		target : { value }
	});
	expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes correctly', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0).add(8, 'years');
	wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate});
	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change correctly', () => {
	const focused = 'startDate';
	wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
	expect(wrapper.state('calendarFocused')).toBe(focused);
});