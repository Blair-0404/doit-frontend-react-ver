import React, {Component} from 'react';
import Header from "./Components/Template/Header";
import styles from './Scss/App.scss';
import MainPage from "./Pages/MainPage"
import BoardPage from "./Pages/BoardPage";
import Footer from "./Components/Template/Footer";
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage";
import NewContentsPage from "./Pages/NewContentsPage";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<MainPage/>*/}
        <BoardPage />
        <NewContentsPage />
        {/*<SignUpPage />*/}
      </div>
    );
  }
}

export default App;
