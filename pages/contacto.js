import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import BasicLayout from "../layouts/BasicLayout";

function contacto() {
  const { width } = useWindowSize();

  return (
    <BasicLayout active="contacto">
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
              CONTÁCTANOS
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex h-fit justify-center align-middle -mt-40 pt-40 pb-16 px-5 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] ">
          <div className="flex z-10 items-baseline justify-start m-0 w-fit py-4 px-4 rounded-lg ">
            <h2 className="font-extrabold text-transparent text-2xl text-white  tracking-widest	">
              CONTÁCTANOS
            </h2>
          </div>
        </div>
      )}

      {width > 1024 ? (
        <>
          <div className="px-60 pt-20">
            <div className="flex flex-col justify-center bg-[#1C5A8E] rounded-xl py-16 px-10 relative">
              <img
                className="absolute opacity-25 z-10 top-0 right-0"
                src="./assets/Ellipse8.png"
                alt="ellipse"
              />
              <div className="z-20 w-full flex  items-center justify-center mb-4">
                <div className="z-20 w-[80%] flex  items-center justify-center mb-4">
                  <div className="z-20 w-full flex flex-col items-center justify-center">
                    <div className="w-[80%] mb-3">
                      <h2 className="text-white text-2xl font-bold">NOMBRE</h2>
                    </div>
                    <input
                      className="rounded-md py-3 pl-8 w-[90%] "
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="z-20 w-full flex flex-col items-center justify-center">
                    <div className="w-[80%] mb-3">
                      <h2 className="text-white text-2xl font-bold">CORREO</h2>
                    </div>
                    <input
                      className="rounded-md py-3 pl-8 w-[90%] "
                      type="email"
                      placeholder="Correo"
                    />
                  </div>
                  <div className="z-20 w-full flex flex-col items-center justify-center">
                    <div className="w-[80%] mb-3">
                      <h2 className="text-white text-2xl font-bold">
                        TELÉFONO
                      </h2>
                    </div>
                    <input
                      className="rounded-md py-3 pl-8 w-[90%] "
                      type="number"
                      placeholder="Telefono"
                    />
                  </div>
                </div>
              </div>
              <div className="z-20 w-full flex flex-col items-center justify-center">
                <div className="w-[80%] mb-3">
                  <h2 className="text-white text-2xl font-bold">ASUNTO</h2>
                </div>
                <input
                  className="rounded-md py-3 pl-8 w-[80%] "
                  placeholder="Asunto"
                />
              </div>
              <div className="z-20 w-full flex flex-col items-center justify-center mt-4">
                <div className="w-[80%] mb-3">
                  <h2 className="text-white text-2xl font-bold">MENSAJE</h2>
                </div>
                <textarea className="rounded-lg py-3 pl-8 w-[80%]  " />
              </div>
              <div className="z-20 flex justify-center mt-8">
                <button className="bg-[#fff] py-4 px-14 rounded-md text-[#1C5A8E] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <p className="font-bold">ACCEDER</p>
                </button>
              </div>
            </div>
          </div>
          <div className="px-24 pt-20 pb-10 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center m-0 w-fit py-4 px-4 rounded-lg bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] ">
              <h2 className="text-white text-2xl font-bold">
                Otra manera de contactarnos
              </h2>
            </div>

            <div className="flex justify-around w-full mt-10">
              <div className="w-[40%] px-16 py-10 rounded-2xl bg-gradient-to-b from-[#079BD8] to-black">
                <div className="flex justify-center mb-5">
                  <img
                    className="h-20"
                    src="./assets/image21.png"
                    alt="Ubicacion"
                  />
                </div>
                <div className="mb-5">
                  <p className="text-white text-2xl text-center font-bold">
                    Costa Rica
                  </p>
                  <p className="text-white text-2xl text-center">
                    +506 6489 9001
                  </p>
                </div>
                <div>
                  <p className="text-white text-2xl text-center font-bold">
                    Colombia
                  </p>
                  <p className="text-white text-2xl text-center">
                    +57 310 510 6270
                  </p>
                </div>
              </div>
              <div className="w-[40%] px-16 py-10 rounded-2xl bg-gradient-to-b from-[#079BD8] to-black">
                <div className="flex justify-center mb-5">
                  <img className="h-20" src="./assets/image20.png" alt="Mail" />
                </div>
                <div className="mb-5">
                  <p className="text-white text-2xl text-center font-bold">
                    Escríbenos un email
                  </p>
                  <p className="text-white text-2xl text-center font-bold">
                    Costa Rica
                  </p>
                  <p className="text-white text-2xl text-center">
                    aquesada@vikingozcr.com
                  </p>
                </div>
                <div>
                  <p className="text-white text-2xl text-center font-bold">
                    Colombia
                  </p>
                  <p className="text-white text-2xl text-center">
                    mgalvez@vikingozcr.com
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="px-5 pt-20">
            <div className="flex flex-col justify-center bg-[#1C5A8E] rounded-xl py-16 px-5 relative">
              <div className="z-8 w-full flex items-center justify-center mb-4">
                <div className="z-8 w-[80%]  mb-4">
                  <div className="z-8 w-full flex flex-col items-center justify-center">
                    <div className="w-[80%] mb-3">
                      <h2 className="text-white text-sm font-bold">NOMBRE</h2>
                    </div>
                    <input
                      className="rounded-md py-3 px-4 mb-4 w-[90%] "
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="z-8 w-full flex flex-col items-center justify-center">
                    <div className="w-[80%] mb-3">
                      <h2 className="text-white text-sm font-bold">CORREO</h2>
                    </div>
                    <input
                      className="rounded-md py-3 px-4 mb-4 w-[90%] "
                      type="email"
                      placeholder="Correo"
                    />
                  </div>
                  <div className="z-8 w-md flex flex-col items-center justify-center">
                    <div className="w-[80%] mb-3">
                      <h2 className="text-white text-sm font-bold">TELÉFONO</h2>
                    </div>
                    <input
                      className="rounded-md py-3 px-4 mb-4 w-[90%] "
                      type="number"
                      placeholder="Telefono"
                    />
                  </div>
                </div>
              </div>
              <div className="z-8 w-full flex flex-col items-center justify-center">
                <div className="w-[80%] mb-3">
                  <h2 className="text-white text-lg font-bold">ASUNTO</h2>
                </div>
                <input
                  className="rounded-md py-3 pl-8 w-[80%] "
                  placeholder="Asunto"
                />
              </div>
              <div className="z-8 w-full flex flex-col items-center justify-center mt-4">
                <div className="w-[80%] mb-3">
                  <h2 className="text-white text-lg font-bold">MENSAJE</h2>
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

          <div className="px-5 pt-20 pb-10 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center m-0 w-fit py-4 px-4 rounded-lg bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] ">
              <h2 className="text-white text-2xl text-center font-bold">
                Otra manera de contactarnos
              </h2>
            </div>

            <div className="flex flex-col justify-between w-full mt-10">
              <div className="w-full mb-5 px-4 py-10 rounded-2xl bg-gradient-to-b from-[#079BD8] to-black">
                <div className="flex justify-center mb-5">
                  <img
                    className="h-20"
                    src="./assets/image21.png"
                    alt="Ubicacion"
                  />
                </div>
                <div className="mb-5">
                  <p className="text-white text-center font-bold">Costa Rica</p>
                  <p className="text-white text-center">+506 6489 9001</p>
                </div>
                <div>
                  <p className="text-white text-center font-bold">Colombia</p>
                  <p className="text-white text-center">+57 310 510 6270</p>
                </div>
              </div>
              <div className="w-full  px-4 py-10 rounded-2xl bg-gradient-to-b from-[#079BD8] to-black">
                <div className="flex justify-center mb-5">
                  <img className="h-20" src="./assets/image20.png" alt="Mail" />
                </div>
                <div className="mb-5">
                  <p className="text-white text-center font-bold">
                    Escríbenos un email
                  </p>
                  <p className="text-white text-center font-bold">Costa Rica</p>
                  <p className="text-white text-[12px] text-center">
                    aquesada@vikingozcr.com
                  </p>
                </div>
                <div>
                  <p className="text-white text-center font-bold">Colombia</p>
                  <p className="text-white text-[12px] text-center">
                    mgalvez@vikingozcr.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </BasicLayout>
  );
}

export default contacto;
