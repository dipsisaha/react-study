import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         UserName:'',
         comment:'',
         skill:'angular'
      };
    };
    
    handleClick = (event) =>{
        this.setState ({
            UserName: event.target.value
        })
    }

    handlecomment= (event) => {
        this.setState({
            comment:event.target.value
        })
    }

    handleSkill=(event)=>{
        this.setState({
            skill:event.target.value
        })
    }

    handlesubmit=(event)=>{
        alert(this.state.UserName +" ---"+this.state.comment +"---"+this.state.skill)
        event.preventDefault()
    }

  render() {
    return (
     <form onSubmit={this.handlesubmit}>
         <div>
             <label>UserName : </label>
             <input type="text" value={this.state.UserName} onChange={this.handleClick}/>
         </div>
         <div>
             <label>Comment : </label>
             <textarea value={this.state.comment} onChange={this.handlecomment}></textarea>
         </div>
         <div>
             <label>Skill : </label>
             <select  value={this.state.skill} onChange={this.handleSkill}>
                 <option value="java">Java</option>
                 <option value="angular">Angular</option>
                 <option value="c++">C++</option>
             </select>
         </div>
         <button type="submit">save</button>
     </form>
    );
  }
}

export default Form;
