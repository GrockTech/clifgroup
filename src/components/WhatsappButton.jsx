import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/233597381447" // 👈 replace with your client's number (in intl format, no + or leading 0)
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp size={32} />
    </a>
  );
  
};

export default WhatsAppButton;
