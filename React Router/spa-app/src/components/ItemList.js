import { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
          <a href={`/item/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default ItemList;
