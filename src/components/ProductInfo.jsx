import React from 'react'
import Card from './Card'

const ProductInfo = ({ id,name,price}) => {
  // console.log(product)
  return (
    <div>
        <Card>
            <h1 className='text-3xl'>{id}</h1>
            <h2 className='text-2xl'>{name}</h2>
            <p className='text-xl'>${price}</p>
        </Card>
    </div>
  )
}

export default ProductInfo