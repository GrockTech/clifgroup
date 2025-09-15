import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import your images (replace with your actual image paths)
import slide1 from "../assets/10.jpeg";
import slide2 from "../assets/2.jpeg";
import slide3 from "../assets/11783.jpg";
import slide4 from "../assets/cctv-security-camera.jpg";
//import ShipmentMedia from "./Shipmentmedia";

const ImageSlider = () => {
  // Slide data array
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Catapillar and other Heavy duty trucks",
      description: "We bring you best catappilar"
    },
    {
      id: 2,
      image: slide2,
     title: "Catapillar and other Heavy duty trucks",
      description: "We bring you best catappilar"
  
    },
    {
      id: 3,
      image: slide3,
      title: "Airconditions ",
      description: "We offer range of quality but yet affordable aircondition sales"
    },
    {
      id: 4,
      image: slide4,
      title: "CCTV Cameras and Installation ",
      description: "Secure your home, office and residence with us. "
    }
  ];

  return (
    <div 
      id="imageSlider product" 
      className="carousel slide" 
      data-bs-ride="carousel"
      style={{ maxWidth: "1200px", height:"600px", margin: "0 auto" }}
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#imageSlider"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded-3">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="5000" // 5 seconds per slide
          >
            <img
              src={slide.image}
              className="d-block w-100"
              alt={slide.title}
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#imageSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    
    </div>
  );
};

export default ImageSlider;