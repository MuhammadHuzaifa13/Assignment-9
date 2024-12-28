import React from 'react'
import Cards from './Cards/Cards'
import {Data} from "./Data"
import styles from "./App.module.css"

const App = () => {
  return (
    <>
     <h1>Products</h1>
     <br /><br /><br />
     <div className={styles.products}>
    {
      Data.map((e,i)=>{
        return(<div  key={e.id} >
          <Cards category = {e.category} description = {e.description} price = {e.price} rating={e.rating.rate}  image = {e.image} title = {e.title} />
        </div>
      )})
    }
    </div>
    </>
  )
}

export default App
