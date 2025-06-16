import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { PiMessengerLogoBold } from "react-icons/pi";
import { GrServices } from "react-icons/gr";
import Animation from './Animation';
export default function Services() {
  return (
    <div className='bg-primry'>
      <div className=' container d-flex justify-content-between mt-5' data-aos="fade-right">

        <div><FaShippingFast style={{fontSize:'4rem', color:'blue'}}/>
        <h5>shiping on time</h5>
        <p>Make order fast</p></div>
        <div><PiMessengerLogoBold style={{fontSize:'4rem', color:'blue'}}/> <h5>We are available 24/7</h5>
        <p>Need help? contact us anyTime</p> </div>
        <div><GrServices style={{fontSize:'4rem', color:'blue'}}/> <h5>provide good  services</h5>  <p>We are provide service On home delivery</p></div>
       
      </div>
    </div>
  )
}
