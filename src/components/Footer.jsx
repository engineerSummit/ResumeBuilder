import React from 'react'
import Icons from './Icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="ft-item1">
                <p style={{ color: " #393E46", fontWeight: "bold" }}>Learn</p>
                <p>Apply</p>
            </div>

            <div className="ft-item2">
                <p style={{ color: "#393E46", fontWeight: "bold" }}>Join us</p>
                <p>Mentor</p>
                <p>Student</p>
            </div>

            <div className="ft-item3">
                <p style={{ color: " #393E46", fontWeight: "bold" }}>Contact us</p>
            <p style={{ color: " #fff"}}>officialengineersummit@gmail.com</p>
                <p>New delhi</p>
            </div>
            <p className="line"></p>
            <p className="copy"><span style={{ fontSize: "18px" }}>&#169;</span> 2021</p>
            <Icons />
        </div>
    )
}

export default Footer
