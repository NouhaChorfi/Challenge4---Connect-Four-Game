import React from 'react';
import './App.css';
import Row from './Row.jsx';
import Player from './Player.jsx';

class Board extends React.Component {
   
    render(){
        return(
          <div className='board'>
             
              <Row/>
              <Row/>
              <Row/>
              <Row/>
              <Row/>
              <Row/>
              <Row/>
              <Row/>
             
          </div>
        )
        
    }
  }
  export default Board;
  