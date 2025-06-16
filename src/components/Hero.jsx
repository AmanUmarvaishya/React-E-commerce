import headset from "../assets/headset.jpg";
import dslr from "../assets/dslr.jpg";
import earbuds from "../assets/earbuds.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-down-left" className="mt-4">
      <div
        id="carouselExampleAutoplaying"
        className="  carousel slide " 
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={dslr} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={headset} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={earbuds} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
