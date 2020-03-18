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
      "list": [
        {
          "name": "개인보드",
          "lst": [
            {
              "boardId": 1,
              "title": "Important List",
              "description": ""
            },
            {
              "boardId": 2,
              "title": "Wish List",
              "description": ""
            },
            {
              "boardId": 3,
              "title": "Mommy List",
              "description": ""
            }
          ]
        },
        {
          "name": "미니 프로젝트 보드",
          "list": [
            {
              "boardId": 1,
              "title": "Important List",
              "description": ""
            },
            {
              "boardId": 2,
              "title": "Wish List",
              "description": ""
            },
            {
              "boardId": 3,
              "title": "Mommy List",
              "description": ""
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


          {this.state.dataList.list.map((val) => {
            return (

              <div className={cx("board-group")}>

                <div className={cx("board-group-title")}>{val.name}</div>

                <div className={cx("board-item-wrapper")}>
                  {val.lst.map((val) => {
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

  // render() {
  //   return (
  //     <div className={cx("main-section")}>
  //       <div className={cx("main-wrapper")}>
  //
  //
  //         {this.state.boardGroupList.map((val) => {
  //           return (
  //
  //             <div className={cx("board-group")}>
  //
  //               <div className={cx("board-group-title")}>{val.name}</div>
  //
  //               <div className={cx("board-item-wrapper")}>
  //                 {val.lst.map((val) => {
  //                   return (
  //
  //                     <div className={cx("board-item")}>
  //                       <div className={cx("title")}>{val.name}</div>
  //                       <div className={cx("contents")}>Search for the keywords to learn more about each warning.
  //                         s
  //                       </div>
  //                       <Link to={"/details/" + val.idx}>
  //                         <div className={cx("more")}>more</div>
  //                       </Link>
  //                     </div>
  //                   );
  //                 })}
  //                 <div className={cx("board-item")}>
  //                   <Link to={"/newcontents"}>
  //                     <div className={cx("add-btn")}> +</div>
  //                   </Link>
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }
}

export default MainPage;
