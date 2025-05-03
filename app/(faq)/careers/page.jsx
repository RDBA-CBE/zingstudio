import Faq1 from "@/components/faq/Faq1";
import Footer13 from "@/components/footers/Footer13";


import Header17 from "@/components/headers/Header17";
import Link from "next/link";
import React from "react";
import Cta from "@/components/homes/home-13/Cta";
import CareerForm from "@/components/service/CareerForm";
import Footer1 from "@/components/footers/Footer1";
import HomeCta from "@/components/service/HomeCta";
import CareerBanner from "@/app/(service)/CareerBanner";
import NewCareerMain from "@/app/(service)/NewCareerMain";
import NewJoinZing from "@/app/(service)/NewJoinZing";
import CarrerFaq from "@/app/(service)/CarrerFaq";


export const metadata = {
  title: "Career || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper careerss ">
        <Header17 />

        <CareerBanner/>

        <NewCareerMain/>

        <NewJoinZing/>
    
        <CarrerFaq/>
        
        
        <HomeCta/>
        <Footer1 />
      </div>
    </>
  );
}
