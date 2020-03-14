import React, {Component} from 'react';
import BoardDetail from "../Components/BoardDetail";
import BoardHeader from "../Components/BoardHeader";
import api from "../Library/api"





class BoardPage extends Component {
  //
  // constructor(prop) {
  //   super();
  //   console.log(prop);
  //
  //   this.state = {
  //     dataList: []
  //   };
  //
  //   api.post("http://tutor.philgookang.com/detail.php", {"group_idx": prop.match.params["group_idx"]}).then(result => {
  //     var state = this.state;
  //     state.dataList = result.data.data;
  //     this.setState(state);
  //   });
  // }
  //
  // render() {
  //   return (
  //     <div className="container">
  //       {this.state.dataList.map((todo) => {
  //         return (
  //           <div>
  //             {todo.name}
  //             <br/>
  //             {todo.list.map((item) => {
  //               return (
  //                 <div>
  //                   - {item.content}
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        {/*<BoardHeader todoname={todo.name}/>*/}
        <BoardHeader/>
        <BoardDetail/>
      </div>
    );
  }
}


export default BoardPage;
