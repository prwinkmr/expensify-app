import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
	<Link className="list-item" to={`/edit/${props.id}`}>
		<div>
			<h3 className="list-item__title">{props.description}</h3>
			<span className="list-item__subtitle">{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
			<p className="list-item__optional">{ (props.note) ? 'Note: ' + props.note  :  'Add a note' }</p>
		</div>
		<h3 className="list-item__data"> {'Rs.' + numeral(props.amount).format('0,0[.]00')} </h3>
	</Link>
);

export default ExpenseListItem;