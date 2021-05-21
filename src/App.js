import React from 'react'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Detail from './componets/Detail/Detail'
import Login from './componets/Login/Login';

function App() {
  return (
    <>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/login" component={Login}/>
      </Switch>
      </Router>
      <GlobalStyles/>
    </>
  );
}

export default App;
