const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('Should add two numbers', () => {
	const result = add(3, 4);
	// if( result !== 7) {
	// 	throw new Error(`Added 3 and 4. The result was $(result). Expected 7`);
	// }
	expect(result).toBe(7);
});

test('Should be a valid greeting', () => {
	const greeting = generateGreeting('Pravin');
	expect(greeting).toBe('Hello Pravin');
})