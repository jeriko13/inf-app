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
      // Mengurutkan dataInformasi berdasarkan tanggal secara ascending
      dataInformasi.sort((a, b) => b.tanggal - a.tanggal);
    }, [dataInformasi]);
    
    useEffect(() => {
      
      checkInfo();
    }, []);
  
    const checkInfo = () => {
        console.log(id);
        try {
          Axios.get(`${API_URL}/api/list/t_kegiatan?pageno=1&recperpage=all`)
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
                                <table className="min-w-full divide-y divide-gray-200 text-left ml-auto">
                                    <thead className="bg-gray-50">
                                        <tr>
                                       
                                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                No
                                            </th>
                                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tahun
                                            </th>
                                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nama Paket Pekerjaan
                                            </th>
                                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Bidang / Sub Bidang Pekerjaan
                                            </th>
                                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Lokasi
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                        {/* {dataList1.sort((a, b) => parseInt(b.tahun.split('/')[0]) - parseInt(a.tahun.split('/')[0])).map((item, key) =>  */}
                        
                        {/* {dataInformasi.map((item, key) => ( */}
                          {dataInformasi.sort((a, b) => b.tanggal - a.tanggal).map((item, key) => (
                          <tr>
                            <td className="px-2 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {key + 1}
                            </td>
                            <td className="px-2 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {new Date(item.tanggal).getFullYear()}
                            </td>
                            <td className="px-2 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {item.kegiatan}
                            </td>
                            <td className="px-2 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {item.opd}
                            </td>
                            <td className="px-2 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {item.lokasi}
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