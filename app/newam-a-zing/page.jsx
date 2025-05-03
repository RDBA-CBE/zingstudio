import Link from "next/link";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import AcademyContent from "@/components/academy/AcademyContent";
import Header17 from "@/components/headers/Header17";
import Testimonials from "@/components/homes/home-6/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import AmazingContent from "@/components/am-a-zing/Am-a-zingContent";
import Cta from "@/components/homes/home-13/Cta";
import Form from "@/components/service/Amazingform";
import Footer1 from "@/components/footers/Footer1";
import NewAmazingContent from "@/components/service/NewAmazingContent";
import NewForm from "@/components/service/NewForm";
import HomeCta from "@/components/service/HomeCta";

export const metadata = {
  title: "Am-A-Zing || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <section className="about-us-hero d-flex flex-column align-items-center justify-content-center text-center">
      <h1 className="about-us-title fw-bold">Am-A-Zing</h1>
      <div className="breadcrumb text-white-50 mt-3">
        <span className="fw-semibold">Home</span>
        <span className="mx-2 text-white-50">{'>'}</span>
        <span className="text-white fw-semibold">Am-A-Zing</span>
      </div>
    </section>

        <div className="content-block">
          <NewAmazingContent />
        </div>


        <NewForm/>
        {/* <Cta /> */}
        <HomeCta />
        <Footer1 />
      </div>
    </>
  );
}


