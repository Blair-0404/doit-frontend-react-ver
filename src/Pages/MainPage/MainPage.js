import React, {Component} from 'react';
import {Link} from "react-router-dom";
import api from "../../api"
import styles from './MainPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class MainPage extends Component {

  constructor() {
    super();

    this.state = {
      dataList: []
    };

    api.post("http://tutor.philgookang.com/group.php", {}).then(result => {
      let state = this.state;
      state.dataList = result.data.lst;
      this.setState(state);
    });

    // axios.get("http://tutor.philgookang.com/").then(function (response) {
    //   console.log(response);
    // });

    // const headers = {
    //   "Authorization": "232342345dfg"
    // };
    //
    // const params = {
    //   "name" : "john",
    //   "age" : 43
    // };
    //
    // axios.post("http://tutor.philgookang.com/", params, {"headers":headers}).then(function (response) {
    //   console.log(response);
    // });


  }

  render() {
    return (
      <div className={cx("main-section")}>
        <div className={cx("main-wrapper")}>


        {this.state.dataList.map((val) => {
          return (

            <div className={cx("board-group")}>

              <div className={cx("board-group-title")}>{val.name}</div>

              <div className={cx("board-item-wrapper")}>
                {val.lst.map((val) => {
                  return (

                    <div className={cx("board-item")}>
                      <div className={cx("title")}>{val.name}</div>
                      <div className={cx("contents")}>Search for the keywords to learn more about each warning.
                      s</div>
                      <Link to={"/details/" + val.idx}><div className={cx("more")}>more</div></Link>
                    </div>
                  );
                })}
                <div className={cx("board-item")}>
                  <div className={cx("add-btn")}> +</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}

export default MainPage;
