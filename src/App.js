import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Redirect, Switch, Route } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import DefaultContainer from './DefaultContainer';
import LoginComponent from './LoginComponent';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('userInfo') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className='App'>
            <Route exact path='/' component={LoginComponent} />
            <Route component={DefaultContainer} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
