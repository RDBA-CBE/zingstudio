"use client";
import Image from "next/image";
import { clientLogos } from "@/data/clients";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewZingSocialMediaTools({
  parentClass = "client-logo-carousel owl-loaded owl-theme owl-carousel owl-dots-none owl-btn-center-lr owl-btn-3  pt-4 tools",
  border = false,
  ToolsContent,
  Tools1,
  Tools2,
  Tools3
}) {

  return (
    <section className="NewTools mb-5 pb-5">
      {/* <div className="sort-title clearfix text-center m-b20">
        <h4>Our Clients</h4>
        <p style={{ marginBottom: "0px" }}>Dummy Text</p>
      </div> */}

      <div className="section-head style2 text-center mb-0 ">
        <h2 className="title pt-5 text-black font-48">Tools That you will learn</h2>
        <h4 className="text-black mt-3 font-22"> <b > {ToolsContent?.tool1Num} </b>{ToolsContent?.tool1Title}</h4>
                    <p className="text-black mb-0" >{ToolsContent?.tool1worth}</p>
      </div>

        <div className="bg-white">
             <div className="container-fluid">
           <div className="row">
           <div className="col-10 col-xl-8 mx-auto">
             <Swiper
             // slidesPerView={5}
             spaceBetween={30}
             slidesPerGroup={2}
             style={{ maxWidth: "100vw", overflow: "hidden" }}
             loop
             autoplay={{
               delay: 100,
             }}
             speed={2500}
             breakpoints={{
               0: {
                 slidesPerView: 2,
               },
     
               480: {
                 slidesPerView: 3,
               },
     
               767: {
                 slidesPerView: 5,
               },
               
               1024:{
                 slidesPerView: 6,
               },
              
             }}
             modules={[Autoplay]}
             className={parentClass}
           >
             {Tools1?.map((item, index) => (
               <SwiperSlide className="item" key={index}>
                 <div className="ow-client-logo bg-white">
                   <div className={`client-logo bg-white ${border ? "border" : ""}`}>
                     <a href="#">
                       <Image width={100} height={150} src={item.img} alt="" className="tools-img" style={{height:"100px"}}/>
                     </a>
                   </div>
                 </div>
               </SwiperSlide>
             ))}
     
             
           </Swiper>
           
         
           </div>
           </div>
         </div>
             </div>
          
     
     
           {Tools2 &&
             <div className="container">
             <div className="row">
             <div className="col-10 col-xl-8 mx-auto">
               
             <Swiper
                  // slidesPerView={5}
                  spaceBetween={30}
                  slidesPerGroup={2}
                  style={{ maxWidth: "100vw", overflow: "hidden" }}
                  loop
                  
                  autoplay={{
                    delay: 100,
                    reverseDirection:true
                  }}
                  speed={2500}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
          
                    480: {
                      slidesPerView: 3,
                    },
          
                    767: {
                      slidesPerView: 5,
                    },
                    1000: {
                      slidesPerView: 6,
                    },
                  }}
                  modules={[Autoplay]}
                  className={parentClass}
                >
                  {Tools2?.map((item, index) => (
                    <SwiperSlide className="item" key={index}>
                      <div className="ow-client-logo wow fadeInUp will-animate bg-white">
                        <div className={`client-logo bg-white ${border ? "border" : ""}`}>
                          <a href="#">
                            <Image width={100} height={150} src={item.img} alt="" className="tools-img" style={{height:"100px"}}/>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
          
                  
                </Swiper>
                </div>
             </div>
         </div>
             
           }
     
         {Tools3 &&
             <>
               
                   <div className="section-head style2 text-center pt-5 mb-0 bg-white">
                         <h4 className="text-dark mb-0"> <b style={{color:"#e21100"}}> {ToolsContent?.tool2Num} </b>{ToolsContent?.tool2Title}</h4>
                       
                     </div>
     
                     <div className="bg-white">
                     <div className="container ">
                     <div className="row">
                         <Swiper
                         // slidesPerView={5}
                         spaceBetween={30}
                         slidesPerGroup={2}
                         style={{ maxWidth: "100vw", overflow: "hidden" }}
                         loop
                         
                         autoplay={{
                         delay: 100,
                         reverseDirection:true
                         }}
                         speed={2500}
                         breakpoints={{
                         0: {
                             slidesPerView: 2,
                         },
                 
                         480: {
                             slidesPerView: 4,
                         },
                 
                         767: {
                             slidesPerView: 4,
                         },
                         1000: {
                             slidesPerView: 6,
                         },
                         }}
                         modules={[Autoplay]}
                         className={parentClass}
                     >
                         {Tools3?.map((item, index) => (
                         <SwiperSlide className="item" key={index}>
                             <div className="ow-client-logo bg-white">
                             <div className={`client-logo bg-white ${border ? "border" : ""}`}>
                                 <a href="#">
                                 <Image width={100} height={150} src={item.img} alt="" className="tools-img" style={{height:"100px"}}/>
                                 </a>
                             </div>
                             </div>
                         </SwiperSlide>
                         ))}
                 
                         
                         </Swiper>
                     </div>
                     </div>
                     </div>
     
                    
             </>
         }


    </section>
  );
}
