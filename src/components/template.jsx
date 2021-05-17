import React from 'react';
import Footer from './Footer'
import Buttons from './Buttons'
import logo1 from '../assets/images/Mask Group.png'
import mode from '../assets/images/mode.svg'
import Rside from '../assets/images/Lside.svg'
import Lside from '../assets/images/Rside.svg'

const Template =()=>{
  return(
    <>
    <div class="wrapper">
    <p className="quote">Build A Resume That Inspires</p>
    <img className="logo"  src={logo1} alt="OUR LOGO" />
    <img className="mode"  src={mode} alt="MODE ICON"  />
    <img className="Rside" src={Rside} alt="illustration"  />
    <img className="Lside" src={Lside} alt="illustration"  />
    <div class="container-R">
    <div class="template-L">
    </div>
    <div class="template-R">
    </div>
    </div>
    <Buttons />
    <Footer />

    </div>
    </>
  );
};
export default Template;
