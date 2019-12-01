import React, { PureComponent } from 'react';

class Purecomponent extends PureComponent {
  render() {
    console.log("############ PureComponent ############")
    return (
      <div>
          I am within Pure Component {this.props.name}

      </div>
    );
  }
}

export default Purecomponent;
