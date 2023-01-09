import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

import CanvasTitle from "../layouts/CanvasTitle";
import Footer from "../layouts/Footer";
import NavBarStatic from "../layouts/NavBarStatic";

const dataServices = [
{
    title : "Web Design & Developer",
    description : "Yaitu membangun aplikasi web yang interaktif, dimana ada beberapa link yang dapat menghubungkan pengunjung situs web dari satu menu/content ke menu/content lainnya menurut suatu skenario tertentu. merancang front end/tampilan web supaya tampilan tersebut menjadi indah sehingga banyak pengunjung yang tertarik untuk mengunjungi situs tersebut. menyewakan suatu server kepada pelanggan yang ingin agar website nya dapat diakses oleh pengunjung dari internet. - Pengurusan domain, CV. INFOMEDIA TECHNOLOGY menyediakan jasa pelayanan pendaftaran/registrasi address internet yang dikehendaki oleh pelanggan, untuk semua jenis domain, seperti : .co.id. , .com , go.id. , ac.id. , dan lain-lain."
},    
{
    title : "Management Information System (MIS)",
    description : "Pengembangan Sistem Informasi pada banyak perusahaan, sekarang ini memasuki masa yang kritis. Persaingan tingkat global pada saat ini telah dialami perusahaan-perusahaan di wilayah Asia. Dengan demikian, akan semakin terasa bahwa otomatisasi perusahaan sebagai bagian dari masyarakat bisnis modern menjadi semakin mendesak. Oleh karena itu, pembuatan sistem informasi yang baik menjadi bagian yang tak terpisahkan dalam proses otomatisasi tersebut."
},    
{
    title : "Jaringan Komputer (Networking Installation)",
    description : "Merupakan jasa integrasi komputer-komputer di perkantoran, sehingga antara satu komputer dengan komputer lainnya dapat saling berbagi data, informasi dan hardware. Hal ini sangat penting bagi suatu perusahaan, karena adanya keterkaitan yang erat antara satu bagian dalam perusahaan dengan bagian lainnya, sehingga adanya suatu kebutuhan untuk saling membagi data antara satu komputer dengan lainnya. Dalam hal hardware, dengan adanya jaringan komputer ini, maka setiap komputer dapat berbagi hardware dengan komputer lainnya. Sehingga hal ini akan dapat meminimalisir pengeluaran perusahaan untuk pembelian hardware komputer. Konsep desain jaringan komputer akan disesuaikan dan menyatu dengan desain gedung, sehingga tidak mengurangi faktor estetika. Sistem pengkabelan akan dikemas sedemikian rupa sehingga tidak menggangu pandangan dan aktifitas serta terhindar dari kerusakan."
},    
{
    title : "Geographic Information System (GIS)",
    description : "Suatu GIS, dapat membantu perusahaan untuk memetakan berbagai sumber daya yang dimilikinya. Lebih lanjut, sumber daya tersebut dapat dimanfaatkan sebesar-besarnya guna kemajuan perusahaan. Konsentrasi GIS adalah memanfaatkan basis data spasial yang dalam implementasinya dapat berhubungan dengan basis data MIS, misalnya data aset suatu perusahaan berdasarkan lokasi ataupun data pelanggan yang tersebar di berbagai tempat."
},    
{
    title : "Hardware & Maintenance",
    description : "CV. INFOMEDIA TECHNOLOGY juga menyediakan pelayanan untuk pengadaan hardware komputer dan perlengkapan pendukung lainnya. CV. INFOMEDIA TECHNOLOGY dapat sekaligus menjadi konsultan untuk menentukan hardware apa saja yang terbaik dan dibutuhkan perusahaan berikut instalasi dan perawatan dari komputer-komputer tersebut."
},    
{
    title : "Jasa Pelatihan dan konsultasi di bidang Sistem Informasi berbasis Komputer",
    description : "Tidak dapat dipungkiri bahwa sampai saat ini masih sedikit orang yang memiliki penguasaan yang baik dalam bidang sistem informasi berbasis komputer, tidak terkecuali perusahaan-perusahaan, baik dalam skala kecil maupun menengah, belum didukung oleh tenaga ahli di bidang ini. Untuk menjawab tantangan bisnis untuk dapat memenangkan persaingan, CV. INFOMEDIA TECHNOLOGY menyediakan layanan jasa sebagai konsultan di bidang teknologi informasi, yang akan membantu client memberikan masukan dan saran untuk dapat membantu proses kerja sehari-hari. Selain itu, CV. INFOMEDIA TECHNOLOGY juga menyediakan jasa pelatihan/training untuk karyawan-karyawan di suatu perusahaan, sehingga mempunyai kemampuan yang cukup untuk dapat menjalankan suatu keterampilan tertentu di bidang teknologi informasi."
},
]

export default function Portfolio() {
    return (
    <>
        <NavBarStatic/>
        <CanvasTitle judul="SERVICES" deskripsi="Layanan yang ada di CV. Infomedia Technology"/>
        <div className="w-full bg-slate-50 py-6 mb-10" style={{ backgroundImage: "" }}>
            <div className="max-w-7xl mx-auto">
                <div className="px-4 sm:px-6 lg:px-8">
                <div className="w-full mx-auto bg-white rounded-2xl shadow-md transition-all p-2">
                    {
                        dataServices.map(data => (
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-base font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 my-2">
                                    <span className="text-light-blue-400">{data.title}</span>

                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500 transition-transform`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-2 pt-4 pb-2 text-base text-gray-500">
                                    <span className="text-light-blue-400">{data.title}</span>

                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}