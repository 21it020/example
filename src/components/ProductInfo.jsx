import React from 'react'

const ProductInfo = ({name, price}) => {

  return (
    <div>
        <p>Product Name: {name}</p>
        {/* <p>Product Description: {product.description}</p> */}
        <p>Product Price: {price}</p>
        {/* <p>Product In Stock: {product.inStock.toString()}</p> */}
    </div>
  )
}

export default ProductInfo