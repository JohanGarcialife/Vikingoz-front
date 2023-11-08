import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import useWindowSize from "../hooks/useWindowSize";

function Header(props) {
  const {active} = props
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  

  return (
    <>
      {width < 1024 ? (
        <header className=" px-5 grid grid-cols-2 md:grid-cols-2 bg-[#0A2640] justify-between items-center py-9">
          <div className="z-10 flex items-center space-x-2">
            <img
              className="h-20 cursor-pointer"
              src="./assets/logo.png"
              alt="logo"
            />
          </div>
          <div className="flex justify-end">
            <HiMenu
              onClick={() => setShow(true)}
              className="text-right text-[40px] text-white"
            />
          </div>

          {show === false ? null : (
            <div className="z-50 fixed flex flex-col justify-center text-center top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#079BD8] to-black">
              <IoCloseSharp
                onClick={() => setShow(false)}
                className="text-right text-4xl !text-white absolute top-8 right-6 z-20"
              />
              <div className="z-10 flex items-center justify-center mb-20 space-x-2">
                <img
                  className="h-40 cursor-pointer"
                  src="./assets/logo.png"
                  alt="logo"
                />
              </div>
              <Link href="/">
                <p className="cursor-pointer leading-10	my-3 !font-mono font-semibold text-2xl text-white">
                  Inicio
                </p>
              </Link>
              <Link href="/aplicaciones">
                <p className="cursor-pointer leading-10	my-3 !font-mono font-semibold text-2xl text-white">
                  Aplicaciones
                </p>
              </Link>
              <Link href="/acceso">
                <p className="cursor-pointer leading-10	my-3 !font-mono font-semibold text-2xl text-white">
                  Acceso
                </p>
              </Link>
              <Link href="/distribucion">
                <p className="cursor-pointer leading-10	my-3 !font-mono font-semibold text-2xl text-white">
                  Distribución
                </p>
              </Link>
              <Link href="/contacto">
                <p className="cursor-pointer leading-10	my-3 !font-mono font-semibold text-2xl text-white">
                  Contacto
                </p>
              </Link>
              <Link href="/pagos">
                <p className="cursor-pointer leading-10	my-3 !font-mono font-semibold text-2xl text-white">
                  Formas de pago
                </p>
              </Link>
            </div>
          )}
        </header>
      ) : (
        <>
          {scrolled === false ? (
            <header className="px-24 flex fixed justify-between w-full items-center py-9 z-50">
              <div className="z-20 flex items-center space-x-2">
                <img
                  className="h-20 cursor-pointer"
                  src="./assets/logo.png"
                  alt="logo"
                />
              </div>

              <div className="z-50 flex items-center space-x-5">
                <Link  href="/">
                  <p className={active === "home" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Inicio
                  </p>
                </Link>
                <Link  href="/aplicaciones">
                <p className={active === "aplicaciones" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Aplicaciones
                  </p>
                </Link>
                <Link  href="/acceso">
                <p className={active === "acceso" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Acceso
                  </p>
                </Link>
                <Link  href="/distribucion">
                <p className={active === "distribucion" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Distribución
                  </p>
                </Link>
                <Link href="/contacto">
                  <p className={active === "contacto" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Contacto
                  </p>
                </Link>
                <Link  href="/pagos">
                  <p  className={active === "pagos" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Formas de pago
                  </p>
                </Link>
              </div>
            </header>
          ) : (
            <header className=" bg-[#0A2640] bg-opacity-90 px-24 flex fixed justify-between w-full items-center pt-5 pb-2 z-50">
              <div className="z-20 flex items-center space-x-2">
                <img
                  className="h-20 cursor-pointer"
                  src="./assets/logo.png"
                  alt="logo"
                />
              </div>

              <div className=" flex items-center space-x-5 z-50">
              <Link  href="/">
                  <p className={active === "home" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Inicio
                  </p>
                </Link>
                <Link  href="aplicaciones">
                <p className={active === "aplicaciones" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Aplicaciones
                  </p>
                </Link>
                <Link  href="/acceso">
                <p className={active === "acceso" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Acceso
                  </p>
                </Link>
                <Link  href="/distribucion">
                <p className={active === "distribucion" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Distribución
                  </p>
                </Link>
                <Link  href="/contacto">
                  <p className={active === "contacto" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Contacto
                  </p>
                </Link>
                <Link  href="/pagos">
                  <p  className={active === "pagos" ? "cursor-pointer !font-mono font-semibold text-base text-white border-b-2": "cursor-pointer !font-mono font-semibold text-base text-white"}>
                    Formas de pago
                  </p>
                </Link>
              </div>
            </header>
          )}
        </>
      )}
    </>
  );
}

export default Header;
