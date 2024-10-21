// 'use client';

// import './globals.css';
// import Footer from './components/Footer';
// import Header from './components/Header';

// import React from 'react';

// import ResponsiveCarousel from './components/CarouselComponent';

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         <div className="bg-gray-200 flex flex-col min-h-screen p-10">
//           <div className="container mx-auto p-4 ">
//             <div className="flex flex-col md:flex-row mb-8 justify-between bg-white rounded-full">
//               <div className="w-full md:w-3/5  ">
//                 <ResponsiveCarousel />
//               </div>
//               <div className="w-full md:w-1/3 mb-4 md:mb-0">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.962043261264!2d26.006014!3d44.367834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adff8363bae4c5%3A0x9d630f984af38ef5!2sCREATIV%20TUB%20SRL!5e0!3m2!1sen!2sro!4v1633936462342!5m2!1sen!2sro"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>

//             <main>{children}</main>
//           </div>
//         </div>

//         <Footer />
//       </body>
//     </html>
//   );
// }

import '../app/ui/global.css';
import { Metadata } from 'next';
import { inter } from './ui/fonts';

import SideNav from './ui/dashboard/sidenav';

// export const experimental_ppr = true;

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {' '}
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-80">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
