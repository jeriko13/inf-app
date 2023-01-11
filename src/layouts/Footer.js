import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6" id="tentang">
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
         
          </svg>
        </div>
        <div className="w-full mx-auto bg-white border-t-2 shadow-lg py-6 flex flex-col justify-center items-center pb-0">
        <div className="w-11/12 sm:w-10/12 mx-auto flex justify-around flex-wrap flex-col sm:flex-row">
            <div className="flex md:items-center items-start flex-col md:flex-row w-full md:w-auto mb-4">
                <img className="block h-28 w-auto md:mx-auto md:mr-6" src={process.env.PUBLIC_URL + '/assets/images/logo-inf.jpg'} alt="Workflow" />
                <div className="text-base md:mt-4">
                    <h1 className="font-semibold text-xl text-blue-800 mb-2">INFOMEDIA TECHNOLOGY</h1>
                    <p>	Jl. Cendrawasih L-5, PGTSI, Bojongsari,</p>
                    <p className="mb-1">Kembaran, Banyumas, Jawa Tengah</p>
                    <p className="mb-1">Telp : 0852 2740 9102</p>
                </div>
            </div>
            <div className="mb-4">
                <h1 className="font-medium mb-2">Menu</h1>
                <div className="flex flex-col space-y-1">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </div>
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
        Copyright © {new Date().getFullYear()} All rights reserved | Infomedia Techonlogy{" "}
           
        </div>
        </div>
    </div>
      </footer>
    </>
  );
}





