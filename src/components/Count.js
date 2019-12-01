import React, {Component} from 'react'

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count :0
        }
    }

    increment() {
        // this.setState({
        //     count : this.state.count +1
        // },()=>{
        //     console.log(this.state.count)
        // })

        this.setState((preState,props) =>({
            count : preState.count + 1
        }))
       
        
    }

    incrementFive(){
       this.increment() 
       this.increment()
       this.increment() 
       this.increment() 
       this.increment() 
    }

    render() {
        return(
            <div>
                Count - {this.state.count}
                <br/>
                <button onClick={()=>this.increment()}>Increment</button>
                <br/>
                <button onClick={()=>this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Counter