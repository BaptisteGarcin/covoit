const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.newCovoit = functions.region('europe-west2').https.onCall((data, context) => {
    //Send data to firebase
    return db.collection("covoits")
            .add({
              driver: data.driver,
              passengers: data.passengers,
              date: data.date
            }).catch(err => {
                console.error('Error adding document', err);
            });
});

exports.getAllCovoits = functions.region('europe-west2').https.onCall((data, context) => {
  //Send data to firebase
    const covoits = db.collection('covoits').orderBy('date', 'desc')
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                return doc.data();
            });
        }).catch(err => {
            console.error('Error getting documents', err);
        });
    return covoits;
});
