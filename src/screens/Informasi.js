import React, {useState, useEffect} from "react";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import Axios from 'axios';
import {API_URL} from '../config/config';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

import CanvasTitle from "../layouts/CanvasTitle";

import NavBarStatic from "../layouts/NavBarStatic";

import {
  BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
  useParams
} from "react-router-dom";

export default function Informasi() {
  const [dataInformasi,setDataInformasi] = useState([]);
  const [startPage,setStartPage] = useState(1);
  const [totalRecordCount,setTotalRecordCount] = useState(0);

  const [dataPromosi,setDataPromosi] = useState([]);

  useEffect(() => {
    checkInfo()
  }, []);

  useEffect(() => {
    checkPromo()
  }, []);

  const checkInfo = () => {
    try {
      Axios.get(`${API_URL}/api/list/t_informasi?start=1`)
        .then(res => {
        console.log(res.data);
          const data = res.data;
         setTotalRecordCount(data.totalRecordCount);
          setDataInformasi(data.t_informasi);
          console.log(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  const handlePagination = (btn) => { 
    if (btn == "next") {
      try {
        Axios.get(`${API_URL}/api/list/t_informasi?start=${startPage + 7}`)
          .then(res => {
            const data = res.data.t_informasi;
            console.log(data);
            setDataInformasi(data);
            setStartPage(startPage + 7 );

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        Axios.get(`${API_URL}/api/list/t_informasi?start=${startPage - 7}`)
          .then(res => {
            const data = res.data.t_informasi;
            console.log(data);
            setDataInformasi(data);
            setStartPage(startPage - 7 );
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } catch (error) {
        console.log(error);
      }
    }
   
  }

  const checkPromo = () => {
    try {
      Axios.get(`${API_URL}/api/list/t_promosi`)
        .then(res => {
        
          const data = res.data;
            setDataPromosi(data.t_promosi);
         
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }
    return (
    <>
           <NavBarStatic/>
        <main>
         
        <CanvasTitle judul="INFORMASI" deskripsi="Kegiatan Infomedia Technology"/>
        <div className="w-full bg-slate-50 py-6 mb-10" style={{ backgroundImage: "" }}>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                {/* <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon> */}
              </svg>
            </div>
          </div>
  
          <section className="pb-20 bg-blueGray-200 -mt-24">
      
            
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
   
                
              </div>
  
              <div className="flex flex-wrap items-center mt-32">
         
              {dataInformasi.map( hasil => {
                        return(

                  <a href={`/informasi/${hasil.informasi_id}`} className="w-full md:w-4/12 px-2 mr-auto ml-auto" type="button"
                  >    
            
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-500">
                  
                        <img
                      alt="..."
                      src={`https://inf.co.id/inf_backoffice/images/${hasil.gambar.name}`}
                      
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        {/* <polygon
                          points="-30,95 583,95 583,65"
                          className="text-lightBlue-500 fill-current"
                        ></polygon> */}
                      </svg>

                  
                      <h4 className="text-xl font-bold text-white">
      
                          
                          <p> {hasil.judul.slice(0,50)}... </p>
                          <p> {hasil.lokasi}  </p>
                          <p> {hasil.tanggal} </p>
                      
                     </h4>  
                  
                      <p className="text-md font-light mt-2 text-white">
                        
                       {hasil.informasi.slice(0,50)}...
                      </p>
                  
                    </blockquote>
                  </div>
                  </a>

                )
                })}
   
                
                {
                  (totalRecordCount - startPage < 6) ? <button onClick={() => handlePagination('prev')} className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button">Prev</button> : ""
                }
              {
                  (startPage == 1) ? <button onClick={() => handlePagination('next')} className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button" >Next</button> : ""
                }
              
              </div>
            </div>
          </section>
  
          <section className="relative py-20">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                {/* <polygon
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon> */}
              </svg>
            </div>
          </section>
  
        </main>
        <Footer />
      </>
    );
  }

