import React, { Component } from "react";

// class Message extends Component {
//     constructor() {
//         super();  // calls the constructor of parent class
//         this.state = {
//             message: "Welcome visitor",
//         };
//     }

//     changeMessage() {  
//         this.setState({   // .setState is 
//             message: "Thank you for subscribing"
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={() => this.changeMessage()}>Subscribe</button>
//             </div>
//         );
//     }
// }

const Message = () => {
    //state using function component
    const [message, setMessage] = React.useState("Welcome visitor");

    const changeMessage = () => {
        setMessage("Thank you for subscribing");
    }

    return (
        <div>

            <h1>{message}</h1>
            <button onClick={() => changeMessage()}>Subscribe</button>
        </div>
    );

}

export default Message;


// types of sql

