import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAF6EPZ8B6xCWduClZ9t38isafRx5gH450",
    authDomain: "expense-tracker-7e4d9.firebaseapp.com",
    databaseURL: "https://expense-tracker-7e4d9.firebaseio.com",
    projectId: "expense-tracker-7e4d9",
    storageBucket: "expense-tracker-7e4d9.appspot.com",
    messagingSenderId: "329985550837"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider,database as default };

// database.ref('expenses').on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref('expenses').push({
//     description: 'First real life data entry in firebase',
//     note: 'Finally',
//     amount: 23.21,
//     createdAt: 124000
// });

// database.ref('expenses').push({
//     description: 'Not needed',
//     note:'why is it named Firebase',
//     amount: 12,
//     createdAt: 132
// });

// database.ref('expenses').push({
//     description: 'What am I doing?',
//     note: 'Pata nahi',
//     amount : 0,
//     createdAt: 32341432,
// })

// const onValueChange = database.ref().on('value',(snapshot) => {
//     console.log(snapshot.val().name +' is a '+snapshot.val().job.title+' in'+ snapshot.val().job.company+'living in '+snapshot.val().location.city);
// })

// setTimeout(() => {
//     database.ref('job/company').set('NetFlix');
// }, 3000);

// setTimeout(() => {
//     database.ref().off('value',onValueChange);
// },6000)

// setTimeout(() => {
//     database.ref('job/company').set('Google');
// }, 10000);
// database.ref().set({
//     name:'Jaideep Sangwan',
//     location:{
//         state: 'California',
//         city: 'Las Vegas'
//     },
//     age: 21,
//     isSingle: true,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     stressLevel: 6
// });

// database.ref("attributes").set({
//     'smart': false,
//     'tati': true
// }).then(() => {
//     console.log('ran successfully');
// }).catch((e) => {
//     console.log('the error is: ',e);
// });

// database.ref('age').set('null');
// database.ref('name').remove();

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'HackerEarth',
//     'location/city':'San Fransico'
// })