import About2 from "@/components/about/About2";
import Banner from "@/components/about/Banner";
import Progress from "@/components/about/Progress";
import Cta from "@/components/homes/home-13/Cta";

import Header17 from "@/components/headers/Header17";
import Services from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-10/Team";
import Services1 from "@/components/homes/home-15/Services1";
import About from "@/components/homes/home-3/About";
import React from "react";
import Footer13 from "@/components/footers/Footer13";
import AboutCta from "@/components/service/AboutCta";
import WhatIsZing from "@/components/service/WhatIsZing";
import WhyMe from "@/components/newabout/WhyMe";
import NewBanner from "@/components/newabout/NewBanner";
import DefineMe from "@/components/service/DefineMe";
import Footer1 from "@/components/footers/Footer1";
import NewAboutHero from "@/components/newabout/NewAboutHero";
import NewAboutSpecialize from "@/components/newabout/NewAboutSpecialize";
import AboutInfoGraphic from "@/components/newabout/AboutInfoGraphic";
import HomeCta from "@/components/service/HomeCta";
import NewDefineZing from "@/components/newabout/NewDefineZing";

export const metadata = {
  title: "About || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper bg-white ">
        <Header17 />
        
        
          <NewBanner/>

          <NewAboutHero/>

          <NewAboutSpecialize/>

          {/* <AboutInfoGraphic/> */}

          <WhyMe/>

          <NewDefineZing/>


  
        <HomeCta />
        <div className="home-footer" >
        <Footer1 />
        </div>
      </div>
    </>
  );
}
