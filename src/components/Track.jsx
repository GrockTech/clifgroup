import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Track() {
  const [show, setShow] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const [result, setResult] = useState("");

  // const handleTrack = () => {
  //   // Mock shipment lookup
  //   if (trackingCode === "12345") {
  //     setResult("✅ Your package is in transit 🚚");
  //   } else {
  //     setResult("❌ Tracking code not found");
  //   }
  // };



  const handleTrack = async () => {
  try {
    const res = await fetch(`http://localhost:5000/api/shipments/tracking/${trackingCode}`);
    if (!res.ok) {
      setResult("❌ Tracking code not found");
      return;
    }
    const shipment = await res.json();

    setResult(`
      ✅ Shipment Found
      Status: ${shipment.status}
      Origin: ${shipment.origin}
      Destination: ${shipment.destination}
      Current Location: ${shipment.currentLocation || "N/A"}
      Expected Delivery: ${shipment.deliveryDate || "N/A"}
    `);
  } catch (error) {
    setResult("⚠️ Error fetching shipment details");
    console.error(error);
  }
};

  return (
    <div className="row p-4">
      <div>
        {/* Track Shipment Button */}
        <div className="btn mb-2">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            Track Shipment
          </button>
        </div>

        {/* Get an Estimate Button */}
        <div className="btn">
          <button className="btn btn-outline-secondary">
            Get an Estimate
          </button>
        </div>
      </div>

      {/* Modal */}
      {show && (
        <div className="modal show d-block mt-4 pt-4" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Track Shipment</h5>
                <button
                  type="button"
                  className="close btn"
                  onClick={() => setShow(false)}
                >
                  <span>&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter tracking code"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                />
                <button className="btn btn-success" onClick={handleTrack}>
                  Submit
                </button>

                {/* {result && (
                  <p className="mt-3 fw-bold">{result}</p>
                )} 
                 */}
                 {result && typeof result === "object" ? (
  <div className="mt-3">
    <p><strong>Status:</strong> {result.status}</p>
    <p><strong>Origin:</strong> {result.origin}</p>
    <p><strong>Destination:</strong> {result.destination}</p>
    <p><strong>Current Location:</strong> {result.currentLocation || "N/A"}</p>
    <p><strong>Expected Delivery:</strong> {result.deliveryDate || "N/A"}</p>
  </div>
) : (
  result && <p className="mt-3 fw-bold">{result}</p>
)}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShow(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


