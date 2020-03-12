import React, {Component} from 'react';
import Header from "../Component/template/Header";
import Footer from "../Component/template/Footer"
import Todogroup from "../Component/Todogroup";




class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Todogroup/>
        <Footer/>
      </div>
    );
  }
}

export default App;
