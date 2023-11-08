import Link from 'next/link';
import React, { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import BasicLayout from "../layouts/BasicLayout"

function distribucion() {
  const { width } = useWindowSize();
  const [map, setMap] = useState("Costa Rica")

  function handleSelectChange(event) {
    setMap(event.target.value);
  }

  
  return (
    <BasicLayout active="distribucion">
      {width > 1024 ? <div className='flex h-fit justify-start align-middle  pt-40 pb-16 px-20 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] '
       style={{
        backgroundImage: `url(./assets/presentacion.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      
        <div className='flex z-10 items-baseline justify-start m-0 w-fit py-4 px-4 rounded-lg '>
          <h2 className="font-extrabold text-transparent text-6xl text-white  tracking-widest	">DISTRIBUCIÓN</h2>
        </div>
        
      </div> :
        <div className='flex h-fit justify-center align-middle -mt-40 pt-40 pb-16 px-5 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] '>
       
          <div className='flex z-10 items-baseline justify-start m-0 w-fit py-4 px-4 rounded-lg '>
            <h2 className="font-extrabold text-transparent text-2xl text-white  tracking-widest	">DISTRIBUCIÓN</h2>
          </div>
          
        </div> 
      }
     
      {width >= 1024 ? < div className='flex justify-around px-10 py-5 mx-24 mt-20 rounded-md bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] '> 
        <div>
        
        {map === "Costa Rica" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62879.67874087047!2d-84.14836482611483!3d9.93562837660858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15c5%3A0xe6746a6a9f11b882!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses-419!2sve!4v1668441342985!5m2!1ses-419!2sve&zoom=20" width={width/2.5} height="450" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {map === "Mexico" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481726.8875365666!2d-99.42381763554063!3d19.391166838068937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2zQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses-419!2sve!4v1669728517886!5m2!1ses-419!2sve" width={width/2.5} height="450" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {map === "Colombia" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280650613!2d-74.24789655790045!3d4.64862594373708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sve!4v1669728615868!5m2!1ses-419!2sve" width={width/2.5} height="450" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {map === "Guatemala" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123536.65268264312!2d-90.56260167608762!3d14.626375696380359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a180655c3345%3A0x4a72c7815b867b25!2sCdad.%20de%20Guatemala%2C%20Guatemala!5e0!3m2!1ses-419!2sve!4v1669729533495!5m2!1ses-419!2sve" width={width/2.5} height="450" style={{border: 0, borderRadius: 8}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {map === "Belice" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60964.071770165734!2d-88.8001093065249!3d17.254918738140955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dd567e130a313%3A0x5a44b6ba5fe7f20!2sBelmop%C3%A1n%2C%20Belice!5e0!3m2!1ses-419!2sve!4v1669729912759!5m2!1ses-419!2sve" width={width/2.5} height="450" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {map === "Honduras" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123836.27717382884!2d-87.34026602957424!3d14.084044278905294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2babf743d51%3A0x68cf2238206ac9d3!2sTegucigalpa%2C%20Honduras!5e0!3m2!1ses-419!2sve!4v1669730056114!5m2!1ses-419!2sve" width={width/2.5} height="450" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {map === "El Salvador" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62023.09833001292!2d-89.25027151780837!3d13.691559132569715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633067b411775d%3A0x1f75978893fb5c96!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1ses-419!2sve!4v1669730128336!5m2!1ses-419!2sve" width={width/2.5} height="450" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {map === "Nicaragua" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.698166186!2d-86.32850185308138!3d12.097818084118526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua%2C%20Nicaragua!5e0!3m2!1ses-419!2sve!4v1669730190156!5m2!1ses-419!2sve" width={width/2.5} height="450" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {map === "Panamá" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252147.37519894986!2d-79.59322673786367!3d9.08172755941858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbe80363%3A0xaba25df1f042c10e!2zUGFuYW3DoQ!5e0!3m2!1ses-419!2sve!4v1669730262497!5m2!1ses-419!2sve" width={width/2.5} height="450" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}

        </div>
        <div className='flex flex-col justify-center w-[50%] px-5 items-center	'>
       
        <select className="rounded-md py-3 px-3 w-full border-solid border-white border-[1px] mb-2" label={map} value={map}
                    onChange={handleSelectChange}>
            <option value="Belice">Belice</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica" >Costa Rica</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Honduras">Honduras</option>
            <option value="Mexico">Mexico</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Panamá">Panamá</option>
        </select>
        {/* <textarea disabled className='rounded-xl py-3 pl-8 w-full min-h-[200px] border-[1px] border-solid border-white bg-white '></textarea> */}
        <div className='h-fit rounded-md p-3 w-full  border-[1px] border-solid border-white bg-white '>
        {map === "Costa Rica"  && <Link href="https://electromaxcr.com/" target="_blank">
          
        <img className='z-9 m-auto w-full pointer' src="./assets/costaRica.jpg" alt="Costa Rica" />
        
        </Link>}
      </div>
        </div>
      </div> 
      
      :
      
       
      <div className='flex flex-col justify-around px-2 py-5 mx-5 mt-5 rounded-xl bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] '> 
      <div className='flex justify-center mb-5'>
      
      {map === "Costa Rica"  && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62879.67874087047!2d-84.14836482611483!3d9.93562837660858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15c5%3A0xe6746a6a9f11b882!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses-419!2sve!4v1675090252520!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {map === "Belice" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60964.071770165734!2d-88.8001093065249!3d17.254918738140955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dd567e130a313%3A0x5a44b6ba5fe7f20!2sBelmop%C3%A1n%2C%20Belice!5e0!3m2!1ses-419!2sve!4v1669729912759!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {map === "Mexico" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481726.8875365666!2d-99.42381763554063!3d19.391166838068937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2zQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses-419!2sve!4v1669728517886!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {map === "Colombia" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280650613!2d-74.24789655790045!3d4.64862594373708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sve!4v1669728615868!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {map === "Guatemala" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123536.65268264312!2d-90.56260167608762!3d14.626375696380359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a180655c3345%3A0x4a72c7815b867b25!2sCdad.%20de%20Guatemala%2C%20Guatemala!5e0!3m2!1ses-419!2sve!4v1669729533495!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: 8}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {map === "Honduras" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123836.27717382884!2d-87.34026602957424!3d14.084044278905294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2babf743d51%3A0x68cf2238206ac9d3!2sTegucigalpa%2C%20Honduras!5e0!3m2!1ses-419!2sve!4v1669730056114!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {map === "El Salvador" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62023.09833001292!2d-89.25027151780837!3d13.691559132569715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633067b411775d%3A0x1f75978893fb5c96!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1ses-419!2sve!4v1669730128336!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {map === "Nicaragua" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.698166186!2d-86.32850185308138!3d12.097818084118526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua%2C%20Nicaragua!5e0!3m2!1ses-419!2sve!4v1669730190156!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {map === "Panamá" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252147.37519894986!2d-79.59322673786367!3d9.08172755941858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbe80363%3A0xaba25df1f042c10e!2zUGFuYW3DoQ!5e0!3m2!1ses-419!2sve!4v1669730262497!5m2!1ses-419!2sve" width={width - 60} height="220" style={{border: 0, borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}

      </div>
      <div className='flex flex-col justify-center w-[100%] px-5 items-center	'>
     
      <select className="rounded-md py-3 px-3 w-full border-solid border-white border-[1px] mb-2" label={map} value={map}
                  onChange={handleSelectChange}>
            <option value="Belice">Belice</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica" >Costa Rica</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Honduras">Honduras</option>
            <option value="Mexico">Mexico</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Panamá">Panamá</option>
      </select>
      {/* <textarea disabled className='rounded-xl py-3 pl-8 w-full min-h-[200px] border-[1px] border-solid border-white bg-white '></textarea> */}
      <div className='h-fit  rounded-md p-3 w-full  border-[1px] border-solid border-white bg-white '>
        {map === "Costa Rica"  && 
        <Link href="https://electromaxcr.com/" target="_blank">
          
        <img className='z-9 m-auto w-full pointer' src="./assets/costaRica-vertical.jpg" alt="Costa Rica" />
        
        </Link>}
      </div>
      </div>
    </div>
      }
    </BasicLayout>
  )
}

export default distribucion