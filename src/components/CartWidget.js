import React from 'react'

const CartWidget = ({cart}) => {
  return (
    <div>
      <p className='contador'>TOTAL: {cart}</p>
      <img className='carrito1' src='../img/carrito1.png' width={100} height={100}/>
    </div>
  )
}

export default CartWidget