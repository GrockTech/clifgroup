import React from "react";

const Location = () => {
  return (
    <div>
      <h2 className="text-black mt-4">Our Location</h2>
      <p className="text-danger">Locate our office in the Map below</p>
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          title="Clifpalm Logistrics and Group of Company"
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d63532.24890419316!2d-0.2027361!3d5.6016122!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0xfdf9b374294c3eb%3A0xf75fa0da67ec09cb!2sAchimota%20old%20overhead%2C%20BLOCK%201%2C%20Accra!3m2!1d5.6015282!2d-0.16153599999999999!5e0!3m2!1sen!2sgh!4v1752494610703!5m2!1sen!2sgh"
                  width="100%"
          height="100%"
          style={{ border: 2 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </div>
  );
};

export default Location;
