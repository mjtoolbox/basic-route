import React from 'react';
import { BrowserRouter, Link, Redirect, Switch, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent';

class LoginContainer extends React.Component {
  render() {
    return (
      <div className='container'>
        <Route exact path='/' render={() => <Redirect to='/login' />} />
        <Route exact path='/login' component={LoginComponent} />
      </div>
    );
  }
}

export default LoginContainer;
