import React from 'react'
import "../styles/header.css"
import { Link } from "react-router-dom"
import { MdApps, } from "react-icons/md/"
import { CgProfile } from "react-icons/cg"


const Header = () => {
  return (
    <nav className='navbar'>
        <div className='left-side'>
            <Link to={"#"} className="link">About</Link>
            <Link to={"#"} className="link">Store</Link>
        </div>

        <div className='right-side'>
            <div className='right-links'>
              <Link to={"#"} className="link">Gmail</Link>
              <Link to={"#"} className="link">Images</Link>
            </div>
            
            <div className='icons'>
              <MdApps className='MdApps' />
              <CgProfile className='CgProfile' />
            </div>
        </div>
    </nav>
  )
}

export default Header