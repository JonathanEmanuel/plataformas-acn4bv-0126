import React from 'react'

const Cart = ( { lista }) => {

    const cant = lista ? lista.length : 0

  return (
    <div className='badge text-bg-secondary'>
        Carrito: { cant }
    </div>
  )
}

export default Cart