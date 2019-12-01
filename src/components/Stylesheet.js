import React, { Component } from 'react';
import './myStyle.css'

class Stylesheet extends Component {
  render() {
    let className = this.props.isLogged ? 'textColor' :''
    return (
      <div className={`${className} ft-size`}> 
        <h1>Dipanwita</h1>
      </div>
    );
  }
}

export default Stylesheet;
