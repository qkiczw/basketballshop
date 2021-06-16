import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// Import auht
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utilities';

// Redux
import { setCurrentUser } from './redux/user/user.actions';

// Selectors
import { createStructuredSelector} from 'reselect';
import { selectCurrentUSer } from './redux/user/user.selectors';

// Components
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shoppage.component';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import Dummy from './pages/dummy/Dummy.comoponent';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up-page/Sign-in-and-sign-up-page.component';
import CheckoutPage from './pages/checkout/Checkout.component';

class App extends React.Component {

  unsubscribeFromAuth = null;
  

  componentDidMount() { 
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()  
          })
        })
      }
      else {
        setCurrentUser( userAuth ); // if I log out the userAuth = null !!! 
      }
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' render={ () => this.props.currentUser ? (<Redirect to="/"/>) : (<SingInAndSignUpPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
        <Footer/>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUSer,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

