import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Axios from "../Library/AxiosApi"
import Main from "../Components/Main";


class MainPage extends Component {

  constructor() {
    super();

    this.state = {
      dataList: []
    };

    Axios.post("http://tutor.philgookang.com/group.php", {}).then(result => {
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
      <div className="container">
        {this.state.dataList.map((item, i) => {
          return (
            <div className="todo-group">
              <div className="todo-group-head">
                <h1>{item.name}</h1>
              </div>
              <div className="todo-group-body">
                {item.lst.map((gg, i) => {
                  return (
                    <Link to={"/details/" + gg.idx}>
                      <div className="todo-group-item">
                        {gg.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MainPage;
