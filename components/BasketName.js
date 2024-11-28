import React from 'react'

const BasketName = ({appleCount, name}) => {
  return (
    <div>
      <h1>{appleCount} Apples</h1>
      <strong>{name}</strong>
    </div>
  )
}

export default BasketName
