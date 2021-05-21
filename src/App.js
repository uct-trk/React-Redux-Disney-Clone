import React from 'react'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Detail from './componets/Detail/Detail'

function App() {
  return (
    <>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detail" component={Detail}/>
      </Switch>
      </Router>
      <GlobalStyles/>
    </>
  );
}

export default App;
