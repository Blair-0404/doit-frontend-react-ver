import React, {Component} from 'react';
import {Link} from "react-router-dom";
import api from "../../api"
import styles from './MainPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class MainPage extends Component {

  constructor(props) {
    super();
    console.log(props);

    // 아직 서버가 안열렸다.
    // this.state = {
    //   boardGroupList: []
    // };
    //
    // api.post("http://tutor.philgookang.com/group.php", {}).then(result => {
    //   let state = this.state;
    //   state.boardGroupList = result.data.lst;
    //   this.setState(state);
    // });

    let tmpResponseRet = {
      "myBoard": [
        {
          "teamName": "team A",
          "list": [
            {
              "boardId": 5,
              "title": "spring study",
              "description": "스프링스터디모임",
              "teamName": "team A"
            },
            {
              "boardId": 6,
              "title": "spring study",
              "description": "스프링스터디모임",
              "teamName": "team A"
            },
            {
              "boardId": 1,
              "title": "Mommy List",
              "description": "",
              "teamName": "team A"
            }
          ]
        },
        {
          "teamName": "teamB",
          "list": [
            {
              "boardId": 2,
              "title": "BoardC",
              "description": "this is board C",
              "teamName": "teamB"
            },
            {
              "boardId": 3,
              "title": "BoardD",
              "description": "this is board D",
              "teamName": "teamB"
            },
            {
              "boardId": 4,
              "title": "BoardE",
              "description": "this is board E",
              "teamName": "teamB"
            }
          ]
        }
      ]
    };

    this.state = { // 이 페이지에서 다뤄야 할 것들을 state에 담기
      "dataList": tmpResponseRet
    };
    console.log(this.state.dataList)
  }

  render() {
    return (
      <div className={cx("main-section")}>
        <div className={cx("main-wrapper")}>


          {this.state.dataList.myBoard.map((val) => {
            return (

              <div className={cx("board-group")}>

                <div className={cx("board-group-title")}>{val.teamName}</div>

                <div className={cx("board-item-wrapper")}>
                  {val.list.map((val) => {
                    return (

                      <div className={cx("board-item")}>
                        <div className={cx("title")}>{val.title}</div>
                        <div className={cx("contents")}>{val.description}</div>
                        <Link to={"/details/" + val.boardId}>
                          <div className={cx("more")}>more</div>
                        </Link>
                      </div>
                    );
                  })}
                  <div className={cx("board-item")}>
                    <Link to={"/newcontents"}>
                      <div className={cx("add-btn")}> +</div>
                    </Link>
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
