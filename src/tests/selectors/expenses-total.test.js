import getExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import moment from 'moment';

const total = getExpenseTotal(expenses);
console.log(total);

test("should return 0 if no expenses", () => {
	const total = getExpenseTotal([]);
	expect(total).toBe(0);
});

test("should correctly add up single expense", () => {
	const total = getExpenseTotal([expenses[0]]);
	expect(total).toBe(6000);
});

test("should correctly add up multiple expenses", () => {
	const total = getExpenseTotal(expenses);
	expect(total).toBe(12000);
});