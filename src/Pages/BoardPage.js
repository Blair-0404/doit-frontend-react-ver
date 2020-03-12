import React, {Component} from 'react';
import Board from "../Components/Board";
import BoardHeader from "../Components/BoardHeader";




class App extends Component {
  render() {
    return (
      <div>
        <BoardHeader/>
        <Board/>
        <Board/>
        <Board/>
        <Board/>
      </div>
    );
  }
}

export default App;