import CanvasTitle from "../layouts/CanvasTitle";
import Footer from "../layouts/Footer";
import NavBarStatic from "../layouts/NavBarStatic";

export default function Portfolio() {
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
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Pemberi Tugas
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Tahun
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                1
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                Pengembangan website www.purworejo.go.id
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                Web Portal Purworejo, mail server, co-location server, entry data
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                Kabupaten Purworejo
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                Bidang Data Elektronik, BIKOM. Purworejo
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                2007
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                2
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                Sistem Informasi Perijinan Kab. Purworejo
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                SIMTAP
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                Kabupaten Purworejo
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                Kantor Pelayanan Modal Perijinan Terpadu (KPMPT)
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                2007
                                            </td>
                                        </tr>

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