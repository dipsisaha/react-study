import React, { Component } from 'react';

class Regularcomponent extends Component {
  render() {
    console.log("############ RegularComponent ############")
    return (
      <div> 
          I am within Regular component {this.props.name}
      </div>
    );
  }
}

export default Regularcomponent;
