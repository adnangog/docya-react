import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import decode from 'jwt-decode';

import './App.css';
import 'antd/dist/antd.css';

import Header from './components/header';
import Footer from './components/footer';

import Master from './containers/master';
import Login from './containers/login/login';
import Users from './containers/users/';
import UserDetail from './containers/users/detail';

const checkAuth = () => {

  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  try {
    const decoded = decode(token);
debugger;
    if (decoded.exp < new Date().getTime() / 1000) {
      return false;
    }

  } catch (e) {
    return false;
  }


  return true;
}

class App extends Component {

  render() {
    return (

      <Router>
        <Layout style={{ backgroundColor: 'transparent', height: '100%' }}>
          <Header />
          <Layout.Content style={{ marginTop: 55 }}>
          
            { checkAuth  &&<Switch>
              <Route exact path="/" component={ Master } />
              <Route path="/users/add" component={UserDetail} />
              <Route path="/users/edit/:userId" component={UserDetail} />
              <Route path="/users/:userId" component={UserDetail} />
              <Route path="/users" component={Users} />
            </Switch>}
            {
              !checkAuth  &&<Switch>
              <Route component={Login} />
            </Switch>}
            }
          </Layout.Content>
          <Footer />
        </Layout>
      </Router>

    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.login.accessToken,
  isLogged: state.login.isLogged
});

export default connect(mapStateToProps)(App);