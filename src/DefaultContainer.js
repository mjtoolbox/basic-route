import React from 'react';
import { BrowserRouter, Link, Redirect, Switch, Route } from 'react-router-dom';
import { Alert, Navbar } from 'react-bootstrap';
import Home from './Home';
import News from './News';
import StudentList from './StudentList';

class DefaultContainer extends React.Component {
  render() {
    return (
      <div>
        
          <Navbar />
          <Route path='/home' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/students' component={StudentList} />
          {/* <Route path='/hw-setting' component={Setting} />
        <Route path='/hw-detail/:id' component={HwDetail} />
        <Route path='/gas-detail/:id' component={GasDetail} /> */}
          {/* {this.state.isAlertOpen ? <Alert /> : null} */}
        </div>
    );
  }
}

export default DefaultContainer;
