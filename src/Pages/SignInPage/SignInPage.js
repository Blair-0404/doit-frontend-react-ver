import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styles from './SignIn.scss';
import classNames from 'classnames/bind';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);


class SignInPage extends Component {
  render() {
    return (
      <div className={cx("sign-in-section")}>
      <div className={cx("sign-in-wrapper")}>
        <div className={cx("title")}>Login from</div>
        <div className={cx("input-wrapper")}>
          <label>
            <FontAwesomeIcon icon={faUser} size="1x"/>
            <input type="text" name="name" placeholder={"   ID"} />
          </label>
          <label>
            <FontAwesomeIcon icon={faKey} size="1x"/>
            <input type="password" name="name" placeholder={"   Password"}/>
          </label>
        </div>
        <div className={cx("button-wrapper")}>
          <div className={cx("login-button")}>LOGIN</div>
          <div className={cx("sign-up-button")}><Link to={"/signup"}>SIGN UP</Link></div>
        </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;

