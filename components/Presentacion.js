import React from "react";
import useWindowSize from "../hooks/useWindowSize";

function Presentacion(props) {
  const { home} = props;
  const { width } = useWindowSize();
  return (
<>
   {home !== undefined && <div
      className="px-5 bg-[#1C5A8E] h-screen  pt-40 pb-6"
      style={{
        backgroundImage: `url(${home.attributes.banner?.data?.attributes.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh"
      }}
    >
      <div>

        {width < 1024 ? (
          <div className="">
            <div className="z-20">
              <div className="w-auto font-mono  text-white">
                <p className="mb-5 tracking-wide 	whitespace-break-spaces	">{home.attributes.presentacion}</p>
                <p className="tracking-wide text-justify	">{home.attributes.presentacion2}</p>
                
              </div>
            </div>
          </div>
        ) : (
          <div className="z-20 flex justify-center items-center">
            <div className="z-20 w-3/4 p-10 m-0 justify-center items-center bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 font-mono text-white">
              <p className="font-mono z-20 mb-5 tracking-wide text-justify text-xl">
                {home.attributes.presentacion}{" "}
              </p>
              <p className="font-mono tracking-wide text-justify text-xl ">
                {home.attributes.presentacion2}
              </p>
              
            </div>
          </div>
        )}
      </div>
    </div>}
    </>
  );
}

export default Presentacion;
