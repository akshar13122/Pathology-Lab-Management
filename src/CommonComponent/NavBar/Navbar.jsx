import React from 'react'
import './Navbar.css'
import pathology2 from '../../assets/pathology2.png'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftSideNavbar">
            <img src={pathology2} alt='logo' className='imgLogoNavbar'/>
        </div>
        <div className="rightSideNavbar">
            <div className="linksRightNavbar">Create New</div>
            <div className="linksRightNavbar">Report</div> 
            <div className="linksRightNavbar">Add Test</div>
        </div>
    </div>
  )
}

export default Navbar