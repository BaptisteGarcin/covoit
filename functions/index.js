const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.region('europe-west2').https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.newCovoit = functions.region('europe-west2').https.onCall((data, context) => {
    //Send data to firebase
    return db.collection("covoits")
        .add({
          driver: admin.auth().currentUser.displayName,
          passengers: data.selectedPassengers,
          date: data.date
        })
});

exports.getAllCovoits = functions.region('europe-west2').https.onCall((data, context) => {
  //Send data to firebase
  return db.collection('covoits').get()
});
