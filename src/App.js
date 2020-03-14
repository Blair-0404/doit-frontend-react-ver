import React, {Component} from 'react';
import Header from "./Components/Template/Header";
import styles from './Scss/App.scss';
import MainPage from "./Pages/MainPage"
import BoardPage from "./Pages/BoardPage";
import Footer from "./Components/Template/Footer";
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<MainPage/>*/}
        <BoardPage />
        {/*<SignUpPage />*/}
      </div>
    );
  }
}

export default App;
