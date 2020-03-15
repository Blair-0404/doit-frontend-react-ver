// main에서 추가할시 보드내용추가
// Board에가서 추가할시 새 카드추가
// 그런데 이부분은 여기에 따로 만드는게아니라 보드쪽이나 메인쪽에..

import React, {Component} from 'react';
import styles from './NewContentsPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const response = () => {
  alert("클릭됬습니다.")
};


class NewContentsPage extends Component {
  render() {
    return (
      <div className={cx("new-contents-section")}>
        <div className={cx("new-contents-wrapper")}>
          <div className={cx("board-title")}>새로운 카드 추가</div>
          <input type="text" name="name" placeholder={"   Card Name"} />
          <input type="textarea" name="name" placeholder={"   Description"} />
            <div onClick={response} className={cx("close")}>CLOSE</div>
            <div onClick={response} className={cx("save")}> SAVE</div>
          </div>
        </div>
    );
  }
}

export default NewContentsPage;