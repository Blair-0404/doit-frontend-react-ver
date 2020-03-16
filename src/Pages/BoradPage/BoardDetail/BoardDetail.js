import React, {Component} from 'react';
import styles from './BoardDetail.scss';
import classNames from "classnames/bind";
import api from "../../../api";

const cx = classNames.bind(styles);

const response = () => {
  alert("클릭됬습니다.")
};

class BoardDetail extends Component {

  constructor(prop) {
    super();

    console.log(prop); // prop = save_group_id={this.state.group_idxx}

    // this.state = {
    //   tmp_group_id: prop.save_group_id // prop["group_id"] 공백이 있을경우 활
    // };

    //
    //   let params = {
    //     "boardId": this.state.tmp_group_id
    // };

    // api.get("http://localhost:8080/api/board/", params).then(result => {

      // // 둘중 어떤식으로 전송하면 되는지?
      // /api/board/1    -> 이 방식이면 파람스가 필요없다..
      // /api/board/?board=1
    // });

    // let params = {
    //   "boardId" : "",
    //   "name" : "",
    //   "position" : ""
    // };

    let tmpResult = {

      "cardLists": [{
        "id": 1,
        "name": "testCardList",
        "position": 0,
        "cards": [{
          "id": 1,
          "title": "testCardA",
          "description": "test card A",
          "position": 0
        }, {
          "id": 2,
          "title": "testCardB",
          "description": "test card B",
          "position": 1
        }]
      },
        {
          "id": 2,
          "name": "testCardList2",
          "position": 0,
          "cards": [{
            "id": 1,
            "title": "testCardA",
            "description": "test card A",
            "position": 0
          }, {
            "id": 2,
            "title": "testCardB",
            "description": "test card B",
            "position": 1
          }]
        }],
      "members": [{
        "memberId": 1,
        "username": "member1"
      }, {
        "memberId": 2,
        "username": "member"
      }, {
        "memberId": 3,
        "username": "invite"
      }],
      "team": {
        "name": "teamA"
      },
      "board": {
        "description": "this is board A",
        "id": 1,
        "title": "BoardA"
      }
    };

    // 연습용 서버 tmpResult를 사용하기위해서 잠시 state를 아래로 옮겼다.
    this.state = {
      "dataList": tmpResult,
      "tmp_group_id": prop.save_group_id // prop["group_id"] 공백이 있을경우 활
    };
    console.log(this.state.dataList)
  }

  render() {
    return (
      <div className={cx("board-detail-section")}>
        <div className={cx("board-list-wrapper")}>
          {this.state.dataList.cardLists.map(item => {
            return (
              <div className={cx("list")}>
                <div className={cx("title")}>{item.name}</div>
                <div className={cx("cards")}>
                  {item.cards.map(item2 => {
                    return (
                      <div onClick={response} className={cx("card")}>{item2.title}</div>
                    );
                  })}
                </div>
                <div onClick={response} className={cx("add-card")}> + 새 카드 추가하기</div>
              </div>
            );
          })}


        </div>
      </div>
    );
  }
}

export default BoardDetail;
