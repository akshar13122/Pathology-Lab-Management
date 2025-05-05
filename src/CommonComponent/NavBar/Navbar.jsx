import React,{useState} from 'react'
import './Navbar.css'
import pathology2 from '../../assets/pathology2.png'
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
        openCreate &&  <div className="model">
        <div className="modelCard">
          <div className="modelTitleBox">
            <div className="modelTitle" >Create New</div>
            <div className="xButon" onClick={()=>{setOpenCreate(prev=>!prev)}}>X</div>
          </div>
          <div className="modelBody">
            <div className="inputRowModel">
              <div className="inputBox">
                <div className="inputLabel">Name</div>
                <input type='text' className='inputModel' placeholder='Enter a Name'/>
              </div>
              <div className="inputBox">
                <div className="inputLabel">Age</div>
                <input type='text' className='inputModel' placeholder='Enter Age'/>
              </div>
           
            </div>

            <div className="inputRowModel">
              <div className="inputBox">
                <div className="inputLabel">Address</div>
                <input type='text' className='inputModel' placeholder='Enter Address'/>
              </div>
              <div className="inputBox">
                <div className="inputLabel">Mobile</div>
                <input type='text' className='inputModel' placeholder='Enter Mobile No'/>
              </div>
           
            </div>

            <div className="inputRowModel">
              <div className="inputBox">
                <div className="inputLabel">Examined By</div>
                <input type='text' className='inputModel' placeholder='Examined By'/>
              </div>
              <div className="inputBox">
                <div className="inputLabel">Mobile</div>
                <input type='text' className='inputModel' placeholder='Enter Mobile No'/>
              </div>
            </div>

            <div className="inputRowModel">
              <div className="inputBox">
                <div className="inputLabel">Examined By</div>
                <input type='text' className='inputModel' placeholder='Examined By'/>
              </div>
              <div className="inputBox">
                <div className="inputLabel">Mobile</div>
                <input type='text' className='inputModel' placeholder='Enter Mobile No'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Navbar