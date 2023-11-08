import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import { map } from "lodash";

function Dashboard(props) {
  const { tecnologias1, tecnologias2 } = props;
  const { width } = useWindowSize();


  return (
    <>
      {width > 1024 ? (
        <div className="bg-gradient-to-r from-[#079BD8] to-[#1C5A8E] py-20 px-5 ">
          <p className="font-body text-white font-bold mb-10 text-center leading-[72px] text-3xl">
            Datos generales de uso
          </p>

          <div className="w-auto">
            <div className="grid grid-rows-3 grid-cols-1  sm:gap-4 gap-2 content-center mb-10 justify-center">
              <div className="text-center bg-white text-[#0A2640] w-50%  px-6 py-4 rounded-xl	hover:bg-[#0A2640] hover:text-white">
                <p className="font-bold text-xl">Cuentas registradas</p>
                <p className="font-bold text-5xl sm:text-5xl">12</p>
              </div>
              <div className="text-center bg-white text-[#0A2640]  px-6 py-4 rounded-xl	hover:bg-[#0A2640] hover:text-white">
                <p className="font-bold text-xl">Usuarios creados</p>
                <p className="font-bold text-5xl sm:text-5xl">46</p>
              </div>
              <div className="text-center bg-white text-[#0A2640]  px-6 py-4 rounded-xl	hover:bg-[#0A2640] hover:text-white">
                <p className="font-bold text-xl ">Lecturas realizadas</p>
                <p className="font-bold text-5xl sm:text-5xl">25154</p>
              </div>

              <div className="text-center bg-white text-[#0A2640]  px-6 py-4 rounded-xl	hover:bg-[#0A2640] hover:text-white">
                <p className="font-bold text-xl">Clientes registrados</p>
                <p className="font-bold text-5xl sm:text-5xl">43</p>
              </div>
              <div className="text-center bg-white text-[#0A2640]  px-6 py-4 rounded-xl	hover:bg-[#0A2640] hover:text-white">
                <p className="font-bold text-xl">Marcas creadas</p>
                <p className="font-bold text-5xl ">108</p>
              </div>
            </div>

            <div className="mt-10 w-full flex align-center justify-center">
              <img className="z-8" src="./assets/servers.png" alt="servers" />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-[#079BD8] to-[#1C5A8E] py-[72px] px-24">
          <p className="font-body text-white font-bold mb-10 text-center leading-[72px] text-5xl">
            Datos generales de uso
          </p>

          <div className="flex justify-between">
            <div className="grid grid-rows-3 grid-flow-col gap-6 justify-center w-1/2 mr-3">
              <div
                className="flex flex-col justify-center items-center text-center bg-white text-[#0A2640] px-6 py-6 rounded-xl	hover:bg-[#0A2640] hover:text-white"
                data-aos="flip-left"
              >
                <p className="font-bold text-1xl">Cuentas registradas</p>
                <p className="font-bold text-5xl">12</p>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center bg-white text-[#0A2640] px-6 py-6 rounded-xl hover:bg-[#0A2640] hover:text-white"
                data-aos="flip-left"
              >
                <p className="font-bold text-1xl">Usuarios creados</p>
                <p className="font-bold text-5xl">46</p>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center bg-white text-[#0A2640] px-6 py-6 rounded-xl	hover:bg-[#0A2640] hover:text-white"
                data-aos="flip-left"
              >
                <p className="font-bold text-1xl">Lecturas realizadas</p>
                <p className="font-bold text-5xl">25154</p>
              </div>

              <div
                className="flex flex-col justify-center items-center text-center bg-white text-[#0A2640] px-6 py-6 rounded-xl	hover:bg-[#0A2640] hover:text-white"
                data-aos="flip-left"
              >
                <p className="font-bold text-1xl">Clientes registrados</p>
                <p className="font-bold text-5xl">43</p>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center bg-white text-[#0A2640] px-6 py-6 rounded-xl	hover:bg-[#0A2640] hover:text-white"
                data-aos="flip-left"
              >
                <p className="font-bold text-1xl">Marcas creadas</p>
                <p className="font-bold text-5xl">108</p>
              </div>
            </div>
            <div className="w-1/2 ml-3">
              <img className="z-8 " src="./assets/servers.png" alt="servers" />
            </div>
          </div>
        </div>
      )}

      {width > 1024 ? (
        <>
          {" "}
          <div className="flex justify-between items-center px-5  h-10 mt-5">
          {map(tecnologias1?.data, (tecnologia) => (
             
             <img
               className="z-8 h-4 hover:scale-125 transition ease-in-out delay-150 duration-300"
               src={tecnologia?.attributes?.url}
               alt={tecnologia?.attributes?.name}
             />
             ))}
           
          </div>
          <div className="flex justify-between items-center px-5  h-10 ">
          {map(tecnologias2?.data, (tecnologia) => (
             
             <img
               className="z-8 h-4 hover:scale-125 transition ease-in-out delay-150 duration-300"
               src={tecnologia?.attributes?.url}
               alt={tecnologia?.attributes?.name}
             />
             ))}
          </div>{" "}
        </>
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <div
            className="flex justify-around px-[25px] py-[30px] h-[100px] w-[85%] mt-12"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            {map(tecnologias1?.data, (tecnologia) => (
             
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src={tecnologia?.attributes?.url}
              alt={tecnologia?.attributes?.name}
            />
            ))}
            
          </div>
          <div
            className="flex justify-around px-[25px] py-[30px] h-[100px] w-[85%] "
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="500"
          >
           {map(tecnologias2?.data, (tecnologia) => (
             
             <img
               className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
               src={tecnologia?.attributes?.url}
               alt={tecnologia?.attributes?.name}
             />
             ))}
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default Dashboard;
