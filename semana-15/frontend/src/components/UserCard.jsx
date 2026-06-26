import React from 'react'

const UserCard = (props) => {
  return (
    <div className='card'>
        <h4> { props.nombre} </h4>
        <p>  { props.edad }</p>
        <hr />
        <p> { props.tel }</p>
    </div>
  )
}

export default UserCard