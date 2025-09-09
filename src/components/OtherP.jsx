import React from "react";
import airplain from "../assets/distribution.png";
import securitycam from "../assets/security-camera.png";
import settings from "../assets/settings.png";

// Reusable card component
const ServiceCard = ({ image, title, description, alt }) => (
  
  <div className="col-12 col-sm-6 col-lg-4 d-flex" id="product">
    <div className="card text-center flex-fill h-100">
      <img
        src={image}
        alt={alt}
        className="mx-auto mt-4 img-fluid"
        style={{ width: "100px", height: "150px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const OtherP = () => {
  const services = [
    {
      image: airplain,
      alt: "Logistics",
      title: "Export & Import",
      description:
        "We offer logistics and importation and exportation services to simplify global supply chains.",
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/046/808/388/non_2x/yuan-cny-currency-icon-china-financial-symbol-flat-icons-in-golden-color-graphic-design-vector.jpg",
      alt: "Security",
      title: "RMB Payment",
      description:
        "Secure and convenient payment option in Chinese Yuan (RMB) for smooth cross-border transactions.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHg-sE54DAXyb2h426UQMxEm9ye3VTcv6QDYsKY94YUuTkTBSjLXO2DL21_Jy72juBAPE&usqp=CAU",
      alt: "Sourcing",
      title: "Sourcing",
      description:
        "Identifying and connecting with the best suppliers to meet your business goals.",
    },
        
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcVd10b_dHOQxcoGcbxRBylwXlwNoLwJ_JhMEc6umw3mdiPRk_jHmVmkZgFO1aKpAGi4&usqp=CAU",
      alt: "Procurement",
      title: "Procurement",
      description:
        "Acquiring quality goods and services at the right cost, time, and value.",
    },
    {
      image: securitycam,
      alt: "Security",
      title: "Camera & Surveillance",
      description:
        "We deal in advanced camera systems like CCTV, IP cams, and motion sensors.",
    },
     {
      image: settings,
      alt: "Business",
      title: "Business & Trade",
      description:
        "Supporting business with tools, tech, and expert consultation.",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4">Our Services </h2>
      <p>Seamless logistics solutions for procurement, sourcing, imports, and exports worldwide</p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard {...service} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OtherP;
