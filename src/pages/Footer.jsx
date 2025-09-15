import React from 'react'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <footer className="bg-dark text-white mt-5">
  <div className="container py-4">
    <div className="row">
      <div className="col-md-4 mb-3">
        <h5>About Us</h5>
        <p className="small">
          We're here to help you connect and communicate. Feel free to reach out with questions or feedback.
        </p>
      </div>

      <div className="col-md-4 mb-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#service" className="text-white text-decoration-none">Services</a></li>
          <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
          <li><a href="#contactme" className="text-white text-decoration-none">FAQs</a></li>
        </ul>
      </div>

      <div className="col-md-4 mb-3">
        <h5>Contact Info</h5>
        <ul className="list-unstyled small">
          <li>Email: gliffpalmgroup@gmail.com</li>
          <li>Phone: +233 597 381 447</li>
          <li>Address: Achimota Old Station, Accra - Ghana</li>
        </ul>
      </div>
    </div>

    <hr className="border-secondary" />

    <div className="text-center small">
      © {new Date().getFullYear()} Cliffpalm. All rights reserved.
    </div>
  </div>
</footer>

      
    </div>
  )
}

export default Footer
