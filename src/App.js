import React, {Component} from 'react';
import Header from "./Components/Template/Header";
import MainPage from "./Pages/MainPage"
import BoardPage from "./Pages/BoardPage";
import Footer from "./Components/Template/Footer";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage/>
        <BoardPage />
        <Footer />
      </div>
    );
  }
}

export default App;
