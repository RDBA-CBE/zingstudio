
import Header17 from "@/components/headers/Header17";

// import HomeService from "@/components/service/HomeServices";
import React from "react";

import Footer13 from "@/components/footers/Footer13";
import Am_a_Zing from "@/components/service/Am-a-zing";

import CourseModulesHome from "@/components/service/CourseModulesHome";

import HomeHero from "@/components/service/HomeHero";

import HomeCta from "@/components/service/HomeCta";

import ResponsiveHomeBanner from "@/components/service/ResponsiveHomeBanner";
import HomeServiceStatic from "@/components/service/HomeServiceStatic";
import HomeSpecialize from "@/components/service/HomeSpecialize";
import HomeUSP from "@/components/service/HomeUSP";
import ITeach from "@/components/service/ITeach";
import HomeSpecialPrograms from "@/components/service/HomeSpecialProgram";
import SupportWomen from "@/components/service/SupportWomen";
import NewResponsiveHomeBanner from "@/components/service/NewResponsiveHomeBanner";
import NewSpecialize from "@/components/service/NewSpecialize";
import NewITeach from "@/components/service/NewITeach";
import NewHomeWorks from "@/components/service/NewHomeWorks";
import NewSpecialProgram from "@/components/service/NewSpecialProgram";
import NewSupportWomen from "@/components/service/NewSupportWomen";
import NewHomeBanner from "@/components/service/NewHomeBanner";
import Footer1 from "@/components/footers/Footer1";
// import HomeService from "@/components/service/HomeService"


export const metadata = {
  title: "Home || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function NewHome() {
 
  return (
    <>
      <div className="page-wraper bg-white ">
        <Header17 />
        <div className="page-content bg-white pb-0" >
        {/* <NewResponsiveHomeBanner/> */}
        <NewHomeBanner/>



        <NewSpecialize/>
        {/* <HomeSpecialize/> */}

        <HomeUSP/>
        <NewHomeWorks/>
        <NewITeach/>
        
        <NewSpecialProgram/>
        <NewSupportWomen/>


        {/* <HomeHero /> */}
        {/* <ITeach/> */}
        
          {/* <HomeSpecialPrograms/> */}

        

        

        
        </div>
        {/* <SupportWomen/> */}

        <HomeCta />
        <div className="home-footer" >
        <Footer1 />
        </div>
       
      </div>
    </>
  );
}
