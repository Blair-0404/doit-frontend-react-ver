// main에서 추가할시 보드내용추가
// Board에가서 추가할시 새 카드추가
// 그런데 이부분은 여기에 따로 만드는게아니라 보드쪽이나 메인쪽에..

import React, {Component} from 'react';
import styles from './addBoardPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const response = () => {
  alert("클릭됬습니다.")
};


class AddBoardPage extends Component {

  constructor(props) {
    super();
    console.log(props);

    this.state = {
      "name": "",
      "description": "",
      "parent": props.parent
    }

  }

  closeBoard = () => {
    let state = this.state.parent.state;
    state.showBoard = 0;
    this.state.parent.setState(state);
  }

  changeName = (e) => {
    let state = this.state;
    state.name = e.target.value;
    this.setState(state);
    console.log(e.target.value);
  }

  changeDescription = (e) => {
    let state = this.state;
    state.description = e.target.value;
    this.setState(state);
    console.log(e.target.value);
  }

  saveContents = (e) => {
    if(this.state.name.length <= 1) {
      alert("앙대");
      return
    }

    let state = this.state.parent.state;
    state.dataList.myBoard[state.boardGroup].list.push({
      "boardId": 9,
      "title": this.state.name,
      "description": this.state.description,
      "teamName": "teamB"
    });
    // this.closeBoard();
    state.showBoard = 0;
    this.state.parent.setState(state);
  }

  render() {
    return (
      <div className={cx("new-contents-section")}>
        <div className={cx("new-contents-wrapper")}>
          <div className={cx("board-title")}>새로운 보드 추가</div>
          <div className={cx("input-wrapper")}>
            <input type="text" name="name" placeholder={"   Card Name"} onChange={this.changeName}
                   value={this.state.name}/>
            <textarea className={cx("Description")} placeholder={"   Description"} value={this.state.description}
                      onChange={this.changeDescription}/>
          </div>
          <div className={cx("button-wrapper")}>
            <div onClick={this.closeBoard} className={cx("close")}>CLOSE</div>
            <div onClick={this.saveContents} className={cx("save")}> SAVE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBoardPage;