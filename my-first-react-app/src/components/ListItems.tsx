import React from "react";

const ListItem: React.FC<{ item: string }> = ({ item }) => {
    return <li>{item}</li>;
};

const List: React.FC= () => {
    const items = ["Apple", "Banana", "Orange"];

    return (
        <ul>
            {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </ul>
    );
};

const ListItems: React.FC = () => {
    return(
        <div>
            <h1>Shopping List</h1>
            <List />
        </div>
    )
}

export default ListItems;