import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../pages/noMatch';

import Header from './components/header';
import Sidebar from './components/sidebar';
// import Footer from './components/footer';

import Dashboard from '../pages/dashboard';
import Generator from '../pages/generator';
import Character from '../pages/character';
import List from '../pages/list';
import Wiki from '../pages/wiki';

export default class App extends Component {
  state = {
    mobile: false
  }

  componentDidMount() {
    this.setState({ mobile: window.innerWidth <= 700 });
    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    this.setState({ mobile: window.innerWidth <= 700 });
  }

  render(){
    return (
      <div>
        <Header mobile={ this.state.mobile } />

        <Sidebar mobile={ this.state.mobile } />

        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/generator" component={Generator}/>
          <Route exact path="/character" component={Character}/>
          <Route exact path="/list" component={List}/>
          <Route exact path="/wiki" component={Wiki}/>
          <Route component={NoMatch}/>
        </Switch>

        {/* <Footer /> */}
      </div>
    )
  }
}
