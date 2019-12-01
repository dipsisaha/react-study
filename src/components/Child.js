import React, { Component } from 'react';

class Child extends Component {

  render() {
    return (
      <div>
          <button onClick={() =>this.props.greetHandler('Child')}>Click Me</button>
      </div>
    );
  }
}

export default Child;
