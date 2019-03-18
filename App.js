import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect, Provider } from 'react-redux';

import './App.css';
import 'antd/dist/antd.css';

import Header from './components/header';
import Footer from './components/footer';

import Master from './containers/master';
import Login from './containers/login/login';
import Users from './containers/users/';
import UserDetail from './containers/users/detail';

class App extends Component {

  render() {
    return (

      <Router>
        <Layout style={{ backgroundColor: 'transparent', height: '100%' }}>
          <Header />
          <Layout.Content style={{ marginTop: 55 }}>
          
            { this.props.isLogged  &&<Switch>
              <Route exact path="/" component={ Master } />
              <Route path="/users/edit/:userId" component={UserDetail} />
              <Route path="/users/:userId" component={UserDetail} />
              <Route path="/users" component={Users} />
            </Switch>}
            {
              !this.props.isLogged  &&<Switch>
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