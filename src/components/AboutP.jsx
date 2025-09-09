//import React from 'react'
import React from 'react';
import bg from '../assets/bg1.jpg';
import ab from '../assets/business-colleagues-watching-content-laptop.jpg';


const AboutP = () => {
  return (
    <div className='' id='about'>
       <div className=" container text-white text-center mb-8 "
  style={{
    background: `url(${bg}) no-repeat center center`,
    backgroundSize: 'cover',
    height: '100vh',
  }}>

  
    <div class="row h-100 mt-1 mb-2 overflow-auto align-items-left">
      <div class="col-md-6 mb-4 mt-4 mb-md-0">
        <img src={ab} alt="Cliffpalm Logistics" class="img-fluid rounded shadow d-none d-sm-block"/>
      </div>
      <div class="col-md-6 h-100 mt-4 mb-2">
        <h2 class="mb-3 p-1 text-white">About Clifpalm Logistics & Group of Companies</h2>
        <p>
          <strong>Clifpalm Logistics and Group of Companies</strong> is a forward-thinking enterprise
          dedicated to delivering excellence in logistics, import solutions, and technology-driven services.
          With a strong commitment to reliability and innovation, we are reshaping how businesses move
          goods and stay connected in today’s fast-paced world.
        </p>
        <p>
          Our core division, <strong>Clifpalm Logistics</strong>, specializes in local and international
          freight, warehousing, and end-to-end import services. We ensure your cargo reaches its destination
          safely, efficiently, and on time.
        </p>
        <p>
          Under our group is <strong>ESmart Systems</strong> — a technology division focused on modern
          <em>CCTV surveillance, fiber optics installation, and advanced networking infrastructure</em>.
          Whether it's for homes, offices, or industrial environments, we offer secure and scalable solutions.
        </p>
        <p>
          At Clifpalm, we combine logistics precision with technology expertise to help your business thrive.
        </p>
        <ul class="list-unstyled mt-3 ">
          <li><i class="bi bi-check-circle-fill text-success me-2"></i>Reliable Logistics & Import Handling</li>
          <li><i class="bi bi-check-circle-fill text-success me-2"></i>Advanced Security & CCTV Installations</li>
          <li><i class="bi bi-check-circle-fill text-success me-2"></i>Fiber Optic & Network Solutions</li>
          <li><i class="bi bi-check-circle-fill text-success me-2"></i>Client-Focused and Professional</li>
        </ul>
      </div>
    </div>
  

  </div>
    </div>
  )
}

export default AboutP
