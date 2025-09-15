import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";

function ShowshipmentList() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch shipments
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

  // Update status
  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/shipments/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      const updated = await res.json();

      // update local state
      setShipments((prev) =>
        prev.map((s) => (s._id === id ? { ...s, status: updated.status } : s))
      );
    } catch (err) {
      alert("Error updating status: " + err.message);
    }
  };

  if (loading) return <p>Loading shipments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5 pt-5">
      <Link to="/dashboard" className="nav-link">
        <div>
          <IoChevronBackCircle className="me-2" />
          Get Back
        </div>
      </Link>
      <br />
      <h3>All Shipments</h3>
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
                  onChange={(e) => updateStatus(shipment._id, e.target.value)}
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
    </div>
  );
}

export default ShowshipmentList;
