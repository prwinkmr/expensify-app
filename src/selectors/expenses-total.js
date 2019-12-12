const getExpensesTotal = (expenses) => {
	return expenses.map((expense) => expense.amount).reduce((accumulator, currentValue) => {
		return ( accumulator + currentValue ); 
	}, 0);
};

export default getExpensesTotal;

// Code Before Refactoring
// const getExpensesTotal = (expenses) => {
// 	const amounts = expenses.map((expense) => expense.amount);
// 	const total = amounts.reduce((accumulator, currentValue) => {
// 		return ( accumulator + currentValue ); 
// 	}, 0);
// 	return total;
// };