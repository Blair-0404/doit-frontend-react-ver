import React, {Component} from 'react';
import styles from './SignUp.scss';
import classNames from 'classnames/bind';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faKey} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);


class SignUpPage extends Component {
  render() {
    return (
      <div className={cx("sign-up-section")}>
        <div className={cx("sign-up-wrapper")}>
          <div className={cx("title")}>Sign Up</div>
          <div className={cx("input-wrapper")}>
            <label>
              <FontAwesomeIcon icon={faEnvelope} size="1x"/>
              <input type="email" name="name" placeholder={"   Email"} />
            </label>
            <label>
              <FontAwesomeIcon icon={faKey} size="1x"/>
              <input type="password" name="name" placeholder={"   Password"}/>
            </label>
            <label>
              <FontAwesomeIcon icon={faKey} size="1x"/>
              <input type="password" name="name" placeholder={"   Password Confirm"} />
            </label>
            <label>
              <FontAwesomeIcon icon={faUser} size="1x"/>
              <input type="text" name="name" placeholder={"   Username"}/>
            </label>
          </div>
          <div className={cx("button-wrapper")}>
            <div className={cx("sign-up-button")}>SIGN UP</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;

