import React from 'react';
import Footer from './Footer'
import Buttons from './Buttons'
import Container from './Container'
import logo1 from '../assets/images/Mask Group.png'
import mode1 from '../assets/images/mode.svg'
import mode2 from '../assets/images/lightmode.png'
import Rside from '../assets/images/Lside.svg'
import Lside from '../assets/images/Rside.svg'

const Template = () => {

  let n = 0;
  const modehandler = () => {

    n++;

    if (n % 2 === 0) {
      document.getElementById("main").style.backgroundColor = "#393e46";
      document.getElementById("modes").title = "LIGHT MODE";
      document.getElementById("modes").src=mode1;

    }

    else {
      document.getElementById("main").style.backgroundColor = "white";
      document.getElementById("modes").title = "DARK MODE";
      document.getElementById("modes").src=mode2;
    }
  }


  return (
    <>
      <div class="wrapper" id="main">
        <p className="quote">Build A Resume That Inspires</p>
        <img className="logo" src={logo1} alt="OUR LOGO" />
        <img onClick={modehandler} title="LIGHT MODE" className="mode" id="modes" src={mode1} alt="MODE ICON" />
        <img className="Rside" src={Rside} alt="illustration" />
        <img className="Lside" src={Lside} alt="illustration" />
        
        <Container />

        <Buttons />
        <Footer />

      </div>
    </>
  );
};
export default Template;
