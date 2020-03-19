import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styles from './SearchId.scss';
import classNames from 'classnames/bind';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import api from "../../api"


const cx = classNames.bind(styles);


class SearchId extends Component {

  constructor(props) {
    super();

    console.log(props);

    let data = {
      "email" : "mock@email.com",
      "username" : "mockMember"
    }

    this.state = {
      boardGroupIdx: props.boardGroupIdx // prop["group_id"] 공백이 있을경우 활
    };

    // api.get("http://localhost:8080/api/member/3", params).then(result => {
    // });

  }

  render() {
    return (
      <div className={cx("search-id-section")}>
        <div className={cx("search-id-wrapper")}>
          <div className={cx("title")}>Search username & email</div>
          <div className={cx("info-wrapper")}>
            <div>
              <FontAwesomeIcon className={cx("icon")} icon={faUser} size="1x"/>
              <div className={cx("username")}>username : </div>
            </div>
            <div>
              <FontAwesomeIcon className={cx("icon")} icon={faEnvelope} size="1x"/>
              <div className={cx("email")}>email : </div>
            </div>
          </div>
          <div className={cx("button-wrapper")}>
            <div className={cx("close")}>CLOSE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchId;

