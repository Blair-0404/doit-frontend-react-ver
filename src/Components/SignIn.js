import React, {Component} from 'react';
import styles from '../Scss/SignIn.scss';
import classNames from 'classnames/bind';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);


class SignIn extends Component {
  render() {
    return (
      <div className={cx("sign-in-section")}>
      <div className={cx("sign-in-wrapper")}>
        <div className={cx("title")}>Login from</div>
        <div className={cx("input-wrapper")}>
          <label>
            <FontAwesomeIcon icon={faUser} size="1x"/>
            <input type="text" name="name" placeholder={"   Please input your ID"} />
          </label>
          <label>
            <FontAwesomeIcon icon={faKey} size="1x"/>
            <input type="password" name="name" placeholder={"   Please input your PW"}/>
          </label>
        </div>
        <div className={cx("button-wrapper")}>
          <div className={cx("login-button")}>LOGIN</div>
          <div className={cx("sign-up-button")}>SIGN UP</div>
        </div>
        </div>
      </div>
    );
  }
}

export default SignIn;

