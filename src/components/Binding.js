import React, { Component } from 'react';

class Binding extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message :'Welcome'
        };

       //3 this.clickEvent = this.clickEvent.bind(this)
    };

    // clickEvent() {
    //     this.setState({
    //         message:'Thank you'
    //     })
    // } 1,2,3

    clickEvent = () => {
        this.setState({
            message:'Thank you'
        })
    }
    
    
  render() {
    return (
      <div> 
             <h1>{this.state.message}</h1>
            {/* <button onClick={this.clickEvent.bind(this)}>Click</button> */}
            {/* <button onClick={()=>this.clickEvent()}>Click</button>   */}
            {/* <button onClick={this.clickEvent}>Click</button>  */}
            <button onClick={this.clickEvent}>Click</button>
      </div>
    );
  }
}

export default Binding;
