import React, {Component} from 'react';
import Header from "./Components/Template/Header";
import styles from './Scss/App.scss';
import MainPage from "./Pages/MainPage"
import BoardPage from "./Pages/BoardPage";
import Footer from "./Components/Template/Footer";
import SignIn from "../src/Components/SignIn"



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<MainPage/>*/}
        {/*<BoardPage />*/}
        <SignIn />
      </div>
    );
  }
}

export default App;
