import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {    //this is the first method that is called when an instance of the class is created
        super(props)    //this is required when we define a constructor in a class component

        this.state = {      //state is a special property of a class component
            count: 0
        }
    }

    increment() { //this is incorrect way of incrementing
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('Callback value', this.state.count) }) //asynchronous console.log statement (callback function)
        // console.log(this.state.count); //synchronous console.log statement

        this.setState((prevState, props) => ({  //prevState is the previous state of the component //correct way to increment the state value
            count: prevState.count + 1      //props is the props of the component
        }))
    }

    incrementFive() {  //this is the correct way to increment the state value
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Counter - {this.state.count}</div> 
                <button onClick={() => this.incrementFive()}>Increment</button>  {/*this is the correct way to call the incrementFive method*/}
            </div>
        )
    }
}

export default Counter