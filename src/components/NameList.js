import React, { Component } from 'react';

class NameList extends Component {

    constructor(props) {
      super(props)

      this.state = {
          names :[
              {
                  "id": 1,
                  "ename" : "Dipanwita",
                  "email": "abc@text.com"
              },{
                "id": 2,
                "ename" : "Mimi",
                "email": "abc@text.com"
            },{
                "id": 3,
                "ename" : "Koli",
                "email": "abc@text.com"
            }
          ],
         message :"Hello Message"
        }
    
    };
    


  render() {
   
    return(

        <div>
            {
                this.state.names.map(list=>
                    <div key={list.id}>
                         <h2>{list.id}</h2>
                         <p>Name : {list.ename}</p>
                         <p>Name : {list.email}</p>
                    </div>
                    )
            }
        </div>
    )

    // return(
    //     <div>{this.state.names}</div>
    // )
  }
}

export default NameList;
