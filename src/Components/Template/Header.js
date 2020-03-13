import React, {Component} from 'react';
import styles from '../../Scss/Header.scss';
import classNames from 'classnames/bind';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
const response = () => {
  alert("클릭됬습니다.")
};

class Header extends Component {
  render() {
    return (
      <div className={cx("header-section")}>
        <div className={cx("header-left-section")}>
          <div onClick={response} className={cx('menu')}><FontAwesomeIcon icon={faBars} size="2x"/></div>
        </div>
        <div className={cx("header-center-section")}>
          <div onClick={response} className={cx('title')}>DoItlo</div>
          <div onClick={response} className={cx('home-logo')}><FontAwesomeIcon icon={faHome} size="2x"/></div>
        </div>
        <div className={cx("header-right-section")}>
          <div onClick={response} className={cx('sign-in')}>sign in</div>
          <div onClick={response} className={cx('sign-up')}>sign up</div>
        </div>
      </div>
    );
  }
}

export default Header;

