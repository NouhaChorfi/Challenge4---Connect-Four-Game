import React from 'react';
import './App.css';
import Circle from './Circle.jsx';

class Row extends React.Component {
   
    render(){
        return(
          <div className='row'>
              <Circle/>
              <Circle/>
              <Circle/>
              <Circle/>
              <Circle/>
              <Circle/>
              <Circle/>
              <Circle/>
          </div>
        )
        
    }
  }
  export default Row;
  