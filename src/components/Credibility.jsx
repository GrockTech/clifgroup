// import React from 'react'

// const Credibility = () => {
//   return (
//     <div>
//       {/* <!-- Certificate Section --> */}
// <section class="py-5 bg-light">
//   <div class="container text-center">
//     <h2 class="mb-3 fw-bold">Our Certification</h2>
//     <p class="text-muted mb-4">
//       We are a certified and trusted business, ensuring credibility and compliance in every service we deliver.
//     </p>

//     {/* <!-- Certificate Card --> */}
//     <div class="card mx-auto shadow-sm" style="max-width: 400px;">
//       <img
//         src="certificate-thumbnail.jpg"
//         class="card-img-top"
//         alt="Business Certificate"
//         style="cursor: pointer;"
//         data-bs-toggle="modal"
//         data-bs-target="#certificateModal"
//       />
//       <div class="card-body">
//         <button 
//           class="btn btn-primary" 
//           data-bs-toggle="modal" 
//           data-bs-target="#certificateModal">
//           View Full Certificate
//         </button>
//       </div>
//     </div>
//   </div>
// </section>

// {/* <!-- Modal --> */}
// <div class="modal fade" id="certificateModal" tabindex="-1" aria-labelledby="certificateModalLabel" aria-hidden="true">
//   <div class="modal-dialog modal-lg modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="certificateModalLabel">Business Certificate</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body text-center">
//         <img 
//           src="certificate-full.jpg" 
//           alt="Business Certificate Full" 
//           class="img-fluid rounded shadow"
//         />
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   )
// }


// import react from "react"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cert from "../assets/ceretificate.jpg";
 function Credibility() {
  const [show, setShow] = useState(false);

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-3 fw-bold text-dark">Our Certification</h2>
        <p className="text-muted mb-4">
          We are a certified and trusted business, ensuring credibility and compliance in every service we deliver.
        </p>

        {/* Certificate Card */}
        <div className="card mx-auto shadow-sm" style={{ maxWidth: "400px" }}>
          <img
            src={cert}
            className="card-img-top"
            alt="Business Certificate"
            style={{ cursor: "pointer" }}
            onClick={() => setShow(true)}
          />
          <div className="card-body">
            <button className="btn btn-primary">
              View Full Certificate
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {show && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Business Certificate</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShow(false)}
                />
              </div>
              <div className="modal-body text-center">
                <img
                  src={cert}
                  alt="Business Certificate Full"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

 export default Credibility