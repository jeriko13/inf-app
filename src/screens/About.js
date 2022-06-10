import CanvasTitle from "../layouts/CanvasTitle";
import Footer from "../layouts/Footer";
import NavBarStatic from "../layouts/NavBarStatic";

const dataLegalitas = [
    {
        title       : "Nama Perusahaan",
        description : "Infomedia Technology"
    },
    {
        title       : "Bentuk Perusahaan",
        description : "CV (Persekutuan Komanditer)"
    },
    {
        title       : "Alamat Perusahaan",
        description : "Jl. Cendrawasih L 5 Bojongsari Kembaran Banyumas"
    },
    {
        title       : "Bidang Usaha",
        description : "Aktivitas teknologi informasi dan jasa komputer lainnya"
    },
    {
        title       : "Akta Pendirian",
        description : "No. 08 - 10 Januari 2007 [Notaris Murlina, S.H.]"
    },
    {
        title       : "Akta Perubahan Terakhir",
        description : "No. 66 - 21 Januari 2019 [Notaris Nuning Indraeni, S.H.]"
    },
    {
        title       : "Nomor Pokok Wajib Pajak",
        description : "02.544.175.9-542.000"
    },
    {
        title       : "Pengesahan Kementrian Hukum dan HAM",
        description : "AHU-0003974-AH.01.15 Tahun 2019"
    },
    {
        title       : "Nomor Induk Berusaha",
        description : "9120304332318"
    },
    {
        title       : "Sertifikat Kompetensi dan Kualifikasi Perusahaan (KADIN Banyumas)",
        description : "20316-18000007"
    },
    {
        title       : "Sertifikat Kompetensi dan Kualifikasi Perusahaan (KADIN Aspekti)",
        description : "00000010.1017"
    },
    {
        title       : "Surat Pegukuhan Pengusaha Kena Pajak",
        description : "S-63PKP/WPJ.32/KP.0103/2016"
    },
]

export default function Portfolio() {
    return (
    <>
        <NavBarStatic/>
        <CanvasTitle judul="ABOUT US" deskripsi="Tentang perusahaan CV. Infomedia Technology"/>

        <div className="w-full bg-slate-50 py-6 mb-10" style={{ backgroundImage: "" }}>
            <div className="max-w-7xl mx-auto">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 font-bold text-2xl text-ump-1 text-blue-800">Visi dan Misi Kami</h1>
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

        <div className="w-full py-6 mb-10" style={{ backgroundImage: "" }}>
            <div className="max-w-7xl mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="font-semibold text-2xl text-blue-800 mb-6">Legalitas Perusahaan</h1>
                    {
                        dataLegalitas.map(data => (
                            <div className="w-full mb-3 text-base">
                                <div className="mb-1 text-slate-800 font-light">{data.title}</div>
                                <div className="text-blue-800 font-medium text-lg">{data.description}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}