import React, {Component} from 'react';
import TodoList from "../Component/TodoList";
import TodoListHeader from "../Component/TodoListHeader";
import Header from "../Component/template/Header";
import Footer from "../Component/template/Footer"




class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TodoListHeader/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <Footer/>

      </div>
    );
  }
}

export default App;
