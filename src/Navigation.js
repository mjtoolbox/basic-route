import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to={'/home'} className='navbar-brand'>
            HOME
          </Link>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/news' className='nav-link'>
                  News
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/students' className='nav-link'>
                  StudentList
                </Link>
              </li>
            </ul>
          </div>
        </nav>{' '}
      </div>
    );
  }
}

export default Navigation;
