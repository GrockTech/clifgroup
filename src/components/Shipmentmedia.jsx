//import pic from "../../public/images/pic1.jpeg";
//import pic from "../assets/images/pic1.jpeg";
//import pic1 from "../assets/images/pic2.jpeg";
import vid1 from "../assets/videos/corect1.mp4";
//import vid2 from "../assets/videos/three.mp4";
import vid3 from "../assets/videos/vid3.mp4";
//import vid4 from '../assets/videos/four.mp4'
import cars from "../assets/videos/cars.mp4"
import ship from "../assets/videos/shiping.mp4"

export default function ShipmentMedia() {
  return (
    <div className="container my-5">
  <h2 className="text-center mb-4 text-dark">Our Shipping in Action </h2>

  <div className="row">
    {/* Left Column */}
    <div className="col-md-6">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-100 rounded shadow mb-3"
        style={{ height: "300px", objectFit: "cover" }}
      >
        <source src={cars} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-100 rounded shadow mb-3"
        style={{ height: "300px", objectFit: "cover" }}
      >
        <source src={ship} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Right Column */}
    <div className="col-md-6">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-100 rounded shadow mb-3"
        style={{ height: "300px", objectFit: "cover" }}
      >
        <source src={vid3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-100 rounded shadow mb-3"
        style={{ height: "300px", objectFit: "cover" }}
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>


  );
}
