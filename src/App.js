// Import FirebaseAuth and firebase.
import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


import DrivingHistory from "./DrivingHistory";
import Passengers from "./Passengers"
import './global.scss'
import DatePicker from "./DatePicker";


// Configure Firebase.
const config = {
    apiKey: "AIzaSyBjsGZ5tLUZN9xlMVRoRsxLc0CjvOaL8oI",
    authDomain: "covoit-84ccd.firebaseapp.com",
    databaseURL: "https://covoit-84ccd.firebaseio.com",
    projectId: "covoit-84ccd",
    storageBucket: "",
    messagingSenderId: "913586747610",
    appId: "1:913586747610:web:0c6a504f06e498b42f4de3",
    measurementId: "G-589J4F6WQJ",
    clientId:
        "424398156280-ia1vh1s44b7qqvm5kk61a5gako72kvb9.apps.googleusercontent.com",
    scopes: [
        "email",
        "profile",
        "openid"
    ]
};


firebase.initializeApp(config);
const db = firebase.firestore();

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    //signInSuccessUrl: "/signedIn",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            scopes: config.scopes
        }
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
};


function guidGenerator() {
    /**
     * @return {string}
     */
    let S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function addMockDataToFirebase(nbMocks, subs) {
    while (nbMocks > 0) {
        db.collection("users")
            .doc(guidGenerator())
            .set({
                //Add sex ?
                subscriptions: subs.slice(Math.floor(Math.random() * subs.length), Math.floor(Math.random() * subs.length))
            });
        nbMocks--;
    }
}

class App extends React.Component {
    state = {
        isSignedIn: false
    };

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({isSignedIn: true});
            } else {
                this.setState({isSignedIn: false});
            }
        });
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    save(){
        console.log("is saving...");
        //Send data to firebase
        db.collection("covoits")
            .add({
                passengers: ["Lucille", "Fedy"],
                date: "23/09/2018"
            })
    }

    render() {
        return (
            <div style={{overflow: 'auto'}}>
                <h1>Covoit App</h1>
                {this.state.isSignedIn ? (
                    <div>
                        You are signed In!
                        <Passengers name={"test"}/>
                        <DatePicker />
                        <button onClick={() => this.save()}>Valider</button>
                        <br/><br/>
                        <DrivingHistory />
                        <br/><br/><button onClick={() => firebase.auth().signOut()}>Sign-out</button>
                    </div>
                ) : (
                    <div>
                        <StyledFirebaseAuth
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
