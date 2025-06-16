import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react'

export default function Animation() {
       useEffect(() => {
          AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-out",
          });
        //   AOS.refresh();
        }, []);
  return (
    <div>
      
    </div>
  )
}
