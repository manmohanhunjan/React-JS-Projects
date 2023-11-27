import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>   {/* greetHandler is the props of the child component */}
            Greet Parent
            </button>
        </div>
    )
}

export default ChildComponent