import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// We have a named export as we want to test the unconnected version
export const ExpenseList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile">Expenses</div>
			<div className="show-for-desktop">Expense</div>
			<div className="show-for-desktop">Amount</div>
		</div>
		<div className="list-body">
			{
				props.expenses.length === 0 ? (
					<div className="list-item list-item--message">
						<span>No Expenses</span>
					</div>
				) : (
					props.expenses.map((expense) => {
						return (<ExpenseListItem key = {expense.id} {...expense} />);
					})
				)
			}
		</div>
	</div>
); 

// const ConnectedExpenseList = connect((state) => {
// 	return {
// 		expenses: state.expenses
// 	};
// })(ExpenseList); //connect() returns a function and in that we pass our component
// export default ConnectedExpenseList;

// The above commented code is the same as the below code we have taken 
// the function and created a new variable and passed it instead to connect()

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);

