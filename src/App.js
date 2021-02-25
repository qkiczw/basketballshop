import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import HomePage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shoppage.component';
import Header from './components/header/Header.component';
import Dummy from './pages/dummy/Dummy.comoponent';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
