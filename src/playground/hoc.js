import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The Info is : {props.info}</p>
	</div>
);

const withAdminWrapping = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please do not share</p>}
			<WrappedComponent {...props}/>
		</div>
	);
};
const AdminInfo = withAdminWrapping(Info);


const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to see the details.</p>}
		</div>
	);
}
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info = 'top secret'/>, document.getElementById('app'));