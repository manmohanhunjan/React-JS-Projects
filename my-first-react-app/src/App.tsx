import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import HandleClick from './components/handlingEvents';
import ConditionalRendering from './components/conditionalRendering';
import UseEffectHook from './components/useEffectHook';
import Counter from './components/UseStateHook';

import ReducerCounter from './components/UseReducerHook';

import Header from './useContextt/Header';
import ThemeToggle from './useContextt/ThemeToggle';
import { ThemeProvider } from './useContextt/ThemeContext';

//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';

//List
import ListItems from './components/ListItems';

//Form
import Form from './components/Form';

//Axios
import DataFetching from './components/DataFetching';


//Define functional component using Typescript
interface Person {
    name: string;
    age: number;
    isActive: boolean;
    data: {
        address: {
            street: string
        };
        email: string;
        id: number;
        username: string

    }
}

const person: Person = {
    name: 'John Doe',
    age: 25,
    isActive: true,
    data: {
        id: 1,
        username: 'johndoe',
        email: 'email@mail.com',
        address: {
            street: 'Street 1',
        }
    }
}


const App: React.FC<{ name: string }> = (props) => {


    const [message, setMessage] = useState('Hello');
    const [inputValue, setInputValue] = useState('');
    const updateMessage = () => {
        setMessage('Goodbye')
    }

    const handleClick = () => {
        alert('Button clicked!');
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log('Input clicked!')
        setInputValue(''); // here we can reset the input value
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted!');

    }

    return (
        

            <div>
                {/* Routing */}
                <div>
                    <h1>
                        React Router Example
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <DataFetching/>

                <h1>{message}, {props.name}!</h1>
                <p>This is your first React component using TypeScript.</p>
                <button onClick={updateMessage}>Click me!</button>
                <button onClick={handleClick}>Click me</button>
                <input
                    type={'text'}
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={handleInputClick}
                    placeholder={'Type something...'}
                />
                <p>
                    You typed: {inputValue}
                </p>
                <ul>
                    <li>Name: {person.name}</li>
                    <li>Age : {person.age}</li>
                    <li>Active : {person.isActive ? 'Active' : 'Inactive'}</li>
                    <li>Address : {person.data.address.street}</li>
                    <li>Email : {person.data.email}</li>
                    <li>Username : {person.data.username}</li>
                </ul>

                <form onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Type something..." />
                    <button type="submit">Submit</button>
                </form>

                {/* <HandleClick name='Manmohan' /> */}
                <hr />
                {/* <ConditionalRendering name='Manmohan' /> */}
                <hr />
                {/* <UseEffectHook name='Manmohan' /> */}
                <hr />
                <Counter />
                <hr />
                <ReducerCounter />
                <hr />
                <ListItems />
                <hr />
                <Form />
                <hr />
                
            </div>
    );
};

//Export the component
export default App;
