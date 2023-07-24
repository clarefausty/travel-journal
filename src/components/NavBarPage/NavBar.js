import React from 'react'
import {FcGlobe} from "react-icons/fc"
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav'>
        <span><FcGlobe className="icon"/></span>
        <p>my travel journal</p>
    </div>
  )
}

export default NavBar