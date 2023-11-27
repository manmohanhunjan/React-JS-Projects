import React, { Component } from 'react'

// 1st approach : binding in the render
// 2nd approach : binding in render using arrow function
// 3rd approach : binding in the constructor
// 4th approach : binding as class property

//3rd and 4th approach are the recommended ways
// but you can use 2nd approach for its simplicity
//avoid 1st approach as it will cause performance issues

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this) // This is the 3rd approach .. binding in the class constructor
  }

  // clickHandler = () => {
  //   this.setState({
  //     message: 'Goodbye!'
  //   })
  //   console.log(this);
  // }

  //For the 4th approach, we need to use arrow function as class property
  clickHandler = () => {
    this.setState({
      message: 'Goodbye!'
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/* This is the 1st approach : binding in the render */}
        {/* <button onClick={() => this.clickHandler()}>Click</button>  */} {/* This is the recommended way .. 2nd approach : binding in render using arrow function */}
        <button onClick={this.clickHandler}>Click</button> {/* This is the 3rd approach .. binding in the constructor */}
      </div>
    )
  }
}

export default EventBind