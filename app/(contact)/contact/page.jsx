import Contactbannner from "@/app/(service)/Contactbannner";
import ContactHeader from "@/app/(service)/ContactHeader";
import ContactMain from "@/app/(service)/ContactMain";
import NewContactMainForm from "@/app/(service)/NewContactMainForm";
import Contact2 from "@/components/contact/Contact2";
import Footer1 from "@/components/footers/Footer1";
import Footer13 from "@/components/footers/Footer13";


import Header17 from "@/components/headers/Header17";
import HomeCta from "@/components/service/HomeCta";
import React from "react";

export const metadata = {
  title: "Contact || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div >
        <Header17 />
        <Contactbannner/>
        <ContactHeader/>
        <NewContactMainForm/>
        {/* <ContactMain/> */}
       
        <HomeCta/>
        <Footer1 />
      </div>
    </>
  );
}
