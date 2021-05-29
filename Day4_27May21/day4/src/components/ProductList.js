import React from 'react'
import products from './products.json'
import ProductCard from './ProductCard'
const ProductList =(props) =>{
let {data: products} =props
    return (

<div>
    <div>
        <div>
            <h3>Products</h3>
        </div>
    </div>
    <div>
        {products.map((product) =><ProductCard key={product.sku}{...product} /> )}
    </div>
</div>

    )}

    export default ProductList