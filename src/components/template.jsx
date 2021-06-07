import React from 'react';
import Footer from './Footer';
import Buttons from './Buttons';
import Container from './Container';
import logo1 from '../assets/images/Mask Group.png';
import mode from '../assets/images/mode.svg';
import Rside from '../assets/images/Lside.svg';
import Lside from '../assets/images/Rside.svg';
// import Palette from './Palette';


const Template = () => {

  let n = 0;
  const modehandler = () => {

    n++;

    if (n % 2 === 0) {
      document.getElementById("main").style.backgroundColor = "#393e46";
      document.getElementById("modes").title = "LIGHT MODE";
    }

    else {
      document.getElementById("main").style.backgroundColor = "white";
      document.getElementById("modes").title = "DARK MODE";
    }
  }



  return (
    <>
      <div class="wrapper" id="main">
        <p className="quote">Build A Resume That Inspires</p>
        <img className="logo" src={logo1} alt="OUR LOGO" />
        <img onClick={modehandler} title="LIGHT MODE" className="mode" id="modes" src={mode} alt="MODE ICON" />
        <img className="Rside" src={Rside} alt="illustration" />
        <img className="Lside" src={Lside} alt="illustration" />
        {/* <img className="icons" src={Sicon} alt="icons" /> */}
        {/*<Palette/>*/}
        <Container />

        <Buttons />
        <Footer />

      </div>
    </>
  );
};
export default Template;
