'use client';

import ResponsiveCarousel from './components/CarouselComponent';
import Footer from './components/Footer';
// import { ImageCardComponent } from './components/ImageCardComponent';
// import Link from 'next/link';
import AboutUs from './components/AboutUsComponent';

export default function Page() {
  return (
    <div className="container mx-auto p-4 h-full flex flex-col gap-5 ">
      <ResponsiveCarousel />
      <AboutUs />

      <div className="h-full grid grid-cols-2 bg-gray-100 p-5">
        <div>
          <h1 className="font-bold font-sans mb-3">PROGRAM DE LUCRU</h1>
          <hr />
          <div className="flex flex-col justify-center  p-6 gap-2">
            {' '}
            <div className="flex">
              <h1 className=" font-semibold">Luni-Vineri:</h1>
              <h1 className="text-green-500 ml-1"> 8:00-16:00</h1>
            </div>
            <div className="flex">
              <h1 className=" font-semibold">Sambata-Duminica:</h1>
              <h1 className="text-blue-800 ml-1"> INCHIS</h1>
            </div>
            <div className="flex">
              <h1 className=" font-semibold">Sediu:</h1>
              <h1 className="text-blue-800 ml-1">Str. Bucuresti nr. 216, Varteju, Jud. Ilfov (pe Centura Bucuresti)</h1>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.962043261264!2d26.006014!3d44.367834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adff8363bae4c5%3A0x9d630f984af38ef5!2sCREATIV%20TUB%20SRL!5e0!3m2!1sen!2sro!4v1633936462342!5m2!1sen!2sro"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 10, height: 200 }}
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}