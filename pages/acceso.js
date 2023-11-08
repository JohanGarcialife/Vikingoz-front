import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import BasicLayout from "../layouts/BasicLayout";
import { map } from "lodash";
import { API_URL } from "../utils/constants";

function acceso() {
  const { width } = useWindowSize();
  const [aplicaciones, setAplicaciones] = useState([])
  const [aplicacion, setAplicacion] = useState("Aplicaciones")
  
  function handleSelectChange(event) {
    setAplicacion(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/aplications/?populate=*`);
      const  data  = await res.json();
      setAplicaciones(data.data);
    }
    fetchData()
  }, []);

  return (
    <BasicLayout active="acceso">
      {width > 1024 ? (
        <div
          className="flex h-fit justify-start align-middle  pt-40 pb-16 px-20 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] "
          style={{
            backgroundImage: `url(./assets/presentacion.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex z-10 items-baseline justify-start m-0 w-fit py-4 px-4 rounded-lg ">
            <h2 className="font-extrabold text-transparent text-6xl text-white  tracking-widest	">
              ACCESO PRUEBA
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex h-fit justify-center align-middle -mt-40 pt-40 pb-16 px-5 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] ">
          <div className="flex z-10 items-center justify-center m-0 w-fit py-4 px-4 rounded-lg ">
            <h2 className="font-extrabold text-center text-transparent text-2xl text-white  tracking-widest	">
              ACCESO PRUEBA
            </h2>
          </div>
        </div>
      )}
      {width > 1024 ? (
        <div className="px-60 pt-20 ">
          <div className="flex flex-col justify-center bg-[#1C5A8E] rounded-xl py-[72px] px-10 relative">
            <img
              className="absolute opacity-25  top-0 right-0"
              src="./assets/Ellipse8.png"
              alt="ellipse"
            />
            <div className=" w-full z-10 flex flex-col items-center justify-center ">
              <div className="w-[80%] mb-3 ">
                <h2 className="text-white text-2xl font-bold ">Aplicación</h2>
              </div>
              <select className="rounded-md py-3 px-3 w-[80%] border-solid border-white border-[1px] " label={aplicacion} value={aplicacion}
                    onChange={handleSelectChange}
                    >
            
           
            {map(aplicaciones, (aplicacion) => (
              <option key={aplicacion.attributes.name} value={aplicacion.attributes.name}>{aplicacion.attributes.name}</option>
            ))}
        </select>
            </div>
            <div className="z-10 w-full flex flex-col items-center justify-center mt-4">
              <div className="w-[80%] mb-3">
                <h2 className="text-white text-2xl font-bold">Correo</h2>
              </div>
              <input
                className="rounded-md py-3 pl-8 w-[80%]"
                type="email"
                placeholder="Correo"
              />
              <div className="w-[80%] mb-3 mt-4">
                <h2 className="text-white text-2xl font-bold">Mensaje</h2>
              </div>
              <textarea className="rounded-lg py-3 pl-8 w-[80%]  " />
            </div>
            <div className="z-8 flex justify-center mt-8">
              <button className="bg-[#fff] py-4 px-14 rounded-md text-[#1C5A8E] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                <p className="font-bold">ACCEDER</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-10 pt-20">
          <div className="flex flex-col justify-center bg-[#1C5A8E] rounded-xl py-[72px] px-5 relative">
            <img
              className="absolute opacity-25 top-0 right-0"
              src="./assets/Ellipse8.png"
              alt="ellipse"
            />
            <div className="z-10 w-full flex flex-col items-center justify-center">
            <div className="w-[80%] mb-3 ">
                <h2 className="text-white text-2xl text-center font-bold ">APLICACIÓN</h2>
              </div>
              <select className="rounded-md py-3 px-3 w-[80%] border-solid border-white border-[1px] " label={aplicacion} value={aplicacion}
                    onChange={handleSelectChange}
                    >
            
           
            {map(aplicaciones, (aplicacion) => (
              <option key={aplicacion.attributes.name} value={aplicacion.attributes.name}>{aplicacion.attributes.name}</option>
            ))}
        </select>
              <div className="w-[80%] mb-3 mt-4">
                <h2 className="text-white text-xl text-center font-bold">
                  USUARIO
                </h2>
              </div>
              <input
                className="rounded-md py-3 pl-8 w-[80%] "
                placeholder="Usuario"
              />
            </div>
            <div className="z-8 w-full flex flex-col items-center justify-center mt-4">
              <div className="w-[80%] mb-3">
                <h2 className="text-white text-center text-xl font-bold">
                  CONTRASEÑA
                </h2>
              </div>
              <input
                className="rounded-md py-3 pl-8 w-[80%]"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="z-8 flex justify-center mt-8">
              <button className="bg-[#fff] py-4 px-14 rounded-md text-[#1C5A8E] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                <p className="font-bold">ACCEDER</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </BasicLayout>
  );
}

export default acceso;
