import React, { Component } from 'react';
import style from './App.css';


class App extends Component {
  render() {
    return (
      <div id="todo-list-section">
        <div id="title">TodoList</div>
        <div id="list-wrapper">
            <div class="item">schedule 1</div>
            <div class="item">schedule 2</div>
            <div class="item">schedule 3</div>
          </div>
        <div id="add-item">+ 새 카드 추가하기</div>
      </div>
    );
  }
}

export default App;
