import React from 'react'
import './itemdetail.css'

const ItemDetail = ( {product} ) => {
  return (
    <div className='item-detail-container'>
      <div className='item-detail'>
        <img src={product.image}/>
        <div className='item-detail-content'>
          <h2>{product.name}</h2>
          <p className='description'>{product.description}</p>
          <p className='precio'>Precio: ${product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail