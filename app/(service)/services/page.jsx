import Footer1 from "@/components/footers/Footer1";
import Header17 from "@/components/headers/Header17";
import HomeCta from "@/components/service/HomeCta";
import NewSerBanner from "@/components/service/NewSerBanner";
import ServiceList from "@/components/service/ServiceList";



import React from "react";

export const metadata = {
  title: "Services || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
        <Header17 />

        <NewSerBanner/>

        <ServiceList/>
        
       <HomeCta/>
        <Footer1 />
      </div>
    </>
  );
}
