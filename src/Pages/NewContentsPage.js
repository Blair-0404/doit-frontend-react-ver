import React, {Component} from 'react';
import styles from '../Scss/NewContentsPage.scss';
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