const promise = new Promise((resolve, reject) => {
	// resolve('Successfully Done');
	reject('Try again');
});

promise.then((data) => {
	console.log("hi");
}).catch((error) => {
	console.log('error: ',error);
});

// const greet = () => {
// 	setTimeout(() => {
// 		console.log('Hello');
// 	}, 5000);
// };
// console.log('before');
// greet();
// console.log('after');
