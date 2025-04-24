import React from 'react'
import './HomeScreen.css'
import labimage from '../../assets/labimage.jpg'

const HomeScreen = () => {
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
            <div className="testNameTitle">Hemoglobin Test</div>
            <div className="testNameTitle">Urine Test</div>
            <div className="testNameTitle">Stool Test</div>
            
          </div>
        </div>
        <div className="rightPartTest">
          <div className="toprightPart">Hemoglobin Test</div>
          <div className="bottomrightPart">
            <div className="topBottomRightPart">A hemoglobin test measures the amount of hemoglobin in the blood, which helps assess overall health and detect anemia. It is essential for evaluating the oxygen-carrying capacity of red blood cells.</div>
            <div className="bottomBottomRightPart">
              <div className="bBRightPartLeftSide"> 
                <div className="detailsBlock">
                  Fast : <span className='spanColorChange'>Required</span>
                </div>
                <div className="detailsBlock">
                  Normal Range  : <span className='spanColorChange'>80-90</span>
                </div>
              </div>
              <div className="bBRightPartRightSide">
                <img src={labimage} alt='imggg' className='bBrightImage'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contectHomeScreen">contect</div>
    </div>
  )
}

export default HomeScreen;
