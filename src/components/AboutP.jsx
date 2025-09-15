//import React from 'react'
import React from "react";
import bg from "../assets/bg1.jpg";
import ab from "../assets/business-colleagues-watching-content-laptop.jpg";

const AboutP = () => {
  return (
    <div className="" id="about">
      <div
        className=" container text-white text-center mb-8 "
        style={{
          background: `url(${bg}) no-repeat center center`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div class="row h-100 mt-1 mb-2 overflow-auto align-items-left">
          <div class="col-md-6 mb-4 mt-4 mb-md-0">
            <img
              src={ab}
              alt="Cliffpalm Logistics"
              class="img-fluid rounded shadow d-none d-sm-block"
            />
          </div>
          <div class="col-md-6 h-100 mt-4 mb-2 text-start text-justify">
            <h2 class="mb-3 p-1 text-white">
              About Cliffpalm Logistics & Group of Companies
            </h2>
            <p>
              <strong>OUR MISSION</strong> <br /> <br/>
              The mission of Cliffpalmgroup of companies Ltd is to deliver
              exceptional import and export services, exceeding customer
              expectations through our commitment to quality, reliability, and
              innovation, while ensuring sustainable practices and fostering
              mutually beneficial partnerships." This mission statement focuses
              on:
              <ul>
                <li> Delivering exceptional services</li>
                <li> Exceeding customer expectations </li>
                <li> Quality, reliability, and innovation</li>
                <li> Sustainable practices</li>
                <li>
                  {" "}
                  Mutually beneficial partnerships Cliffpalmgroup's unique
                  identity.{" "}
                </li>
              </ul>
              <strong>Emphasize specific values:</strong> <br />
              <ul>
                <li>
                  "Our mission is to deliver exceptional import and export
                  services, driven by integrity, innovation, and a
                  customer-centric approach.
                </li>

                <li>
                  Highlight unique selling points: "At Cliffpalmgroup, our
                  mission is to provide reliable, efficient, and customized
                  import and export solutions, ensuring customer satisfaction
                  and sustainable growth.
                </li>
                <li>
                  <strong>Focus on impact:</strong> "Cliffpalmgroup's mission
                  is to connect businesses globally, facilitating trade and
                  economic growth through our import and export services, while
                  prioritizing environmental responsibility.
                </li>
              </ul>
            </p>

            <p>
              Under our group is <strong>ESmart Systems</strong> — a technology
              division focused on modern
              <em>
                CCTV surveillance, fiber optics installation, and advanced
                networking infrastructure
              </em>
              . Whether it's for homes, offices, or industrial environments, we
              offer secure and scalable solutions.
            </p>
            <ul class="list-unstyled mt-3 ">
              <li>
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                Reliable Logistics & Import Handling
              </li>
              <li>
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                Advanced Security & CCTV Installations
              </li>
              <li>
                <i class="bi bi-check-circle-fill text-success me-2"></i>Fiber
                Optic & Network Solutions
              </li>
              <li>
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                Client-Focused and Professional
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutP;
