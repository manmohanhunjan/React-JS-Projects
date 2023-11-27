import React, {useState} from 'react'
import '../App.css';

const HandleClick: React.FC<{name:string}> = (props) => {
    const [message, setMessage] = useState('Hello');

    const updateMessage = () => {
        setMessage('Goodbye');
    };

    const handleClick = (customMessage: string) => {
        setMessage(customMessage);
    };

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // alert('Mouse is over!');
        // adding classNames
        event.currentTarget.classList.add('active');

    }

    const handleMouseOut = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // alert('Mouse is out!');
        // removing classNames
        event.currentTarget.classList.remove('active');
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log('Input clicked!')
        setMessage(''); // here we can reset the input value
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted!');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // console.log('Key down event!');

        if (event.key === 'Enter') {
            console.log('Enter key pressed!');
        } else if (event.key === 'Escape') {
            console.log('Escape key pressed!');
        } else {
            console.log('Other key pressed!');
        }
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('Key up event!');
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('Key press event!');
    }

    const handlefocus = (event: React.FocusEvent<HTMLInputElement>) => {
        console.log('Input focused!');
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        console.log('Input lost focus!');
    }




    return(
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1>{message}, {props.name}</h1>
            <p>This is your first React component with props, state, and events.</p>
            <button onClick={updateMessage}>Update Message</button>
            <button onClick={() => handleClick('Button Clicked')}>Click me</button>
            <input type="text" onClick={handleInputClick} value={message} onChange={handleInputChange} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Type something..." onKeyPress={handleKeyPress} onFocus={handlefocus} onBlur={handleBlur}/>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default HandleClick;
