import React, { Component } from 'react';
import style from '../SCSS/Board.scss';


class Board extends Component {
  render() {
    return (
      <div className="todo-list-section">
        <div className="title">TodoList</div>
        <div className="list-wrapper">
          <div className="item">schedule 1</div>
          <div className="item">schedule 2</div>
          <div className="item">schedule 3</div>
        </div>
        <div className="add-item">+ 새 카드 추가하기</div>
      </div>
    );
  }
}

export default Board;
