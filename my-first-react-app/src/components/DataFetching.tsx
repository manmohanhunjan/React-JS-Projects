import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(err => {
            setError('Error fetching data');
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h2>Data from API</h2>
            {loading ? <p>Loading...</p> :(
                <ul>
                    {data.map((post: any) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            ) }
            {error && <p>{error}</p> }
        </div>
    )

}

export default DataFetching;