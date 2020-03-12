import React, { Component } from 'react';
import style from '../SCSS/TodeListHeader.scss';

class TodoListHeader extends Component {
  render() {
    return (
      <div className="todo-list-header-section">
        <div className="title">Spring Project</div>
        <div className="button-wrapper">
          <button>초대하기</button>
          <button>초대하기</button>
          <button>초대하기</button>
        </div>
      </div>
    );
  }
}

export default TodoListHeader;