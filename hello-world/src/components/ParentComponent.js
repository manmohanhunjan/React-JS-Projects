import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this) //binding in the constructor
    }

    greetParent(childName) {    //method
        alert(`Hello ${this.state.parentName} from ${childName}`) //this.state.parentName is the state of the parent component
        //and childName is the parameter of the method
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>  {/* greetHandler is the props of the child component */}
            </div>
        )
    }
}

export default ParentComponent