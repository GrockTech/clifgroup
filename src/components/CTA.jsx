import React from "react";

const CTA = () => {
  return (
    <div className="container bg-danger text-white py-5" >
  <div className="row">
    {/* Text Section */}
    <div className="col-md-6 mb-4">
      <h1 className="mb-3">Let's Connect!</h1>
      <p>
        We'd love to hear from you. Whether you have a question, feedback, or just want to say hello — fill out the form and we'll get back to you!
      </p>
    </div>

    {/* Form Section */}
    <div className="col-md-6 mb-4" id="contactme">
      <form className="bg-white text-dark p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullname" placeholder="Yaw Mensah" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" placeholder="233" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Type your message here..."></textarea>
        </div>

        <button type="submit" className="btn btn-danger w-100">Send Message</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default CTA;
