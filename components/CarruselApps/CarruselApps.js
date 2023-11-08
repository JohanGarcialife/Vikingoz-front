import React from "react";
import Slider from "react-slick";
import useWindowSize from "../../hooks/useWindowSize";
import { map } from "lodash";

function CarruselApps(props) {
  const { aplicaciones } = props;  

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { width } = useWindowSize(); 

  return (
    <>
      {width < 1024 ? (
        <div className="pb-12 pt-24 mb-20 !max-w-[100%]" data-aos="zoom-in">
          {<Slider {...settings}>
            {map(aplicaciones, (aplicacion) => (
              <div className="mb-5 px-6 p-8  rounded-2xl " >
                <div className="">
                  <div className="z-10 w-full m-0 bg-white rounded-2xl p-8">
                    <img src={aplicacion?.attributes?.logo?.data?.attributes?.url} alt="logo" />
                  </div>

                  <div className="mt-10 w-full ">
                    <p className="text-black text-center text-xl font-bold mb-5">
                      {aplicacion.attributes.name}
                    </p>
                    <p className=" text-justify font-body text-black line-clamp-6	">
                      {aplicacion.attributes.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <button className="bg-[#0A2640] py-4 px-4 text-center rounded-3xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                    <p className="font-bold">Ver video</p>
                  </button>
                </div>
              </div>
            ))}
          </Slider>}
        </div>
      ) : (
        <div className="pb-12 pt-24 !max-w-screen" data-aos="zoom-in">
          <Slider {...settings}>
            {map(aplicaciones, (aplicacion) => (
              <div className="!flex justify-center items-center h-fit ">
                <div className="w-[50%] ">

             <img  src={aplicacion?.attributes?.image?.data?.attributes?.url} alt="imagen" />
                </div>
                <div className="w-[50%] mb-12 px-6 p-8  rounded-2xl ">
                  <div className="space-x-20 items-center">
                    <div className="z-10 w-[45%] !m-0 bg-white  p-4">
                    <img src={aplicacion.attributes.logo?.data?.attributes.url} alt="logo" />
                    </div>

                    <div className="py-8 px-2 !m-0">
                      <p className="text-black text-3xl font-bold mb-5">
                        {aplicacion.attributes.name}{" "}
                      </p>
                      <p className="text-justify font-body text-[14px] text-black">
                        {aplicacion.attributes.description}
                      </p>
                    </div>
                   {aplicacion.attributes.gallery ? <div className="flex h-40	mb-10 !ml-0 justify-around">
                      {map(aplicacion.attributes.gallery?.data, (imagen) => (
                        <img src={imagen.attributes.url} alt="galería" />
                      ))}
                    </div> : null}
                  </div>
                  <div className="flex justify-end ">
                    <button className="bg-[#0A2640] py-4 px-14 rounded-md text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                      <p className=" font-bold">Ver video</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
           
          </Slider>
        </div>
      )}
    </>
  );
}

export default CarruselApps;
