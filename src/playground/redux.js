import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
	type : 'INCREMENT',
	incrementBy
}); //We are setting the default to a empty object in the paramaters in case nothing is passed.

const decrementCount = ({decrementBy = 1} = {}) => ({
	type : 'DECREMENT',
	decrementBy
}); 

const setCount = ({count = 0} = {}) => ({
	type : 'SET',
	count
}); 

const resetCount = () => ({
	type : 'RESET'
}); 

const countReducer = (state = {count : 0}, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			return {
				count: action.count
			}
		default:
		 return state;
	}
};
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});
store.dispatch(incrementCount({incrementBy : 2}));
store.dispatch(incrementCount());
store.dispatch(setCount({count: 30}));
store.dispatch(decrementCount({decrementBy : 4}));
store.dispatch(decrementCount());
// unsubscribe();
store.dispatch(setCount());
store.dispatch(incrementCount({incrementBy : 15}));
store.dispatch(resetCount());

console.log('destructuring.......');
const person = {
	name : 'Pravin',
	age : 23,
	location : {
		city : 'Bangalore',
		temp : 28
	}
};

// const { name = 'Anonymous', age} = person;
// console.log(`${name} is ${age} years old.`);
// const {city, temp : temperature = 0} = person.location;
// console.log(`It's ${temperature} C in ${city}.`);

const address = ['3rd Cross Street', 'Whitefield', 'Karnataka', '566066'];
const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}`);