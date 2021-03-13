import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Import auht
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utilities';

// Components
import HomePage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shoppage.component';
import Header from './components/header/Header.component';
import Dummy from './pages/dummy/Dummy.comoponent';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up-page/Sign-in-and-sign-up-page.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() { 

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
      }
      else {
        this.setState({currentUser: userAuth}); // if I log out the userAuth = null !!! 
      }
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SingInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
