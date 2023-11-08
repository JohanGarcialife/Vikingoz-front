import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import BasicLayout from "../layouts/BasicLayout";
import Link from "next/link";

function aplicaciones() {
  const { width } = useWindowSize();


  return (
    <BasicLayout active="aplicaciones">
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
            <h2 className="font-extrabold text-transparent text-center text-6xl text-white  tracking-widest	">
              APLICACIONES
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex h-fit justify-center align-middle -mt-40 pt-40 pb-16 px-5 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] ">
          <div className="flex z-10 items-baseline justify-start m-0 w-fit py-4 px-4 rounded-lg ">
            <h2 className="font-extrabold text-transparent text-2xl text-white  tracking-widest	">
              APLICACIONES
            </h2>
          </div>
        </div>
      )}

      {width > 1024 ? (
        <div className="py-10 px-20">
          <div class="grid grid-cols-4 gap-4 ">
          <Link href="https://app.vikingoz.com/"> 
            <div className="p-4 flex flex-col justify-center items-center bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] rounded-lg">
              <div className="flex items-center justify-center w-fit py-2 px-4  ">
                <p className="font-mono text-2xl text-white font-extrabold italic tracking-widest">
                  App
                </p>
              </div>
             
            </div>
          </Link>
            <Link href="https://marcas.vikingoz.com/">
            <div className="p-4 flex flex-col justify-center items-center bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] rounded-lg">
              <div className="flex items-center justify-center w-fit py-2 px-4  ">
                <p className="font-mono text-2xl  text-white font-extrabold italic tracking-widest">
                  RRHH
                </p>
              </div>
             
            </div>
               </Link>
            <Link href="https://marcas.vikingoz.com/"> 
            
            <div className="p-4 flex flex-col justify-center items-center bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] rounded-lg">
              <div className="flex items-center justify-center w-fit py-2 px-4  ">
                <p className="font-mono text-2xl text-white font-extrabold italic tracking-widest">
                  TRACKING
                </p>
              </div>
              
            </div>
            </Link>
            <Link href="https://h2o.covicr.com/"> 
            
            <div className="p-4 flex flex-col justify-center items-center bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] rounded-lg">
              
              <div className="flex items-center justify-center w-fit py-2 px-4  ">
                <p className="font-mono text-2xl text-white font-extrabold italic tracking-widest">
                H20
                </p>
              </div>
              
            </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="py-10 px-5 h-fit">
          <div class="grid grid-cols-1">
          <Link href="https://app.vikingoz.com/">

            <div className="h-fit mb-4 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] rounded-lg">
              <div className="flex items-center justify-center w-fit py-2 px-4  ">
                <p className="font-mono text-2xl text-white font-extrabold italic tracking-widest">
                  App
                </p>
              </div>
              
            </div>
          </Link>
             <Link href="https://marcas.vikingoz.com/">
              
            <div className="h-fit mb-4 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] rounded-lg">
              <div className="flex items-center justify-center w-fit py-2 px-4  ">
                <p className="font-mono text-2xl text-white font-extrabold italic tracking-widest">
                  RRHH
                </p>
              </div>
              
            </div>
             </Link>
            <Link href="https://marcas.vikingoz.com/">

            <div className="h-fit mb-4 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] rounded-lg">
              <div className="flex items-center justify-center w-fit py-2 px-4  ">
                <p className="font-mono text-2xl text-white font-extrabold italic tracking-widest">
                  TRACKING
                </p>
              </div>
            </div>
            </Link>
            
             
            <Link href="https://h2o.covicr.com/">
            <div className="h-fit mb-4 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] rounded-lg">
              <div className="flex items-center justify-center w-fit py-2 px-4  ">
                <p className="font-mono text-2xl text-white font-extrabold italic tracking-widest">
                  H2O
                </p>
              </div>
            </div>
              </Link> 
          </div>
        </div>
      )}

      {width < 1024 ? null : (
        <>
          {" "}
          <div
            className="flex justify-around px-[25px] py-[30px] h-[100px] mt-12"
            //data-aos="fade-right"
          >
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/Google-Play-Logo.png"
              alt="Google Play"
            />
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/PUSHER.png"
              alt="PUSHER"
            />
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/MySQL-logo.png"
              alt="MySQL"
            />
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/React_logo.png"
              alt="React"
            />
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/App-store.png"
              alt="App Store"
            />
          </div>
          <div
            className="flex justify-around px-[25px] py-[30px] h-[100px] "
            //data-aos="fade-left"
          >
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/Azure.png"
              alt="Azure"
            />
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/AWS.png"
              alt="AWS"
            />
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/Firebase.png"
              alt="Firebase"
            />
            <img
              className="z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300"
              src="./assets/logos/Mail-Gun.png"
              alt="Mailgun"
            />
            <img className='z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300' src="./assets/logos/Laravel.png" alt="Laravel" />
<img className='z-8 h-full hover:scale-125 transition ease-in-out delay-150 duration-300' src="./assets/logos/React-native.png" alt="React Native" />
          </div>{" "}
        </>
      )}
    </BasicLayout>
  );
}

export default aplicaciones;
