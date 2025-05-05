import React,{useEffect , useState} from 'react'
import './HomeScreen.css'
import labimage from '../../assets/labimage.jpg'
import Data from './Data.json'

const HomeScreen = () => {
  const [listOfTest,setListOfTest] = useState([]);
  const [activeIndexNav,setActiveIndexNav] = useState(0);
  const [selectedDetailedTest,setSelectedDetailedTest] = useState(null);

  useEffect(()=>{
    setListOfTest(Data.data);
    setSelectedDetailedTest(Data.data[0])
  },[])
  console.log(selectedDetailedTest)

  const handleClickNavLink = (index) =>{
    setActiveIndexNav(index);
    setSelectedDetailedTest(Data.data[index])
  }
  
  return (
    <div className='homescreen'>
      <div className="introHomeScreen" style={{ background: 'linear-gradient(#d7f1ef, #ffffff)' }}>
        <div className="imgHomeScreenLogo">
          <div className="imgDiv">
            <img className='labLogoHomeScreen' src={labimage} alt='labpic'/>
          </div>
          <div className="introPart">
            <div className="titleMini">Enterprise Limited</div>
            <div className="titleMajor">Pathology Management System</div>
            <div className="descriptionone">Pathology lab management ensures smooth operations, quality control, and accurate diagnostic results. It involves overseeing staff, inventory, and compliance with health standards.</div>
            <div className="descriptiontwo">Pathology lab management focuses on streamlining lab workflows and maintaining high-quality standards for testing. It includes supervising personnel, managing resources, and ensuring regulatory compliance.</div>
            <div className="topbuttondiv">
              <div className="btndiv">
                Create
              </div>
              <div className="btndiv">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testHomeScreen">
        <div className="leftPartTest">
          <div className="totalTest">4 Test Available</div>
          <div className="testNameDiv">
            {
              listOfTest?.map((item,index)=>{
                return(
                  <div onClick={()=>{handleClickNavLink(index)}} className={`testNameTitle ${activeIndexNav===index?'activeNavLink':null}`}>{item.name}</div>
                );
              })
            }
            
          </div>
        </div>
        <div className="rightPartTest">
          <div className="toprightPart">{selectedDetailedTest?.name}</div>
          <div className="bottomrightPart">
            <div className="topBottomRightPart">{selectedDetailedTest?.description}</div>
            <div className="bottomBottomRightPart">
              <div className="bBRightPartLeftSide"> 
                {
                  selectedDetailedTest?.requirements.map((item,index)=>{
                    return(
                      <div className="detailsBlock">
                      {item.key} : <span className='spanColorChange'>{item.value}</span>
                    </div>
                    )
                  })
                }
     
              </div>
              <div className="bBRightPartRightSide">
                <img src={selectedDetailedTest?.imgLink} alt='imggg' className='bBrightImage'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contectHomeScreen">
        <div className="contactFormTitle" id='contact'>Contact Form</div>
        <div className="contactForm">
          <div className="inputFields">
            <input type='email' className='inputFeildBox' placeholder='Enter your Email id:'/>
            <input type='text' className='inputFeildBox' placeholder='Enter your Name'/>
            <input type='number' className='inputFeildBox' placeholder='Enter your Mobile Number'/>
            <textarea type='textbox' className='inputTextAreaMessage' placeholder='Type your message here...' rows={10}/>
          </div>
          <div className="sendEmailButton">
            Send
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen;
