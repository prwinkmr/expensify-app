import authReducer from '../../reducers/auth';

test('should set uid for login',() => {
	const action = {
		type: 'LOGIN',
		uid: 'abcd1234'
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
	const currentState = {
		uid: 'abcd1234'
	};
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer(currentState, action);
	expect(state).toEqual({});
});