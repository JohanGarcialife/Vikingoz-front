import Head from "next/head";
import { useEffect, useState } from "react";
import CarruselApps from "../components/CarruselApps/CarruselApps";
import Dashboard from "../components/Dashboard";
import Presentacion from "../components/Presentacion";
import BasicLayout from "../layouts/BasicLayout";
import { API_URL } from "../utils/constants";

export default function Home() {
  const [home, setHome] = useState([]);
  const [aplicaciones, setAplicaciones] = useState([]);
  const {data} = aplicaciones


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/home/?populate=*`);
      const  data  = await res.json();
      setHome(data);
    }
    fetchData()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/aplications/?populate=*`);
      const  data  = await res.json();
      setAplicaciones(data);
    }
    fetchData()
  }, []);

  return (
    <div>
      <Head>
        <title>Vikingoz</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

     <BasicLayout active={"home"}>
    <Presentacion
           home={home.data}
          />
       

    <CarruselApps 
        aplicaciones={data} 
        />

 <Dashboard  tecnologias1={home.data?.attributes.tecnologias1} tecnologias2={home.data?.attributes.tecnologias2}/>
      </BasicLayout>
    </div>
  );
}
