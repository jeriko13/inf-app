import React, {useState, useEffect} from "react";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import Axios from 'axios';
import {API2_URL} from '../config/config';
import {
  BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
  useParams
} from "react-router-dom";

// export default function Kegiatan() {
//   const [dataKegiatan,setDataKegiatan] = useState([]);
//   const [startPage,setStartPage] = useState(1);
//   const [totalRecordCount,setTotalRecordCount] = useState(0);

//   // const [dataPromosi,setDataPromosi] = useState([]);

//   useEffect(() => {
//     checkInfo();
//     // checkPromo();
//   }, []);



//   const checkInfo = () => {
//     try {
//       Axios.get(`${API2_URL}/api/list/t_kegiatan?start=1`)
//         .then(res => {
//         console.log(res.data);
//           const data = res.data;
//          setTotalRecordCount(data.totalRecordCount);
//           setDataKegiatan(data.t_kegiatan);
//           console.log(data);
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         })
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handlePagination = (btn) => { 
//     if (btn == "next") {
//       try {
//         Axios.get(`${API2_URL}/api/list/t_kegiatan?start=${startPage + 7}`)
//           .then(res => {
//             const data = res.data.t_kegiatan;
//             console.log(data);
//             setDataKegiatan(data);
//             setStartPage(startPage + 7 );

//           })
//           .catch(function (error) {
//             // handle error
//             console.log(error);
//           })
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       try {
//         Axios.get(`${API2_URL}/api/list/t_kegiatan?start=${startPage - 7}`)
//           .then(res => {
//             const data = res.data.t_kegiatan;
//             console.log(data);
//             setDataKegiatan(data);
//             setStartPage(startPage - 7 );
//           })
//           .catch(function (error) {
//             // handle error
//             console.log(error);
//           })
//       } catch (error) {
//         console.log(error);
//       }
//     }
   
//   }

//   // const checkPromo = () => {
//   //   try {
//   //     Axios.get(`${API2_URL}/api/list/t_promosi`)
//   //       .then(res => {
        
//   //         const data = res.data;
//   //           setDataPromosi(data.t_promosi);
         
//   //       })
//   //       .catch(function (error) {
//   //         // handle error
//   //         console.log(error);
//   //       })
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
//     return (
//     <>
//         <NavBar/>
//         <main>
//           <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
//             <div
//               className="absolute top-0 w-full h-full bg-center bg-cover"
//               style={{
//                 backgroundImage:
//                 "url('https://drive.google.com/uc?export=view&id=1n2PSIIUUZ_Fh8MhPr0LcDlLiZWBMH_ZM')",
                  
//               }}
//             >
//               <span
//                 id="blackOverlay"
//                 className="w-full h-full absolute opacity-75 bg-black"
//               ></span>
//             </div>
            
//             <div
//               className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
//               style={{ transform: "translateZ(0)" }}
//             >
//               <svg
//                 className="absolute bottom-0 overflow-hidden"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="none"
//                 version="1.1"
//                 viewBox="0 0 2560 100"
//                 x="0"
//                 y="0"
//               >
//                 {/* <polygon
//                   className="text-blueGray-200 fill-current"
//                   points="2560 0 2560 100 0 100"
//                 ></polygon> */}
//               </svg>
//             </div>
//           </div>
  
//           <section className="pb-20 bg-blueGray-200 -mt-24">
      
            
//             <div className="container mx-auto px-4">
//               <div className="flex flex-wrap">
   
                
//               </div>
  
//               <div className="flex flex-wrap items-center mt-32">
         
//               {dataKegiatan.map( hasil => {
//                         return(

//                   <a href={`/kegiatan/${hasil.kegiatan_id}`} className="w-full md:w-4/12 px-2 mr-auto ml-auto" type="button"
//                   >    
            
//                   <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-500">
                  
//                         <img
//                       alt="..."
//                       src={`https://inf.co.id/inf_backoffice/api/list/t_kegiatan/${hasil.lokasi}`}
//                       className="w-full align-middle rounded-t-lg"
//                     />
//                     <blockquote className="relative p-8 mb-4">
//                       <svg
//                         preserveAspectRatio="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 583 95"
//                         className="absolute left-0 w-full block h-95-px -top-94-px"
//                       >
//                         {/* <polygon
//                           points="-30,95 583,95 583,65"
//                           className="text-lightBlue-500 fill-current"
//                         ></polygon> */}
//                       </svg>

                  
//                       <h4 className="text-xl font-bold text-white">
      
                      
//                           <p> {hasil.opd.slice(0,50)}... </p>
                      
//                      </h4>  
                  
//                       <p className="text-md font-light mt-2 text-white">
                        
//                        {hasil.kegiatan.slice(0,50)}...
//                       </p>
                  
//                     </blockquote>
//                   </div>
//                   </a>

//                 )
//                 })}
   
                
//                 {
//                   (totalRecordCount - startPage < 6) ? <button onClick={() => handlePagination('prev')} className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//                   type="button">Prev</button> : ""
//                 }
//               {
//                   (startPage == 1) ? <button onClick={() => handlePagination('next')} className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//                   type="button" >Next</button> : ""
//                 }
              
//               </div>
//             </div>
//           </section>
  
//           <section className="relative py-20">
//             <div
//               className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
//               style={{ transform: "translateZ(0)" }}
//             >
//               <svg
//                 className="absolute bottom-0 overflow-hidden"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="none"
//                 version="1.1"
//                 viewBox="0 0 2560 100"
//                 x="0"
//                 y="0"
//               >
//                 {/* <polygon
//                   className="text-white fill-current"
//                   points="2560 0 2560 100 0 100"
//                 ></polygon> */}
//               </svg>
//             </div>
//           </section>
  
//         </main>
//         <Footer />
//       </>
//     );
//   }

const dataOpd = [
  {
      nama : 'Dinas Pendidikan Pemuda dan Olahraga',
      nama_singkat : 'DINDIKPORA',
      gambar : 'https://drive.google.com/uc?export=view&id=1ucMUeMIuOKNUp4IRQJgioP1ghA2CTZCO',
      link : `${API2_URL}/kegiatant_kegiatan/13`
  },
  {
      nama : 'Dinas Kesehatan',
      nama_singkat : 'DINKES',
      gambar : 'https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg',
      link : `${API2_URL}/kegiatant_kegiatan/14`
  },
  {
      nama : 'Dinas Pekerjaan Umum dan Penataan Ruang',
      nama_singkat : 'DPUPR',
      gambar : 'https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/18`
  },
  {
      nama : 'Kepolisian Resor',
      nama_singkat : 'POLRES',
      gambar : 'https://img.freepik.com/free-vector/police-officers-man-woman-stand-near-police-car_131590-305.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/2`
  },
  {
      nama : 'Kejaksaan Negeri',
      nama_singkat : 'KEJARI',
      gambar : 'https://img.freepik.com/free-vector/illustration-people-with-justice-order-icons_53876-77429.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/3`
  },
  {
      nama : 'Pengadilan Negeri',
      nama_singkat : 'PN',
      gambar : 'https://img.freepik.com/free-vector/law-concept-idea-justice-court-lawyer_277904-2609.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/5`
  },
  {
      nama : 'Pengadilan Agama',
      nama_singkat : 'PA',
      gambar : 'https://img.freepik.com/free-vector/concept-law-justice-judicial-hammer-books-scales-legal-advice-vector-illustration-flat-style_422344-1091.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/6`
  },
  {
      nama : 'Dewan Perwakilan Rakyat Daerah',
      nama_singkat : 'DPRD',
      gambar : 'https://img.freepik.com/free-vector/election-referendum-campaign_74855-6386.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/7`
  },
  {
      nama : 'Badan Pendapatan Pengelolaan Keuangan dan Aset Daerah',
      nama_singkat : 'BPPKAD',
      gambar : 'https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/8`
  },
  {
      nama : 'Badan Perencanaan, adan Perencanaan Penelitian dan Pengembangan',
      nama_singkat : 'BAPERLITBANG',
      gambar : 'https://img.freepik.com/free-vector/group-professionals-analyzing-international-map-with-pointers-charts-team-doing-global-business-research_74855-14035.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/9`
  },
  {
      nama : 'Badan Kepegawaian Daerah',
      nama_singkat : 'BKD',
      gambar : 'https://img.freepik.com/free-vector/office-concept-illustration_114360-1248.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/10`
  },
  {
      nama : 'Dinas Sosial Pemberdayaan Perempuan dan Perlindungan Anak',
      nama_singkat : 'DINSOS PPP A',
      gambar : 'https://img.freepik.com/free-vector/people-communicating-via-social-media_74855-5551.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/11`
  },
  {
      nama : 'Dinas Pertanian Perikanan dan Ketahanan Pangan',
      nama_singkat : 'DISTANKAN DAN KP',
      gambar : 'https://img.freepik.com/free-vector/happy-female-farmer-working-farm-feed-population-flat-vector-illustration-cartoon-farm-with-automation-technology_74855-8400.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/12`
  },
  {
      nama : 'Dinas Perhubungan',
      nama_singkat : 'DISHUB',
      gambar : 'https://img.freepik.com/free-vector/passengers-waiting-bus-city-queue-town-road-flat-vector-illustration-public-transport-urban-lifestyle_74855-8493.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/15`
  },
  {
      nama : 'Dinas Kependudukan dan Pencatatan Sipil',
      nama_singkat : 'DINDUKCAPIL',
      gambar : 'https://img.freepik.com/free-vector/recruitment-agency-applicants-job-interview_1262-18959.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/16`
  },
  {
      nama : 'Dinas Pariwisata dan Kebudayaan',
      nama_singkat : 'DISPARBUD',
      gambar : 'https://img.freepik.com/free-vector/group-young-people-waving-hand_23-2148361692.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/17`
  },
  {
      nama : 'Dinas Perindustrian Perdagangan Koperasi Usaha Kecil dan Menengah',
      nama_singkat : 'DISPERINDAGKOP & UKM',
      gambar : 'https://img.freepik.com/free-vector/business-people-analyzing-marketing-reports_74855-11420.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/19`
  },
  {
      nama : 'Dinas Kearsipan dan Perpustakaan',
      nama_singkat : 'DISARPUS',
      gambar : 'https://img.freepik.com/free-vector/file-searching-concept-illustration_23-2148277021.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/20`
  },
  {
      nama : 'Dinas Tenaga Kerja Penanaman Modal dan Pelayanan Terpadu Satu Pintu',
      nama_singkat : 'DISNAKER PMPTSP',
      gambar : 'https://img.freepik.com/free-vector/happy-business-colleagues-team-portrait_179970-1271.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/21`
  },
  {
      nama : 'Dinas Perumahan Kawasan Permukiman dan Lingkungan Hidup',
      nama_singkat : 'DPKPLH',
      gambar : 'https://img.freepik.com/free-vector/private-houses-set_1284-12684.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/22`
  },
  {
      nama : 'Dinas Pemberdayaan Masyarakat dan Desa, Pengendalian  Penduduk dan Keluarga  Berencana',
      nama_singkat : 'DISPERMADESPPKB',
      gambar : 'https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/23`
  },
  {
      nama : 'Badan Kesatuan Bangsa dan Politik',
      nama_singkat : 'BAKESBANGPOL',
      gambar : 'https://img.freepik.com/free-vector/politicians-talking-having-debates-front-audience-flat-vector-illustration-cartoon-male-public-speakers-standing-rostrum-arguing_74855-8533.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/24`
  },
  {
      nama : 'Satuan Polisi Pamong Praja',
      nama_singkat : 'SATPOL PP',
      gambar : 'https://img.freepik.com/free-vector/police-collection-concept_52683-37010.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/25`
  },
  {
      nama : 'Badan Penanggulangan Bencana Daerah',
      nama_singkat : 'BPBD',
      gambar : 'https://img.freepik.com/free-vector/natural-disaster-infographics-layout-blizzard-tsunami-tornado-wildfire-landslide-volcano-flood-isometric-compositions_1284-26720.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/26`
  },
  {
      nama : 'Rumah Sakit Umum Daerah',
      nama_singkat : 'RSUD',
      gambar : 'https://img.freepik.com/free-vector/group-doctors-standing-hospital-building-team-practitioners-ambulance-car_74855-14034.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/27`
  },
  {
      nama : 'Badan Pusat Statistik',
      nama_singkat : 'BPS',
      gambar : 'https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/28`
  },
  {
      nama : 'Kementerian Agama',
      nama_singkat : 'KEMENAG',
      gambar : 'https://img.freepik.com/free-vector/muslim-family-traditional-clothes-reading-holy-book-quran-tiny-people-five-pillars-islam-islamic-calendar-islamic-culture-concept_335657-677.jpg?w=826',
      link : `${API2_URL}/kegiatant_kegiatan/29`
  },
  {
      nama : 'Rumah Tahanan Negara',
      nama_singkat : 'RUTAN',
      gambar : 'https://img.freepik.com/free-vector/locked-jail-cell-two-inmates-with-prisoners-uniform-security-guard-isometric-composition-illustration_1284-31162.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/30`
  },
  {
      nama : 'Badan Pertanahan Nasional',
      nama_singkat : 'BPN',
      gambar : 'https://img.freepik.com/free-vector/parking-lot-security-attendant-standing-gate-arm-with-stop-sign-checking-vehicles_74855-14131.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/31`
  },
  {
      nama : 'Badan Penelitian dan Pengembangan Kesehatan',
      nama_singkat : 'BALAILITBANGKES',
      gambar : 'https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/32`
  },
  {
      nama : 'Unit Pelayanan Pajak Daerah',
      nama_singkat : 'UPPD',
      gambar : 'https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan/33`
  },
  {
      nama : 'Badan Meteorologi, Klimatologi, dan Geofisika',
      nama_singkat : 'BMKG',
      gambar : 'https://img.freepik.com/free-vector/geography-teacher-class_74855-5512.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan34`
  },
  {
      nama : 'Rumah Sakit Islam',
      nama_singkat : 'RSI',
      gambar : 'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan35`
  },
  {
      nama : 'Pembinaan Kesejahteraan Umat',
      nama_singkat : ' RSU PKU MUHAMMADIYAH BANJARNEGARA',
      gambar : 'https://img.freepik.com/free-vector/patient-lying-bed-during-intensive-therapy_74855-7774.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan36`
  },
  {
      nama : 'Rumah Sakit',
      nama_singkat : 'Rumah Sakit Emanuel',
      gambar : 'https://img.freepik.com/free-vector/city-hospital-building_74855-6301.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan37`
  },
  {
      nama : ' Perusahaan Hutan Negara Indonesia',
      nama_singkat : 'PERHUTANI',
      gambar : 'https://img.freepik.com/free-vector/tiny-persons-planting-watering-trees-together_74855-17928.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan38`
  },
  {
      nama : 'Perusahaan Daerah Air Minum',
      nama_singkat : 'PDAM',
      gambar : 'https://img.freepik.com/free-vector/ecological-press-conference-member-speaking-stage-before-audience-presenting-graphs-with-earth_74855-14011.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan40`
  },
  {
      nama : 'Point of Sale',
      nama_singkat : 'POS',
      gambar : 'https://img.freepik.com/free-vector/happy-girl-sending-paper-letter-running-blue-mailbox-kid-holding-envelope-hand-flat-vector-illustration-good-news-mail-delivery-concept-banner-website-design-landing-web-page_74855-21174.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan41`
  },
  {
      nama : 'Perusahaan Listrik Negara',
      nama_singkat : 'PLN',
      gambar : 'https://img.freepik.com/free-vector/female-engineer-standing-near-chalkboard-explaining-project-draft-building-worker-flat-vector-illustration-construction-architecture_74855-8362.jpg?size=626&ext=jpg',
      link : `${API2_URL}/kegiatant_kegiatan42`
  },
  {
    nama : 'Dinas Komunikasi dan Informatika',
    nama_singkat : 'DINKOMINFO',
    gambar : 'https://img.freepik.com/free-vector/people-communicating-via-social-media_74855-5551.jpg?size=626&ext=jpg',
    link : `${API2_URL}/kegiatant_kegiatan44`
}
  ]

export default function Kegiatan() {

    return (
      <>
       
        <main className="">
          <section className="pb-20 bg-blueGray-500">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-stretch">
                {
                  dataOpd.map( item => (
                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                      <a href={item.link}  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500 overflow-hidden">
                        <div className="bg-white">
                          <img
                            alt="..."
                            src={item.gambar}
                            className="w-full align-middle rounded-t-lg mt-2 pl-4 pr-4 mb-2"
                          />
                        </div>
                        <blockquote className="relative p-4 mb-4">
                          <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block h-95-px -top-94-px"
                          >
                            <polygon
                              points="-30,95 583,95 583,65"
                              className="text-lightBlue-500 fill-current"
                            ></polygon>
                          </svg>
                          <h4 className="font-bold text-base text-white text-center">
                          {item.nama}
                          </h4>
                          <h4 className="font-bold text-lg text-white text-center">
                          ({item.nama_singkat})
                          </h4>
                        </blockquote>
                      </a>
                    </div>
                  ))
                }

              </div>
            </div>
          </section>
  
        </main>
        <Footer />
      </>
      
    );
  }

