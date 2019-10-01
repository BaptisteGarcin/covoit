// Import FirebaseAuth and firebase.
import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


import DrivingHistory from "./DrivingHistory";
import Passengers from "./Passengers"
import './global.scss'
import DatePicker from "./DatePicker";
import FloatingButton from "./FloatingButton";
import PageNewCovoit from "./PageNewCovoit";
import PageHistory from "./PageHistory";


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
        isSignedIn: false,
        isNewCovoit: false,
        selectedPassengers: [],
        date: undefined
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
        //Send data to firebase
        db.collection("covoits")
            .add({
                passengers: this.state.selectedPassengers,
                date: this.state.date
            }).then(() => {
                this.setState({isNewCovoit: false})
            }).catch(err => {
                console.error('Error adding document', err);
            });
    }

    getAllCovoits() {
        const covoits = db.collection('covoits').get()
            .then(snapshot => {
                return snapshot.docs.map(doc => {
                    return doc.data();
                });
            }).catch(err => {
                console.error('Error getting documents', err);
            });

        return covoits
    }

    setPassengers(selectedPassengers){
        this.setState({selectedPassengers: [...selectedPassengers.keys()]})
    }

    setDate(date) {
        this.setState({date: date})
    }

    handleClick(){
        if(this.state.isNewCovoit){
            this.save()
        }
        else
            this.setState({isNewCovoit : true})
    }

    render() {
        return (
            <div style={{paddingTop: '10px'}}>
                <div style={{display: 'inline-block', width:'100%'}}>
                    <h1>Covoit App</h1>
                    {this.state.isNewCovoit &&
                    <button
                        style={{float: 'right'}}
                        onClick={() => firebase.auth().signOut()}
                    >
                        Sign-out
                    </button>}
                </div>
                <br/> <br/>
                {this.state.isSignedIn ? (
                    <div>
                        {this.state.isNewCovoit ?
                            <PageNewCovoit
                                setPassengers={(data) => this.setPassengers(data)}
                                setDate={(data) => this.setDate(data)}
                            />
                            :
                            <PageHistory covoits={this.getAllCovoits()}/>
                        }
                        <FloatingButton
                            text={`${this.state.isNewCovoit ? "Valider" : "+"} `}
                            onClick={(data) => {this.handleClick(data)}}
                        />
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
