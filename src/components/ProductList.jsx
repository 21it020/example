import React from 'react'
import ProductInfo from './ProductInfo';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },

    ];

    // console.log({...products[0]})
  return (
    <div>
        <h1>Product List</h1>
        
        <ul>
            {products.map((product) => (
              // console.log(product) 
                <li key={product.id}>  
                    <ProductInfo {...product}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList