import React, {Component} from 'react';
import styles from '../Scss/BoardHeader.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const response = () => {
  alert("클릭됬습니다.")
};


class BoardHeader extends Component {
  render() {
    return (
      <div className={cx("board-header-section")}>
        <div className={cx("board-header-wrapper")}>
        <div className={cx("board-title")}>DoIt Project</div>
        <div className={cx("board-button-wrapper")}>
          <div onClick={response} className={cx("setting")}>설정</div>
          <div onClick={response} className={cx("invite")}>초대하기</div>
          <div onClick={response} className={cx("add-list")}> + 새 리스트 추가하기</div>
        </div>
        </div>
      </div>
    );
  }
}

export default BoardHeader;