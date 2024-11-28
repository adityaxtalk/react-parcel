import React from 'react'
import classes from "./button.module.css";

const Button = ({image, title, clickHandler}) => {
  return (
    <button onClick={()=> clickHandler()} className={classes["btn-button"]} title={title}>
        <img src={image} alt={title}/> 
    </button>
  )
}

export default Button