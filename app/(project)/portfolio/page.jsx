
import Link from "next/link";


import Portfolio2 from "@/components/portfolio/Portfolio2";
import React from "react";
import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import Cta from "@/components/homes/home-13/Cta";
import Portfolio4 from "@/components/portfolio/Portfolio4";
import HomeCta from "@/components/service/HomeCta";
import Footer1 from "@/components/footers/Footer1";


export const metadata = {
  title:
    "Zing Studio - Portfolio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
      
      
           <section className="about-us-hero d-flex flex-column align-items-center justify-content-center text-center">
             <h1 className="about-us-title fw-bold">Portfolio</h1>
             <div className="breadcrumb text-white-50 mt-3">
               <span className="fw-semibold">Home</span>
               <span className="mx-2 text-white-50">{'>'}</span>
               <span className="text-white fw-semibold">Portfolio</span>
             </div>
           </section>
      

        <div className="content-block">
          {/* <Portfolio2 /> */}
          <Portfolio4/>

        </div>

        <HomeCta />
        <Footer1/>
      </div>
    </>
  );
}
