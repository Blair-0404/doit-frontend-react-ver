import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../../Pages/MainPage/MainPage"
import BoardPage from "../../Pages/BoradPage/BoardPage";
import SignInPage from "../../Pages/SignInPage/SignInPage"
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/details/:group_idx" component={BoardPage}/>
          <Route exact path="/signin" component={SignInPage}/>
          <Route exact path="/signup" component={SignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
