import React from 'react';
import firebase from 'firebase';

// To Configure react native app with cloud of Google Firebase database !
var config = {
    apiKey: "AIzaSyDD1G8ZCnY0kCYLB53HFahj_QmM54KEIsw",
    authDomain: "keep-it-safe-1559513495146.firebaseapp.com",
    databaseURL: "https://keep-it-safe-1559513495146.firebaseio.com",
    projectId: "keep-it-safe-1559513495146",
    storageBucket: "keep-it-safe-1559513495146.appspot.com",
    messagingSenderId: "117936487891",
    appId: "1:117936487891:web:063ae1e40f7fcb20"

}
firebase.initializeApp(config);

// To select data from firebase every time data has changed !
firebase.database().ref('Armarios').on('value', (data) => {
    console.log(data.toJSON());
})

// To Await 5 seconds to insert a new user
export function ADD() {

    setTimeout(() => {
        firebase.database().ref('Armarios/04').set(
            {
                name: 'Pheng Sengvuthy 004',
                age: 24
            }
        ).then(() => {
            console.log('INSERTED !');
        }).catch((error) => {
            console.log(error);
        });
    }, 5000
    )
    return 0;
}

  // To Update a user
  //firebase.database().ref('users/004').update({
  //    name: 'Pheng Sengvuthy'
  //});

  // To Remove a user
  //firebase.database().ref('users/004').remove();

