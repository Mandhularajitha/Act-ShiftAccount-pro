import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import './App.css';

const DemoPageImages = () => {

  return (
    <div style={{marginLeft:"6rem",display:"flex",textDecoration:"none",marginTop:"2rem",padding:"2rem"}}>

         <div className='data'  style={{listStyleType:"none !important"}}>
            <img src={image1} alt="BigCo Inc"/>
            <li>OOkla Verified</li>
            <li>Slieeds varfied</li>
            <li>by Ookla</li>
            
        </div>
         <div style={{marginLeft:"2rem"}}>
            <img src={image2} alt="BigCo Inc"/>
            <li>Voice & Data</li>
            <li>Voice & Telecom</li>
            <li>Leadership</li>
        </div>
         <div style={{marginLeft:"2rem"}}>
            <img src={image3} alt="BigCo Inc"/>
            <li>TOI/Stream</li>
            <li>Highest average</li>
            <li>download reates</li>
        </div>
         <div style={{marginLeft:"2rem"}}> 
            <img src={image4} alt="BigCo Inc"/>
            <li>#AsliFiber</li>
            <li>Asli Fiber in</li>
            <li>Lucknow & Ahmedbad</li>
        </div>
         <div style={{marginLeft:"2rem"}}>
            <img src={image5} alt="BigCo Inc"/>
            <li>Et Certified</li>
            <li>Best Brand in</li>
            <li>BroadBand 2020-ET</li>
        </div>
      
    </div>
  )
}

export default DemoPageImages
