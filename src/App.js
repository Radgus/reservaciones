import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/register';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reservaciones" component={Home} />
        <Route exact path="/reservaciones/login" component={Login} />
        <Route exact path="/reservaciones/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
