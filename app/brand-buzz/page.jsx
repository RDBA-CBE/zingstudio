
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
import NewWhyBrandBuzz from "@/components/service/NewWhyBrandBuzz";
import NewInfluencerMarketingService from "@/components/service/NewInfluencerMarketingService";
import HowDoesItWorkBrand from "../(service)/HowDoesItWorkBrand";


export const metadata = {
  title: "Zing Digital Marketing Mastery || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {

    

  const faqData = [
    {
      id: "faq6",
      question: "1. What is influencer marketing, and how can it benefit my brand?",
      answer:
        "Influencer marketing involves collaborating with influencers who have a loyal following to promote your brand. It boosts brand visibility, builds trust, and drives engagement by leveraging authentic content.",
    },
    {
      id: "faq7",
      question: "2. How do you select the right influencers for my brand?",
      answer:
        "We analyze your brand's target audience, values, and campaign goals to match you with influencers who align perfectly with your brand identity and can deliver measurable results.",
    },
    {
      id: "faq8",
      question: "3. What types of influencer partnerships are available?",
      answer:
        "We offer various partnership options, including sponsored posts, product reviews, brand ambassadorships, event collaborations, and affiliate marketing campaigns.",
    },
    {
      id: "faq9",
      question: "4. How is influencer marketing success measured?",
      answer:
        "Success is tracked using key performance indicators (KPIs) such as engagement rates, reach, impressions, click-through rates, and conversion metrics tailored to your campaign objectives.",
    },
    {
      id: "faq10",
      question: "5. Is influencer marketing suitable for small businesses?",
      answer:
        "Absolutely. Influencer marketing is scalable and can be tailored to suit businesses of all sizes. Micro-influencers, in particular, offer high engagement rates at cost-effective rates.",
    },
    {
      id: "faq11",
      question: "6. What is the typical duration of an influencer marketing campaign?",
      answer:
        "Campaign duration varies based on objectives. It can range from a single post or event promotion to long-term partnerships spanning several months for sustained impact.",
    },
    {
      id: "faq12",
      question: "7. How much does an influencer marketing campaign cost?",
      answer:
        "Costs depend on factors such as influencer reach, engagement rates, content requirements, and campaign duration. We offer customizable packages to suit various budgets.",
    },
    {
      id: "faq13",
      question: "8. Can influencer marketing help with brand loyalty?",
      answer:
        "Yes. Long-term collaborations with influencers who resonate with your audience foster brand trust and loyalty, leading to sustained customer relationships.",
    },
    {
      id: "faq14",
      question: "9. What industries benefit most from influencer marketing?",
      answer:
        "Influencer marketing is highly versatile and works well across industries, including fashion, beauty, technology, travel, lifestyle, food, and fitness.",
    },
    {
      id: "faq15",
      question: "10. How do you ensure influencer content aligns with our brand values?",
      answer:
        "We work closely with both brands and influencers, providing clear guidelines and approval processes to ensure all content aligns with your brand voice and objectives.",
    },
  ];


      const WhyChoose = [
        {
          id:"01",
          title: 'Strategic Partnerships',
          description:
            'We connect you with reputable brands that align with your personal style and values, ensuring collaborations feel natural and resonate with your audience.',
        },
        {
          id:"02",
          title: 'Tailored Collaborations',
          description:
            'Collaborate with influencers to craft data-driven campaigns designed to convey your brand message authentically and effectively.',
        },
        {
          id:"03",
          title: 'Compelling Content',
          description:
            'Influencers produce high-quality, engaging content that enhances brand visibility, fosters trust, and resonates with target audiences.',
        },
        {
          id:"04",
          title: 'Maximized Engagement',
          description:
            'Campaigns are strategically launched across relevant digital platforms, driving meaningful engagement and sustained brand awareness.',
        },
        {
          id:"05",
          title: 'CPerformance Insights',
          description:
            'Leverage detailed analytics to measure campaign effectiveness, optimize strategies, and ensure continuous growth and long-term brand impact.',
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
        { number: '01', title: 'Maximized Reach',desc:"Tap into diverse audiences through strategic influencer collaborations that elevate brand visibility across multiple platforms." },
        { number: '02', title: 'Targeted Marketing',desc:"Reach the right audience at the right time with tailored campaigns designed for specific demographics and interests." },
        { number: '03', title: 'Measurable Results',desc:"Benefit from data-driven insights and performance tracking that provide clear ROI and inform future marketing strategies." },
        { number: '04', title: 'Brand Credibility Boost',desc:"Position your brand as trustworthy and relevant by partnering with influ" },
        { number: '05', title: 'Authentic Connections',desc:"Build trust and credibility with your target audience through genuine endorsements from influencers who resonate with your brand values." },
        { number: '06', title: 'Enhanced Engagement',desc:"Drive meaningful interactions, conversations, and community building with engaging influencer-led content." },
        { number: '07', title: 'Cost-Effective Solutions',desc:"Achieve maximum impact with flexible influencer campaigns that deliver results within your budget." },
        { number: '08', title: 'Sustained Brand Impact',desc:"Create long-term brand value and loyalty through continuous influencer partnerships and compelling content strategies." },
    ]

    const Features = {
      subtitle:"Brand Marketing Services by Zingfluence",
      title:"Partner with Zingfluence today and take your brand to new heights !",
      description:"At Zingfluence, we specialize in delivering comprehensive 360-degree influencer marketing campaigns that help brands connect with the right audience. As one of the most trusted influencer marketing agencies in India, we work with top influencers across multiple platforms—YouTube, Instagram, Snapchat, Facebook, Twitter, LinkedIn, and more—ensuring maximum reach and engagement for your brand. Our data-driven, hyper-targeted strategies are designed to deliver authentic communication and unmatched value.",
    
    
    }
    

    
    const Feaservices = [
      { title: "Enhanced Brand Visibility", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium",description:"Amplify your brand’s presence with influencer-driven campaigns that reach wider, targeted audiences." },
      { title: "Enhanced Brand Credibility", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Gain consumer trust as influencers endorse your brand with authentic, relatable content."},
      { title: "Cost-Efficient Marketing", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium" , description:"Achieve maximum impact with campaigns that deliver results without exceeding your budget."},
      { title: "Authentic Audience Engagement ", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall",description:"Build meaningful connections through trusted influencers who resonate with your target market." },
      { title: "Optimized Conversion Rates", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Drive more leads and sales with influencer collaborations that turn audience engagement into action."},
      { title: "Data-Driven Insights", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium", description:"Access real-time analytics to track performance, optimize strategies, and ensure continuous growth." },
    ];


const banner = {
  title:"Create the Buzz. Build the Brand.",
  subtitle:"Harness the power of influencer marketing to amplify your brand’s voice, <br/> connect authentically, and make a lasting impact",
  desc:"Level up your brand with influencer vibes that",
  services : [
    "Connect", "Captivate", "Convert"
    ]

}
    

  return (
    <>
      <div className="page-wraper  " style={{background:"#fff"}}>
        <Header17 />
        
        <NewInfluenceBanner banner={banner} />

        <HowDoesItWorkBrand WhyChoose={WhyChoose}/>

         {/* <NewWhyChooseInfluence WhyChoose={WhyChoose} title="How does it work ?"/> */}
         <NewInfluencerMarketingService Features={Features} Feaservices={Feaservices} />

        
        <NewWhyBrandBuzz />
        <NewWhyJoinZingFluence title="The Best at Amplifying Your Brand with Influence That Matters." whyJoindata={whyJoindata}/>

       
     

         
         <AcademyFAQ faqData={faqData}/>
        <HomeCta />
        <div className="home-footer" >
        <Footer1 />
        </div>
      </div>
    </>
  );
}