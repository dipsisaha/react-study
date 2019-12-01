import React, { Component } from 'react';

class Condition extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      };
    };
    

  render() {

    return this.state.isLoggedIn && <div> Welcome Dipanwita</div>

    //  return this.state.isLoggedIn ?(
    //     <div> Welcome Dipanwita</div>
    //  ) : (
    //     <div> Welcome Guest</div>
    //  )

    // let message
    // if (this.state.isLoggedIn) {
    //     message = "Dipanwita"
    // } else {
    //     message = "Guest"
    // }

    // return(
    //     <div>Welcome {message}</div>
    // )


    // if (this.state.isLoggedIn) {
    //     return (
    //         <div> Welcome Dipanwita</div>
    //       );
    // } else {
    //     return (
    //         <div> Welcome Guest</div>
    //       );
    // }
   
  }
}

export default Condition;
