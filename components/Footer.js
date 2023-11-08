import React from 'react'
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Suscripcion from './Suscripcion';
import useWindowSize from '../hooks/useWindowSize';
import Link from 'next/link';

function Footer() {
  const { width } = useWindowSize();
  
  return (
    <>
    {width > 1024 ? <>
    <div className='bg-white p-[25px] '>
      {/* <div className='flex justify-center mb-20'>
        <Suscripcion />
      </div> */}
      <div className='flex justify-around'>
          <div className='items-center'>
          <img className='h-24 cursor-pointer mb-5' src="./assets/Vikingoz-INTERNACIONAL.png" alt="logo" />
          
          </div>
          <div className='flex flex-col justify-between text-right font-mono'>
            <p className='cursor-pointer'>Acerca de Nosotros</p>
            <Link href="/aplicaciones">

            <p className='cursor-pointer'>Servicios</p>
            </Link>
            <p className='cursor-pointer'>Términos y Condiciones</p>
             <Link href="/contacto">

            <p className='cursor-pointer'>Contáctenos</p>
             </Link>
          </div>
      </div>
    </div>
    <div className='bg-[#0A2640] py-3 text-center'>
      <p className="text-white font-mono text-md mb-3">Vikingos Tracking derechos reservados 2022</p>
      <p className="text-white font-mono text-xs">Desarrollado por Creative Feel Dev.</p>
      </div>
      
    </> :
      
      <>
    <div className='bg-white p-24 pb-10 '>
      {/* <div className='flex justify-center mb-20'>
        <Suscripcion />
      </div> */}
      <div className='flex justify-around'>
          <div className='items-center'>
          <img className='h-40 cursor-pointer mb-5' src="./assets/Vikingoz-INTERNACIONAL.png" alt="logo" />
          
          </div>
          <div className='flex flex-col text-left mr-20 font-mono'>
            <p className='cursor-pointer mb-4'>Acerca de Nosotros</p>
            <Link href="/aplicaciones">

            <p className='cursor-pointer mb-4'>Servicios</p>
            </Link>
            <p className='cursor-pointer mb-4'>Términos y Condiciones</p>
            <Link href="/contacto">

            <p className='cursor-pointer mb-4'>Contáctenos</p>
            </Link>
          </div>
      </div>
    </div>
    <div className='bg-[#0A2640] py-3 text-center'>
      <p className="text-white font-mono text-lg">Vikingos Internacional derechos reservados 2022</p>
      <p className="text-white font-mono text-xs">Desarrollado por Creative Feel Dev.</p>
      </div>
      
    </>
      }
      </>
  )
}

export default Footer