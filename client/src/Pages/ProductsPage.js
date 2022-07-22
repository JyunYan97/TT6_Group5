import React from 'react'
import CardContainer from '../Components/Content/CardContainer'
import NavBar1 from '../Components/NavBars/NavBar1'

const Products = () => {
  return (
    <div>
        <NavBar1 />
        <h1 style={{padding:'1rem'}}>Products</h1>
        <CardContainer />
    </div>
  )
}

export default Products