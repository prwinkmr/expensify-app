import moment from 'moment';

const expenses = [{
	id: '1',
	description: 'Rent Bill',
	amount: 6000,
	note: '',
	createdAt: 0
}, {
	id: '2',
	description: 'Gas Bill',
	amount: 1000,
	note: '',
	createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
	id: '3',
	description: 'Food',
	amount: 5000,
	note: '',
	createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;