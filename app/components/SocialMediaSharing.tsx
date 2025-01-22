// components/SocialMediaSharing.tsx

import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';


const SocialMediaSharing = () => {
  return (
    <div className="flex gap-[-5px] flex-wrap ">
      {/* Facebook Link */}
      <a href="https://wa.me/03113199283" target="_blank" rel="noopener noreferrer">
        <button className="p-3 text-[#1877F2] focus:ring-opacity-50">
          <FaFacebook size={25} />
        </button>
      </a>

      {/* Twitter Link */}
      <a href="/" target="_blank" rel="noopener noreferrer">
        <button className="p-3 text-[#1DA1F2] focus:ring-opacity-50">
          <FaTwitter size={25} />
        </button>
      </a>

      {/* WhatsApp Link */}
      <a href="https://wa.me/03113199283" target="_blank" rel="noopener noreferrer">
  <button className="p-3 text-[#25D366] focus:ring-opacity-50">
    <FaWhatsapp size={25} />
  </button>
</a>


      {/* LinkedIn Link */}
      <a href="/" target="_blank" rel="noopener noreferrer">
        <button className="p-3 text-[#0077B5] focus:ring-opacity-50">
          <FaLinkedin size={25} />
        </button>
      </a>

      {/* Instagram Link */}
      <a href="https://www.instagram.com/sadiakhan9433/?hl=en" target="_blank" rel="noopener noreferrer">
        <button className="p-3 text-[#E4405F] focus:ring-opacity-50">
          <FaInstagram size={25} />
        </button>
      </a>
    </div>
  );
};

export default SocialMediaSharing;
