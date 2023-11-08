import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

function Suscripcion() {
  const { width } = useWindowSize();

  return (
    <>
   {width > 1024 ? <div className='flex justify-center bg-[#1C5A8E] rounded-xl py-[40px] px-[25px] w-full relative'>
        
        <div className='z-8'>            
            <p className='font-mono text-white text-center leading-[40px] text-2xl font-normal'>Subscribete a nuestro boletín para recibir información y ofertas sobre nuestros productos y servicios.</p>
            <div className='mt-12'>
                <input className="rounded-full py-3 pl-8 mr-3 w-full " placeholder="Tu correo" />
                <button className='bg-[#fff] py-4 px-4 w-full rounded-[56px] mt-5 text-[#1C5A8E] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 '>
                <p className='font-bold'>Subscribirme</p> 
                    
                </button>
            </div>
            {/* <div className='mt-10 flex flex-col items-center justify-center'>
                <p className='text-white text-xl'>Alexander Quesada Morales</p>
                <p className='text-white text-xl'>+506 6489-9001</p>
                <p className='text-white text-xl'>aquesada@vikingoz.com</p>
            </div> */}
        </div>
    </div>
    
    :
    
    <div className='flex justify-center bg-[#1C5A8E] rounded-xl py-[72px] relative'>
        <img className='absolute opacity-25 top-0 right-0' src="./assets/Ellipse8.png" alt="ellipse" />
        <div className='z-10'>            
            <p className='font-mono text-white text-center leading-[72px] px-16 text-2xl font-normal'>Subscribete a nuestro boletín para recibir información y ofertas sobre nuestros productos y servicios.</p>
            <div className='flex justify-center mt-12'>
                <input className="rounded-full py-3 pl-8 mr-6 w-[370px] " placeholder="Tu correo" />
                <button className='bg-[#fff] py-4 px-14 rounded-[56px] text-[#1C5A8E] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 '>
                <p className='font-bold'>Subscribirme</p>                     
                </button>
            </div>
            {/* <div className='mt-10 flex flex-col items-center justify-center'>
                <p className='text-white text-xl'>Alexander Quesada Morales</p>
                <p className='text-white text-xl'>+506 6489-9001</p>
                <p className='text-white text-xl'>aquesada@vikingoz.com</p>
            </div> */}
        </div>
    </div>}
    </>
  )
}

export default Suscripcion