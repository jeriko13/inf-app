import CanvasTitle from "../layouts/CanvasTitle";
import Footer from "../layouts/Footer";
import NavBarStatic from "../layouts/NavBarStatic";
import React, {useState, useEffect} from "react";
// import NavBar from "../layouts/NavBar";
import Axios from 'axios';
import {API_URL} from '../config/config';

  import {
    // BrowserRouter,
    // Switch,
    // Route,
    // Link,
    useParams,
  } from "react-router-dom";
  

  // import Navbar from "components/Navbars/AuthNavbar.js";
  
  
  export default function Portfolio() {
    let { id } = useParams();
  
    const [dataInformasi, setDataInformasi] = useState([]);
  
    useEffect(() => {
      checkInfo();
    }, []);
  
    const checkInfo = () => {
        console.log(id);
        try {
          Axios.get(`${API_URL}/api/list/t_kegiatan`)
            .then((res) => {
              const data = res.data;
              setDataInformasi(data.t_kegiatan);
              console.log(data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      };
    return (
    <>
        <NavBarStatic/>
        <CanvasTitle judul="PORTFOLIO" deskripsi="Daftar Porftfolio CV. Infomedia Technology"/>
        <div className="w-full bg-slate-50 py-6 mb-10" style={{ backgroundImage: "" }}>
            <div className="max-w-7xl mx-auto">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                No
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Nama Paket Pekerjaan
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Bidang / Sub Bidang Pekerjaan
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Lokasi
                                            </th>
                                            {/* <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Pemberi Tugas
                                            </th> */}
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Tanggal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                        {/* {dataList1.sort((a, b) => parseInt(b.tahun.split('/')[0]) - parseInt(a.tahun.split('/')[0])).map((item, key) =>  */}
                        {dataInformasi.map((item, key) => (
                          <tr>
                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {item.kegiatan_id}
                            </td>

                            
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {item.kegiatan}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {item.opd}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {item.lokasi}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {item.tanggal}
                            </td>
                            
                          </tr>
                          
                        ))}
                      </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}