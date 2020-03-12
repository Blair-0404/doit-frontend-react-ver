import React, { Component } from 'react';
import style from '../SCSS/TodeListHeader.scss';

class Todogroup extends Component {
  render() {
    return (
      <div className="">
        <div className="">개인보드</div>
        <div className="items-wrapper">
          <button>할일</button>
          <button>할일</button>
          <button>+</button>
        </div>
        </div>

    );
  }
}

export default Todogroup;