import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='nav_name'>
        <img src='' alt=''/>
        <h2>Medichain</h2>
      </div>
      <div className='nav_networkselector'>
        <select name='network' id='network'>
            <option value='0' disabled>Select Network</option>
            <option value='31337'>Localhost</option>
            <option value='0x5'>Goerli</option>
            <option value='0x13881'>Mumbai</option>
        </select>
      </div>
      <div className='nav_balance'>
        <p className='nav_mybalance'>
            My Balance: 0ETH
        </p>
        <button className='nav_balance-box'>Connect</button>
      </div>
    </div>
  )
}

export default Navbar
