import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import NoMatch from '../components/NoMatch'

export default class App extends Component {
  render(){
    return (
      <div>
        <h1>Server Side Rendering with Create React App v2.1</h1>
        <p>This code is on github: <a href='https://github.com/ayroblu/ssr-cra-v2.1'>https://github.com/ayroblu/ssr-cra-v2.1</a></p>
        <p>Medium article: <a href='https://medium.com/@benlu/ssr-with-create-react-app-v2-1-ee83fb767327'>https://medium.com/@benlu/ssr-with-create-react-app-v2-1-ee83fb767327</a></p>
        <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route path="/second" component={SecondPage}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
