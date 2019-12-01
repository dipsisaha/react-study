import React, { Component } from 'react';

class FunctionClick extends Component {

  clickEvent() {
        alert("hi")
    }
  render() {
    return (
      <div> 
        <button onClick={this.clickEvent}>Click</button>  
      </div>
    );
  }
}

export default FunctionClick;
