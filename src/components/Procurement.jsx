import React from 'react'
import pro from "../assets/videos/proc1.mp4"
import pr1 from "../assets/videos/proc2.mp4"
import pr2 from "../assets/videos/proc3.mp4"
///import { style } from 'framer-motion/client';

const Procurement = () => {
  return (
    <div className='container mt-4 pt-4 mb-4'>
      <h2 className='text-dark text-center mb-2'>Procurement</h2>
      <p>Procurements process in action</p>

      <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* First video */}
          <div className="carousel-item active">
            <div className="video-wrapper">
              <video controls>
                <source src={pro} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Second video */}
          <div className="carousel-item">
            <div className="video-wrapper">
              <video controls>
                <source src={pr1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Third video */}
          <div className="carousel-item">
            <div className="video-wrapper">
              <video controls>
                <source src={pr2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev custom-btn"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next custom-btn"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .video-wrapper {
          height: 300px;   /* 👈 adjust as needed */
          overflow: hidden;
          border-radius: 10px;
        }
        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 👇 style carousel buttons */
        .custom-btn {
          background-color: rgba(169, 4, 4, 0.8); /* semi-transparent black */
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-btn:hover {
          background-color: rgba(169, 4, 4, 0.8); /* darker on hover */
        }

        .custom-btn span {
          filter: invert(1); /* makes icon white if needed */
        }
      `}</style>
    </div>
  );
};

export default Procurement;


