import React, { Component } from 'react';
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';

firebase.initializeApp({
  projectId: 'hyf-class5-template',
  appId: '1:581022878605:web:1c8daed018319fc6ba0bc4',
  databaseURL: 'https://hyf-class5-template.firebaseio.com',
  storageBucket: 'hyf-class5-template.appspot.com',
  apiKey: 'AIzaSyB4JG2WBLLjmesQpQGAxHHmqwTl9GRM5_g',
  authDomain: 'hyf-class5-template.firebaseapp.com',
  messagingSenderId: '581022878605',
});

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      showLoginForm: false,
    };

    this.firebaseConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false,
      },
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: Boolean(user) });
    });
  }

  render() {
    const { loggedIn, showLoginForm } = this.state;

    const content = loggedIn ? 'Welcome!' : (
      <button onClick={() => this.setState({ showLoginForm: true })} type="button">
        Login with firebase
      </button>
    );

    const loginForm = !showLoginForm ? null : (
      <form className="login-form" method="POST">
        <StyledFirebaseAuth uiConfig={this.firebaseConfig} firebaseAuth={firebase.auth()} />
      </form>
    );

    return (
      <>{content} {loginForm}</>
    );
  }
}
