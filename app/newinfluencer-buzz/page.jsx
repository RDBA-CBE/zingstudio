
import React from "react";
import Header17 from "@/components/headers/Header17";


import Footer1 from "@/components/footers/Footer1";
import HomeCta from "@/components/service/HomeCta";
import AcademyFAQ from "@/components/newabout/AcademyFAQ";

import NewDedicatedSupport from "/components/service/NewDedicatedSupport";

import NewWhyChooseInfluence from "@/components/service/NewWhyChooseInfluence";
import NewHowItWorks from "@/components/service/NewHowItWorks";
import NewInfluenceBanner from "@/components/service/NewInfluenceBanner";
import NewWhyJoinZingFluence from "@/components/service/NewWhyJoinZingFluence";

export const metadata = {
  title: "Zing Digital Marketing Mastery || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {

    

      const faqData = [
        {
          id: "faq6",
          question: "1. How do I join Influencer Buzz?",
          answer:
            "Simply sign up on our platform, complete your profile, and we’ll connect you with brand collaborations that match your style and audience.",
        },
        {
          id: "faq7",
          question: "2. What types of brands can I collaborate with?",
          answer:
            "We partner with a wide range of brands across fashion, beauty, tech, lifestyle, and more—ensuring there’s something for every influencer.",
        },
        {
          id: "faq8",
          question: "3. Do I need a minimum number of followers?",
          answer:
            "Payment terms vary by campaign, but we ensure secure and timely payments once campaign requirements are met.",
        },
        {
          id: "faq9",
          question: "4. How do I get paid for collaborations?",
          answer:
            "Payment terms vary by campaign, but we ensure secure and timely payments once campaign requirements are met.",
        },
        {
          id: "faq10",
          question: "5. Can I choose the campaigns I want to work on?",
          answer:
            "Absolutely! You have complete freedom to choose the campaigns that resonate with your audience and personal brand.",
        },
        {
          id: "faq11",
          question: "6. What kind of support will I receive?",
          answer:
            "Our dedicated support team is available throughout the collaboration process, offering guidance, campaign insights, and troubleshooting whenever needed.",
        },
        {
          id: "faq12",
          question: "7. How are collaborations managed?",
          answer:
            "We handle the logistics, timelines, and brand communication so you can focus on creating engaging content that delivers results.",
        },
        {
          id: "faq13",
          question: "8. Will I have creative control over my content?",
          answer:
            "Yes! We value your unique voice and style, giving you the freedom to create content that feels authentic to you while aligning with brand goals.",
        },
      ];


      const WhyChoose = [
        {
          title: 'Instant Setup',
          description:
            'We connect you with reputable brands that align with your personal style and values, ensuring collaborations feel natural and resonate with your audience.',
        },
        {
          title: 'Tailored Collaborations',
          description:
            'Our partnerships are carefully selected to match your niche, allowing authentic promotion and long-term growth.',
        },
        {
          title: 'Dedicated Support',
          description:
            'Receive guidance from our expert team throughout your brand collaboration journey, from onboarding to execution.',
        },
      ];

      const HowItWorks = [
        { id: '001', title: 'Right Brands ', 
            description: '3 Months + 3 Months Internship', sec:"0.2s" },
        { id: '002', title: 'Plan & Collaborate',
             description: '₹25,000',sec:"0.4s" },
        {
          id: '003',
          title: 'Create & Share',
          description:
            '31/05/2025',
            sec:"0.6s"
        },
        { id: '002', title: 'Measure & Grow',
             description: '₹25,000',sec:"0.4s" },
        
      ];

      const whyJoindata= [
        { number: '01', title: 'Brand Collaborations',desc:'Partner with reputable brands that align with your values, enhancing your credibility and audience engagement.' },
        { number: '02', title: 'Exclusive Campaigns',desc:'Access high-profile campaigns, product launches, and partnerships tailored to showcase your unique voice and expertise.' },
        { number: '03', title: 'Monetize Your Influence',desc:'Leverage your platform through paid collaborations, sponsorships, and long-term brand partnerships, turning your influence into sustainable income.' },
        { number: '04', title: 'Expand Your Reach',desc:'Grow your audience through strategic partnerships and campaigns designed to connect you with new, relevant followers.' },
        { number: '05', title: 'Creative Freedom' ,desc:'Maintain your authentic voice with the freedom to create content that reflects your style, supported by strategic guidance when needed.'},
        { number: '06', title: 'Insightful Analytics',desc:'Receive detailed performance analytics to measure campaign success, optimize content strategy, and strengthen your influence.' },
    ]


const banner = {
  title:"Monetize Your Social Media Influence Today!",
  subtitle:"Join a Growing Community of Over 200,000 Influencers and",
  desc:"Get Paid for Every",
  services : [
      'POST', 'TWEET', 'REEL', 'SNAP',
      'VIDEO', 'REVIEW', 'STORY', 'SHOOT'
    ]

}
    

  return (
    <>
      <div className="page-wraper  " style={{background:"#fff"}}>
        <Header17 />
        
        <NewInfluenceBanner banner={banner} />

         <NewWhyChooseInfluence WhyChoose={WhyChoose} title="Why Choose Us?"/>

        <NewHowItWorks HowItWorks={HowItWorks} title="How Does It Work ?"/>

        <NewWhyJoinZingFluence title="Why join Zingfluence <br/> Buzz ?" whyJoindata={whyJoindata}/>

        <NewDedicatedSupport/>
     

         
         <AcademyFAQ faqData={faqData}/>
        <HomeCta />
        <div className="home-footer" >
        <Footer1 />
        </div>
      </div>
    </>
  );
}