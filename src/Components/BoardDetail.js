import React, {Component} from 'react';
import styles from '../Scss/BoardDetail.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const response = () => {
  alert("클릭됬습니다.")
};

class BoardDetail extends Component {

  constructor(prop) {
    super();

    console.log(prop.todoname);

    this.state = {
      tode : props.todo;
    }
  }

  render() {
    return (
      <div className={cx("board-detail-section")}>
        <div className={cx("board-list-wrapper")}>

          <div className={cx("list")}>
            <div className={cx("title")}>ToDoList</div>
            <div className={cx("cards")}>
              <div onClick={response} className={cx("card")}>카드1</div>
              <div onClick={response} className={cx("card")}>카드2</div>
              <div onClick={response} className={cx("card")}>카드3</div>
              <div onClick={response} className={cx("card")}>카드4</div>
              <div onClick={response} className={cx("card")}>카드4</div>
              <div onClick={response} className={cx("card")}>카드4</div>
              <div onClick={response} className={cx("card")}>카드4</div>

            </div>
            <div onClick={response} className={cx("add-card")}> + 새 카드 추가하기</div>
          </div>

          <div className={cx("list")}>
            <div className={cx("title")}>InProgress 1</div>
            <div className={cx("cards")}>
              <div onClick={response} className={cx("card")}>Rachel 1</div>
              <div onClick={response} className={cx("card")}>Rachel 2</div>
              <div onClick={response} className={cx("card")}>Rachel 3</div>
              <div onClick={response} className={cx("card")}>Rachel 4</div>
            </div>
            <div onClick={response} className={cx("add-card")}> + 새 카드 추가하기</div>
          </div>

          <div className={cx("list")}>
            <div className={cx("title")}>ToDoList 2</div>
            <div className={cx("cards")}>
              <div onClick={response} className={cx("card")}>카드1</div>
              <div onClick={response} className={cx("card")}>카드2</div>
              <div onClick={response} className={cx("card")}>카드3</div>
              <div onClick={response} className={cx("card")}>카드4</div>
            </div>
            <div onClick={response} className={cx("add-card")}> + 새 카드 추가하기</div>
          </div>

          <div className={cx("list")}>
            <div className={cx("title")}>ToDoList 3</div>
            <div className={cx("cards")}>
              <div onClick={response} className={cx("card")}>카드1</div>
              <div onClick={response} className={cx("card")}>카드2</div>
              <div onClick={response} className={cx("card")}>카드3</div>
              <div onClick={response} className={cx("card")}>카드4</div>
            </div>
            <div onClick={response} className={cx("add-card")}> + 새 카드 추가하기</div>
          </div>

          <div className={cx("list")}>
            <div className={cx("title")}>ToDoList 4</div>
            <div className={cx("cards")}>
              <div onClick={response} className={cx("card")}>카드1</div>
              <div onClick={response} className={cx("card")}>카드2</div>
              <div onClick={response} className={cx("card")}>카드3</div>
              <div onClick={response} className={cx("card")}>카드4</div>
            </div>
            <div onClick={response} className={cx("add-card")}> + 새 카드 추가하기</div>
          </div>

        </div>
      </div>
    );
  }
}

export default BoardDetail;
