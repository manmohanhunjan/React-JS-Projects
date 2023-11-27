import React, { useState } from "react";

const ConditionalRendering: React.FC<{ name: string }> = (props) => {
    const [message, setMessage] = useState("Hello");
    const [showMessage, setShowMessage] = useState(true);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };
    return (
        <div>
            {/* {showMessage && (
                <h1>
                    {message}, {props.name}!
                </h1>
            )}
            <p>This is your first React component with conditional rendering.</p>
            <button onClick={toggleMessage}>Toggle Message</button> */}

            {/* OR */}

            {showMessage ? (
                <>
                    <h1>{message}, {props.name}!</h1>
                    <p>This is your first React component with conditional rendering.</p>
                </>
            ) : (
                <p>Message is hidden.</p>
            )}
            <button onClick={toggleMessage}>Toggle Message</button>
        </div>
    );
};

export default ConditionalRendering;
