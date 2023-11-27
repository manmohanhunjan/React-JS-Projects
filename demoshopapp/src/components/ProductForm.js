import './ProductForm.css'
import { useState } from 'react';

function ProductForm() {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);

    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate
        };

        console.log(productData);
        setTitle('');
        setDate('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-product-title'>
                <label >Title</label>
                <input onChange={titleChangeHandler} value={newTitle} type="text"></input>
            </div>
            <div className='new-product-date'>
                <label >Date</label>
                <input onChange={dateChangeHandler} value={newDate} type="date" min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-product-button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )

}
export default ProductForm;