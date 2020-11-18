import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" render={() => <Users greetingMessage="Hello" />} />
          <Route path="/" component={Home} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;