import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from './Navigation';
import AuthService from './service/AuthService';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
  }

  componentDidMount() {
    // this.Auth.getRoles();
  }

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <h2>Welcome Home page. </h2>
      </div>
    );
  }
}

export default Home;
