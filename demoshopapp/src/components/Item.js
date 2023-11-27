import "./Item.css"
import React from 'react'
import { useState } from 'react'

function Item(props) {

    const [name , setTitle] = useState(props.name); // useState is a hook
    //is setTitle immediately called after setTitle is called  or is it scheduled to be called later?
    //it is scheduled to be called later and it is called after the function returns and the component is re-rendered
    

    const clickHandler = () => {
        console.log("clicked");
        setTitle("Popcorn");
    }

    return (
        <div>
            <p className="nirma">{name}</p>

            <button onClick={clickHandler}>click</button>

            {props.children}
        </div>
    )
}

export default Item;