import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Import auht
import { auth } from '../src/firebase/firebase.utilities';

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

    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user})

    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
      <Header />
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
