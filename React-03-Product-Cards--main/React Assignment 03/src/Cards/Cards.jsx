import React from 'react'
import styles from './Cards.module.css'

const Cards = ({category, description,price, rating,image,title}) => {
  return (
    <>
    <div className={styles.parent}>
    <div className={styles.main}> 
        <span className={styles.category}>{category}</span> 
        <br /><br />
       
            <img src={image} alt="" />
     
        <small>Rating: { rating}/5</small>
        <h1>{title}</h1>
        <p>{ description}</p>
        <h2>{"$"+price}</h2>
        <button href="#">Buy Now</button>
    </div> 
    </div>
    </>
  )
}

export default Cards
