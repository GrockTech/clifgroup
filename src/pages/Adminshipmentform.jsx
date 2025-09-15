
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";

function AdminShipmentForm() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const navigate = useNavigate();

  // generate random ID when component mounts
  useEffect(() => {
    const randomId = Math.floor(100000 + Math.random() * 900000);
    setFormData((prev) => ({ ...prev, trackingId: randomId }));
  }, []);

  // fetch shipments list
  useEffect(() => {
    fetch("/api/shipments")
      .then((res) => res.json())
      .then((data) => {
        setShipments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/shipments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server response:", data);
      alert("Details saved");

      // reset form
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

      // refresh shipment list
      setShipments((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error saving shipment:", error.message);
    }
  };

  // update status
  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/shipments/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      const updated = await res.json();

      setShipments((prev) =>
        prev.map((s) => (s._id === id ? { ...s, status: updated.status } : s))
      );
    } catch (err) {
      alert("Error updating status: " + err.message);
    }
  };

  return (
    <div className="text-start container mt-5 pt-5">
      <h3>Add New Shipment</h3>

      {/* Shipment Form */}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Tracking ID</label>
          <input
            type="text"
            className="form-control"
            name="trackingId"
            value={formData.trackingId}
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

        <button type="submit" className="btn btn-success mt-3">
          Save Shipment
        </button>

        <button
          type="button"
          className="btn btn-primary mt-3 ms-2"
          onClick={() => navigate("/showlist")}
        >
          <CiViewList /> View Shipments
        </button>
      </form>

      {/* Shipments Table */}
      <div className="container mt-5 pt-5">
        <Link to="/dashboard" className="nav-link">
          <div>
            <IoChevronBackCircle className="me-2" />
            Get Back
          </div>
        </Link>
        <br />
        <h3>All Shipments</h3>

        {loading ? (
          <p>Loading shipments...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment) => (
                <tr key={shipment._id}>
                  <td>{shipment.trackingId}</td>
                  <td>{shipment.senderName}</td>
                  <td>{shipment.receiverName}</td>
                  <td>{shipment.origin}</td>
                  <td>{shipment.destination}</td>
                  <td>{shipment.status}</td>
                  <td>
                    <select
                      value={shipment.status}
                      onChange={(e) =>
                        updateStatus(shipment._id, e.target.value)
                      }
                      className="form-select"
                    >
                      <option>Pending</option>
                      <option>In Transit</option>
                      <option>Delivered</option>
                      <option>Delayed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminShipmentForm;















