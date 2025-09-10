import React, { useState, useEffect } from "react";
 import {  Link } from "react-router-dom";
// const TrackingNumber = 0;
import { CiViewList } from "react-icons/ci";

function AdminShipmentForm() {


  const [formData, setFormData] = useState({
    trackingId: "",
    senderName: "",
    receiverName: "",
    origin: "",
    destination: "",
    status: "Pending",
    currentLocation: "",
    shipmentDate: "",
    deliveryDate: "",
    weight: "",
    remarks: "",
  });
  
   useEffect(() => {
    const randomId = Math.floor(100000 + Math.random() * 900000); // 6-digit number
    setFormData((prev) => ({ ...prev, trackingId: randomId }));
  }, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("api/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
         formData
),

    });

    const data = await res.json();
    console.log("Server response:", data);
    alert("details saved");

     setFormData({
      trackingId: "",
      senderName: "",
      receiverName: "",
      origin: "",
      destination: "",
      currentLocation: "",
      shipmentDate: "",
      deliveryDate: "",
      weight: "",
      status: "Pending",
      remarks: "",
    });

  } catch (error) {
    console.error("Error saving shipment:", error.message);
  }
};

  return (
    <div className="container mt-5 pt-5 ">
      <h3>Add New Shipment</h3>
      <form onSubmit={handleSubmit} className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Tracking ID</label>
          <input
            type="text"
            className="form-control"
            name="trackingId"
            value={formData.trackingId}
           // value={TrackingNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Sender Name</label>
          <input
            type="text"
            className="form-control"
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Receiver Name</label>
          <input
            type="text"
            className="form-control"
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Origin</label>
          <input
            type="text"
            className="form-control"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Destination</label>
          <input
            type="text"
            className="form-control"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Current Location</label>
          <input
            type="text"
            className="form-control"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Shipment Date</label>
          <input
            type="date"
            className="form-control"
            name="shipmentDate"
            value={formData.shipmentDate}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Expected Delivery Date</label>
          <input
            type="date"
            className="form-control"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Transit</option>
            <option>Delivered</option>
            <option>Delayed</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">Remarks</label>
          <textarea
            className="form-control"
            rows="3"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success">Save Shipment</button>
        </div>
      </form>


       <Link className="nav-link" to="/listshipments">
       <div>
        <p>  <CiViewList /> View Shipments</p> 
       </div>
        
      </Link> 
    </div>
  );
}

export default AdminShipmentForm;
