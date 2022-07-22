import React from 'react'
import CardContainer from '../Components/Content/CardContainer'
import NavBar1 from '../Components/NavBars/NavBar1'

const Wallets = () => {
  return (
    <div>
        <NavBar1 />
        <h1 style={{padding:'1rem'}}>Wallets</h1>
        <CardContainer />
    </div>
  )
}

export default Wallets