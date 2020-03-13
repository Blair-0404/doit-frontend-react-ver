import React, {Component} from 'react';
import Header from "./Components/Template/Header";
import styles from './Scss/App.scss';
import MainPage from "./Pages/MainPage"
import BoardPage from "./Pages/BoardPage";
import Footer from "./Components/Template/Footer";
import SignIn from "../src/Components/SignIn"
import SignUp from "./Components/SignUp";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<MainPage/>*/}
        {/*<BoardPage />*/}
        <SignUp />
      </div>
    );
  }
}

export default App;
