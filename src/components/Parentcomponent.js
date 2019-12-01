import React, { Component } from 'react';
import Regularcomponent from './Regularcomponent';
import Purecomponent from './Purecomponent';
import Memocomponent from './Memocomponent';

class Parentcomponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Dipanwita'
      };
    };

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name :'Dipanwita'
            })
        },2000)
    }
    
  render() {
    console.log("############ ParentComponent ############")
    return (
      <div> 
       Parent Component
       <Memocomponent/>
       <Regularcomponent name={this.state.name}/>
       <Purecomponent name= {this.state.name}/>
          
     </div>
    );
  }
}

export default Parentcomponent;
