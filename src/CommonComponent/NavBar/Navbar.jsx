import React,{useState} from 'react'
import './Navbar.css'
import pathology2 from '../../assets/pathology2.png'
import Model from '../Model/Model';
const Navbar = () => {
  const [openCreate,setOpenCreate] = useState(false);
  return (
    <div className="navbar">
      <div className="leftSideNavbar">
        <img src={pathology2} alt='logo' className='imgLogoNavbar' />
      </div>
      <div className="rightSideNavbar">
        <div className="linksRightNavbar" onClick={()=>{setOpenCreate(prev=>!prev)}}>
          Create New
          </div>
        <div className="linksRightNavbar">Report</div>
        <div className="linksRightNavbar">Add Test</div>
      </div>
      {
        openCreate && <Model setOpenCreate = {setOpenCreate}/>
      }
    </div>
  )
}

export default Navbar