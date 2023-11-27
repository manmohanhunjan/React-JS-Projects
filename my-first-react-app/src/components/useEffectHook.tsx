import React, { useState, useEffect } from "react";

const UseEffectHook: React.FC<{name: string}> = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {       //useEffect hook is used to fetch data from an API endpoint and update the state of the component with the data.
        //Simulate data fetching
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>This is your first React component with useEffect hook.</p>
            <ul>
                {data.map((item: any) => (
                    <li key={item.id}>
                        <span>{item.id}</span>
                        &nbsp;|&nbsp;
                        {item.title}
                        <p>{item.body}</p>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default UseEffectHook;
