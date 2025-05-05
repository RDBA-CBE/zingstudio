import React from "react";
import Link from "next/link";
export default function HomeCta() {
  return (
    <div className="section-full call-action home-cta  mt-5" 
    // style={{background:"linear-gradient(to right, #984674, #4c48d0)"}}
    style={{background:"#1a43bf",position:"static", }}
    >
      <div className="container" >
        <div className="row pb-4 " style={{borderBottom:"1px solid #ffffff7a"}}>
          <div className="col-lg-9 text-white "
      >
            <h2 className="title" style={{textAlign:"left"}}>Let’s Build Something Amazing! 
            </h2>
            <p className="m-b0 " style={{textAlign:"left"}}>
            Got big ideas? We’re here to make them happen!  From sleek websites to powerful digital strategies, let’s team up and take your brand to the next level. Let’s go!
            </p>
          </div>
          <div className="col-lg-3  d-flex justify-content-start justify-content-lg-end mt-3 mt-lg-0"  >
            {/* <Link
              href={`/contact`}
              className="site-button btnhover13 white align-self-center outline ms-auto outline-2"
            >
              Contact Us
            </Link> */}
            <Link
              href={`/contact`}
              className="btn btn-outline-light mt-2 custom-about-btn ms-lg-auto  text-black fw-bold" style={{background:"#fff",border:"1px solid #fff", borderRadius:"30px",padding:"15px 30px",height:"fit-content"}}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
