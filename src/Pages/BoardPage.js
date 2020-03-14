import React, {Component} from 'react';
import BoardDetail from "../Components/BoardDetail";// import style from '../Scss/BoardDetail.scss';
import BoardHeader from "../Components/BoardHeader";




class App extends Component {
  render() {
    return (
      <div>
        <BoardHeader/>
        <BoardDetail/>
      </div>
    );
  }
}

export default App;
