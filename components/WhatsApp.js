import React from 'react'
import { FaWhatsapp} from "react-icons/fa";

function WhatsApp() {
  return (
    <div>
    <a
      href="/"
      className="m-0 fixed w-[55px] h-[55px] leading-[55px] bottom-[30px] right-[30px] bg-[#0df053] text-white rounded-[50px] flex items-center justify-center text-[40px] shadow-[0_1px_10px_rgba(0,0,0,0.3)] z-40	p-0"
      target="_blank"
    >
      <FaWhatsapp className='m-0 cursor-pointer' />
    </a>
  </div>
  )
}

export default WhatsApp