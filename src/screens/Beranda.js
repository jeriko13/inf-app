import React, {useState, useEffect} from "react";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import Axios from 'axios';
import {API_URL} from '../config/config';
import {
//   BrowserRouter as Router,
// //   Switch,
// //   Route,
// //   Link,
//   useParams
} from "react-router-dom";
export default function Beranda() {
    const [dataInformasi,setDataInformasi] = useState([]);
    const [startPage,setStartPage] = useState(1);
    const [totalRecordCount,setTotalRecordCount] = useState(0);
  
    // const [dataPromosi,setDataPromosi] = useState([]);
  
    useEffect(() => {
      checkInfo();
      // checkPromo();
    }, []);
  

  
    const checkInfo = () => {
      try {
        Axios.get(`${API_URL}/api/list/t_kegiatan?start=1`)
          .then(res => {
          console.log(res.data);
            const data = res.data;
           setTotalRecordCount(data.totalRecordCount);
            setDataInformasi(data.t_kegiatan);
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
          Axios.get(`${API_URL}/api/list/t_kegiatan?start=${startPage + 7}`)
            .then(res => {
              const data = res.data.t_kegiatan;
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
          Axios.get(`${API_URL}/api/list/t_kegiatan?start=${startPage - 7}`)
            .then(res => {
              const data = res.data.t_kegiatan;
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
  
    // const checkPromo = () => {
    //   try {
    //     Axios.get(`${API_URL}/api/list/cv_promosi`)
    //       .then(res => {
          
    //         const data = res.data;
    //           setDataPromosi(data.cv_promosi);
           
    //       })
    //       .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //       })
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    return (
    <>
        <NavBar/>
        <div className="relative bg-transparent">
            <div className="max-w-7xl mx-auto bg-indigo-800 bg-blend-multiply" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" }}>
                <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:bg-white">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-40 text-slate-50 transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <main className="mx-auto pt-24 max-w-7xl px-4 sm:px-6 lg:pt-24 lg:px-8 xl:pt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block text-slate-300 lg:text-slate-800">Penyedia solusi</span> {' '}
                                <span className="block text-slate-50 lg:text-blue-800">e-Government</span>
                            </h1>
                            <p className="mt-3 text-base text-slate-300 lg:text-slate-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Penyediaan solusi Teknologi Informasi bagi pemerintah daerah dan pusat
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                    href="/about"
                                    className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-8"
                                    >
                                    About Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-indigo-800 bg-blend-multiply"  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" }}></div>
            </div>
        </div>

        <div className="w-full bg-slate-50 py-6 mb-10" style={{ backgroundImage: "" }}>
            <div className="max-w-7xl mx-auto">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 font-bold text-2xl text-ump-1 text-blue-800">Sekilas tentang Kami</h1>
                    <div className="relative bg-blue-700 w-72 mb-4 h-2 rounded-full">
                        <div className="absolute top-0 left-0 bg-blue-800 w-56 mb-4 h-2 rounded-full"></div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full justify-start items-center">
                        <div className="relative flex-1 lg:pr-10">
                            <img className="h-auto w-full rounded-md" src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Workflow" />
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-900 text-base text-justify">
                                <span className="font-semibold">Infomedia Technology</span> adalah perusahaan yang bergerak dalam bidang TeknologiInformasi berbasis komputer. 
                            </p>
                            <h1 className="mb-2 font-semibold text-lg text-blue-800 mt-4">VISI</h1>
                            <p className="text-gray-900 text-base text-justify">
                            Menjadi Perusahaan yang terpercaya di bidang Teknologi Informasi (Trusted IT Solution)dan menjadikan teknologiinformasi berbasis komputersebagai alat bantu utamaperusahaan, dalam melakukan kegiatan sehari-hari guna mendapatkan manfaat yang sebesar-besarnya
                            </p>
                            <h1 className="mb-2 font-semibold text-lg text-blue-800 mt-4">MISI</h1>
                            <ul className="text-gray-900 text-base text-justify list-disc list-outside ml-4">
                                <li>Melakukan bisnis di bidang teknologi informasi yang berorientasi pada kepuasan pelanggan. </li>
                                <li>Memberikan suatu produk berkualitas dengan melalui suatu proses penyelesaian yang efektif dan efisien.</li>
                                <li>Menjalin suatu hubungan yang baik dan berkelanjutan dengan pelanggan yang berlandaskan pada sikap saling percaya satu sama lain.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative w-full mx-auto mb-10 py-6">
            <h1 className="text-center font-semibold text-2xl text-blue-800 mb-16 underline underline-offset-8">Layanan Kami</h1>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="w-full mb-10 md:flex-1 flex justify-center flex-col sm:flex-row items-center sm:items-stretch">
                        <img src="/assets/images/4886762.png" className="h-auto w-6/12 mb-8 sm:mb-0 sm:w-4/12 mx-auto" alt="img"/>
                        <div className="w-full sm:w-6/12 text-center sm:text-left p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                            <h1 className="text-blue-800 font-semibold text-lg md:text-xl mb-2">Web Sistem Informasi dan e-Government :</h1>
                            <ul className="text-base md:text-lg">
                                <li>Aplikasi web yang interaktif</li>
                                <li>Penyediaan hosting maupun server</li>
                                <li>Sistem informasi manajemen</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full mb-10 md:flex-1 flex items-center sm:items-stretch justify-center flex-col sm:flex-row-reverse">
                        <img src="/assets/images/4428859.png" className="h-auto w-6/12 mb-8 sm:mb-0 sm:w-4/12 mx-auto" alt="img"/>
                        <div className="w-full sm:w-6/12 text-center sm:text-right p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                            <h1 className="text-blue-800 font-semibold text-lg md:text-xl mb-2">Pelatihan Teknologi Informasi :</h1>
                            <ul className="text-base md:text-lg">
                                <li>Layanan konsultasi di bidang teknologi informasi</li>
                                <li>Pelatihan teknologi informasi</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full mb-10 md:flex-1 flex items-center sm:items-stretch justify-center flex-col sm:flex-row">
                        <img src="/assets/images/consultant.png" className="h-auto w-6/12 mb-8 sm:mb-0 sm:w-4/12 mx-auto" alt="img"/>
                        <div className="w-full sm:w-6/12 text-center sm:text-left p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                            <h1 className="text-blue-800 font-semibold text-lg md:text-xl mb-2">Aplikasi Mobile :</h1>
                            <ul className="text-base md:text-lg">
                                <li>Aplikasi Dashboard</li>
                                <li>Aplikasi front end suatu layanan/instansi</li>
                                <li>Aplikasi backoffice</li>
                                <li>Aplikasi sistem informasi geografi</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full mb-10 md:flex-1 flex items-center sm:items-stretch justify-center flex-col sm:flex-row-reverse">
                        <img src="/assets/images/18907.png" className="h-auto w-6/12 mb-8 sm:mb-0 sm:w-4/12 mx-auto" alt="img"/>
                        <div className="w-full sm:w-6/12 text-center sm:text-right p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                            <h1 className="text-blue-800 font-semibold text-lg md:text-xl mb-2">Hardware dan Jaringan Komputer :</h1>
                            <ul className="text-base md:text-lg">
                                <li>Integrasi komputer-komputer di instansi</li>
                                <li>penyediaan perangkat keras</li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="text-center font-semibold text-2xl text-blue-800 mb-16 underline underline-offset-8">Halaman Berita</h2>
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
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
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

                  // <a href={`/informasi/${hasil.kegiatan_id}`} 
                  // className="w-full md:w-4/12 px-2 mr-auto ml-auto" type="button"
                  // >    
            
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-400">
                  
                        <img
                      // alt="..."
                       src ={`https://drive.google.com/uc?export=view&id=1ucMUeMIuOKNUp4IRQJgioP1ghA2CTZCO`} 
                      style={{
                        height:400,
                        width:1200
                      }}
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
                          className="text-cyan-500 fill-current"
                        ></polygon> */}
                        
                      </svg>

                  
                      <h4 className="text-xl font-bold text-white">
      
                     
                          <p> {hasil.opd} </p>
                      
                     </h4>  
                  
                      <p className="text-md font-light mt-2 text-white"> 
                       {hasil.kegiatan}
                       </p>
                       <p className="text-md font-light mt-2 text-white"> {hasil.lokasi}</p>
                       <p className="text-md font-light mt-2 text-white"> {hasil.tanggal}</p>
                      
                  
                  
                    </blockquote>
                  </div>
                  // </a>

                )
                })}
   
                
                {
                  (totalRecordCount - startPage < 7) ? <button onClick={() => handlePagination('prev')} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button">Prev</button> : ""
                }
              {
                  (startPage == 1) ? <button onClick={() => handlePagination('next')} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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
                <polygon
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
  
       
{/*                     
                    <h2 className="text-center font-semibold text-2xl text-blue-800 mb-16 underline underline-offset-8">Halaman Berita</h2>
                    <div className="w-full mb-10 md:flex-1 flex items-center sm:items-stretch justify-center flex-col sm:flex-row">
                        <img src="https://drive.google.com/uc?export=view&id=1jWUBWsxOLb_iiFw0IC7orEzBIDyfg23S" className="h-auto w-6/12 mb-8 sm:mb-0 sm:w-4/12 mx-auto" alt="img"/>
                        <div className="w-full sm:w-6/12 text-center sm:text-left p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                        <h1 className="text-blue-800 font-semibold text-lg md:text-xl mb-2">Perlu Pengetatan Perda Burung di Banjarmangu, Ini Penjelasan Warga:</h1>
                            <ul className="text-base md:text-lg">
                           <p>Sejumlah pemuda dan petani di Desa Banjarmangu, Kecamatan Banjarmangu, Kabupaten Banjarnegara sepakat untuk lebih mengetatkan penerapan Peraturan Daerah Nomor 19 tahun 2015 terkait perlindungan beberapa jenis burung sebagai upaya untuk menjaga ekosistem alam.

Beberapa jenis burung memang sangat dibutuhkan petani dalam memberantas hama pada lahan pertanian. Namun hanya jenis burung tertentu yang dilarang untuk diburu dengan cara tradisional maupun jebakan.

Untuk itu, para petani dan pemuda di Desa Banjarmangu melakukan pemasangan banner terkait dukungan terhadap konservasi burung tertentu.

“Kami sangat setuju dengan penerapan Perda ini, sebab sesuai dengan aturan tersebut, adanya larangan perburuan burung dalam Perda sangat menguntungkan petani, khususnya jenis burung tertentu pemakan hama tikus, belalang, maupun hama lainnya,” kata Sabar petani Dusun Pekuncen, Desa Banjarmangu.

Menurutnya, jenis burung Tyto Alba (burung hantu putih) keberadaanya sangat dibutuhkan petani. </p>
                            </ul>
                        </div>
                    </div> */}
{/* 
                    <div id="instafeed-container"></div>
   
   
   
   <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>
   <script type="text/javascript">
   var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
       resolution: 'low_resolution',
    accessToken: 'IGQVJWODU0OTYwMkNnQ3RZAUjJxRzFsNi1DV05hbGFJNnVUYjh5NTd6NXNYT3RaWmhZAQjZAOS3JpeUE2c3RyYXMwSlB1OXBQdnF4ekE1aVVhTzFuY09Yek5oc0ZA3WmlubmNkMXpPVzln'
   });
   userFeed.run();
   </script> */}
                </div>
            </div>
        

        {/* berita terbaru
        <div className="w-full mx-auto mb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-8">
                    <div className="bg-blue-800 h-1 rounded-full flex-1 opacity-50"></div>
                    <h1 className="font-semibold text-2xl text-blue-800 mx-4">Berita Terbaru</h1>
                    <div className="bg-blue-800 h-1 rounded-full flex-1 opacity-50"></div>
                </div>
                <div className="flex justify-between mt-4 items-stretch flex-wrap">
                    <div className="bg-blue-50 w-full mb-4 md:mb-0 md:flex-1 mx-2 rounded-md shadow-lg relative overflow-hidden">
                        <img className="w-full h-auto" src={process.env.PUBLIC_URL + '/assets/images/bg-busy-computer.jpg'} alt="Workflow" />
                        <div className="p-4 ">
                        <h1 className="font-medium text-base text-gray-900">Judul</h1>
                        <span className="bg-blue-0 text-gray-600 text-sm">Lorem Ipsum</span>
                        <h1 className="font-normal text-base to-gray-800 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit provident maiores eligendi totam hic assumenda iste laborum omnis id, ut accusantium minus harum!</h1>
                        </div>
                    </div>
                    <div className="bg-blue-50 w-full mb-4 md:mb-0 md:flex-1 mx-2 rounded-md shadow-lg relative overflow-hidden">
                        <img className="w-full h-auto" src={process.env.PUBLIC_URL + '/assets/images/bg-busy-computer.jpg'} alt="Workflow" />
                        <div className="p-4 ">
                        <h1 className="font-medium text-base text-gray-900">Judul</h1>
                        <span className="bg-blue-0 text-gray-600 text-sm">Lorem Ipsum</span>
                        <h1 className="font-normal text-base to-gray-800 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit provident maiores eligendi totam hic assumenda iste laborum omnis id, ut accusantium minus harum!</h1>
                        </div>
                    </div>
                    <div className="bg-blue-50 w-full mb-4 md:mb-0 md:flex-1 mx-2 rounded-md shadow-lg relative overflow-hidden">
                        <img className="w-full h-auto" src={process.env.PUBLIC_URL + '/assets/images/bg-busy-computer.jpg'} alt="Workflow" />
                        <div className="p-4 ">
                        <h1 className="font-medium text-base text-gray-900">Judul</h1>
                        <span className="bg-blue-0 text-gray-600 text-sm">Lorem Ipsum</span>
                        <h1 className="font-normal text-base to-gray-800 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit provident maiores eligendi totam hic assumenda iste laborum omnis id, ut accusantium minus harum!</h1>
                        </div>
                    </div>
                    <div className="bg-blue-50 w-full mb-4 md:mb-0 md:flex-1 mx-2 rounded-md shadow-lg relative overflow-hidden">
                        <img className="w-full h-auto" src={process.env.PUBLIC_URL + '/assets/images/bg-busy-computer.jpg'} alt="Workflow" />
                        <div className="p-4 ">
                        <h1 className="font-medium text-base text-gray-900">Judul</h1>
                        <span className="bg-blue-0 text-gray-600 text-sm">Lorem Ipsum</span>
                        <h1 className="font-normal text-base to-gray-800 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit provident maiores eligendi totam hic assumenda iste laborum omnis id, ut accusantium minus harum!</h1>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-8">
                    <div className="bg-blue-800 h-1 rounded-full flex-1 opacity-50"></div>
                    <a href className="text-center font-medium text-md bg-blue-800 text-white block w-40 h-10 leading-10 mx-4 rounded-md">Berita Lainnya</a>
                    <div className="bg-blue-800 h-1 rounded-full flex-1 opacity-50"></div>
                </div>
            </div>
        </div>
        */}
        <Footer/>
    </>
    )
}