import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
  databaseURL: process.env.FIREBASE_DATABASE_URL ,
  projectId: process.env.FIREBASE_PROJECT_ID ,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.FIREBASE_APP_ID 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref().set({
// 	name: 'Pravin Gupta',
// 	age: 24,
//   job: {
//     title: 'Project Engineer',
//     company: 'Wipro'
//   },
// 	location: {
// 		state: 'Karnataka',
// 		country: 'India'
// 	}
// }).then(() => {
//   console.log('Successfully inserted data');
// }).catch((e) => {
//   console.log('Try Again: ', e);
// });

// database.ref('bio').remove()
//   .then(() => {
//     console.log('Successful');
//   })
//   .catch((e) => {
//     console.log('Try Again');
//   });

// database.ref().update({
//   name: 'Pravin',
//   'job/title': 'Web Developer',
//   'location/state': 'Kolkata'
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   }).catch((e) => {
//     console.log('Error: ', e);
//   });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//   console.log('Try Again: ', e);
// });

// setTimeout(() => {
//   console.log('Cancelled');
//   database.ref().off('value', onValueChange);
// }, 10000);

// database.ref('expenses').push({
//   description: 'Rent Bill',
//   amount: 6000,
//   note: '',
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'Random Bill',
//   amount: 5000,
//   note: '',
//   createdAt: 7890383
// });

// database.ref('expenses').push({
//   description: 'Water Bill',
//   amount: 5800,
//   note: '',
//   createdAt: 89089383
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Try Again: ', e);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Random Bill',
//     amount: 5000,
//     note: '',
//     createdAt: 7890383
//   });
// }, 6000);
