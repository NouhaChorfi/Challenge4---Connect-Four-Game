import React from 'react';
import Board from './Board.jsx';
import Player from './Player.jsx'
import './App.css';


class App extends React.Component {
  render(){
      return(
        <Player/>
        <Board/>
      )      
  }
}
export default App;
