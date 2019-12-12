import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
	const state = filtersReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sort by to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')		
	};
	const action = {
		type: 'SORT_BY_DATE'
	};
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const currentState = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined		
	};
	const action = {
		type: 'SET_TEXT_FILTER',
		text: 'Bill'
	};
	const state = filtersReducer(currentState, action);
	expect(state.text).toBe('Bill');
});

test('should set start date filter', () => {
	const currentState = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined		
	};
	const startDate = moment(0).add(2, 'days');
	const action = {
		type: 'SET_START_DATE',
		startDate
	};
	const state = filtersReducer(currentState, action);
	expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
	const currentState = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined		
	};
	const endDate=  moment(0).add(3, 'days')
	const action = {
		type: 'SET_END_DATE',
		endDate
	};
	const state = filtersReducer(currentState, action);
	expect(state.endDate).toEqual(endDate);
});
