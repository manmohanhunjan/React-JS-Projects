import React from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'

export default function FilterableProductTable({ products }) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}
