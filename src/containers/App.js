// Import FirebaseAuth and firebase.
import React from "react";
import firebase from 'firebase/app'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import '../global.scss'

import FloatingButton from "../components/FloatingButton";
import PageNewCovoit from "./PageNewCovoit";
import PageHistory from "./PageHistory";

import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for cloud firestore
import 'firebase/functions';
import PageNextDriver from "./PageNextDriver";

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

const newCovoit = firebase.app().functions('europe-west2').httpsCallable('newCovoit');
const getAllCovoits = firebase.app().functions('europe-west2').httpsCallable('getAllCovoits');

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
        },
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
};

class App extends React.Component {
    state = {
        isSignedIn: false,
        isNewCovoit: false,
        selectedPassengers: [],
        date: undefined,
        covoits: [],
        isFindDriver: false
    };

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({isSignedIn: true});
                this.getAllCovoits()
            } else {
                this.setState({isSignedIn: false});
            }
        });
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    save(){
        const covoit = {
            driver: firebase.auth().currentUser.displayName,
            passengers: this.state.selectedPassengers,
            date: this.state.date
        };

        newCovoit(covoit).then(() => {
                this.setState({isNewCovoit: false, covoits: [covoit, ...this.state.covoits]})
            }).catch(err => {
                console.error('Error adding document', err);
            });
    }

    getAllCovoits() {
        getAllCovoits()
            .then(res => {
                console.log(res.data)
                this.setState({covoits : res.data})
            });
    }

    setPassengers(selectedPassengers){
        this.setState({selectedPassengers: [...selectedPassengers.keys()]})
    }

    setDate(date) {
        this.setState({date: date})
    }

    handleNewCovoit(){
        if(this.state.isNewCovoit){
            this.save()
        }
        else
            this.setState({isNewCovoit : true})
    }

    spin(){
        console.log("spin")
        //this.state.selectedPassengers +

    }

    handleNextDriver() {
        if (this.state.isFindDriver) {
            this.spin()
        } else
            this.setState({isFindDriver: true})
    }

    renderMain() {
        if (this.state.isNewCovoit && !this.state.isFindDriver)
                return <PageNewCovoit
                    setPassengers={(data) => this.setPassengers(data)}
                    setDate={(data) => this.setDate(data)}
                />;
        else if (!this.state.isNewCovoit && this.state.isFindDriver)
            return <PageNextDriver setPassengers={(data) => this.setPassengers(data)}/>;
        else
            return <PageHistory covoits={this.state.covoits}/>
    }

    render() {
        return (<div className="grid">
            <div id="header">
                <h1>Covoit App</h1>
            </div>
            <div id="headerRight">
                {this.state.isNewCovoit &&
                            <button
                                onClick={() => firebase.auth().signOut()}
                            >
                                Sign-out
                            </button>
                }
            </div>
            <div id="mainArticle">
                {this.state.isSignedIn ?
                    this.renderMain()
                 :
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                }
            </div>
            <div id="mainNav"></div>
            <div id="siteAds"></div>
            <footer id="pageFooter">
                {this.state.isSignedIn &&
                    <div className="flexRow">
                        {!this.state.isFindDriver &&
                            <FloatingButton
                            color='#0C9'
                            text={`${this.state.isNewCovoit ? "Valider" : "+"} `}
                                    onClick={(data) => {this.handleNewCovoit(data)}}
                            />
                        }
                        {!this.state.isNewCovoit &&
                            <FloatingButton
                                color='#314acc'
                                text={`${this.state.isFindDriver ? "Spin" : "Driver?"} `}
                                onClick={(data) => {this.handleNextDriver()}}
                            />
                        }
                    </div>
                }
            </footer>
      </div>
        );
    }
}

export default App;
