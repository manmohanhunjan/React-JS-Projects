import React, { Component } from 'react'

// const Destructuring = ({name, heroName}) => {        //Destructuring props
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

//OR

// const Destructuring = props => {
//     const { name, heroName } = props     //Destructuring props
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

//Class Component

class Destructuring extends Component {
    render() {
        const { name, heroName } = this.props       //Destructuring props
        // const { state1, state2 } = this.state    //Destructuring state
        return (
            <div>
                <h1>Welcome {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}


export default Destructuring