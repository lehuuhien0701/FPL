import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer'; 

// Custom Icons
const CheckIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.84192 12.0008C5.56569 12.0008 5.28999 11.8971 5.07904 11.6891L0 6.68272L1.52576 5.17825L5.84192 9.43268L14.4742 0.923828L16 2.4283L6.6048 11.6891C6.39385 11.8971 6.11816 12.0008 5.84192 12.0008Z" fill="#BBA25A"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.19727 12.1203L9.0006 8.31703C9.44977 7.86787 9.44977 7.13287 9.0006 6.6837L5.19727 2.88037" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function App() { 
  // attach click -> scroll to next section for arrow image
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.arrow-scroll'));
    if (els.length === 0) return;

    const onClick = (e: Event) => {
      e.preventDefault();
      const btn = (e.currentTarget || e.target) as HTMLElement;
      // prefer exact hero container, fallback to any .relative ancestor
      const hero = btn.closest('.relative.flex.items-center') || btn.closest('.relative');
      const target = hero?.nextElementSibling as HTMLElement | null;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    els.forEach(el => el.addEventListener('click', onClick));
    return () => els.forEach(el => el.removeEventListener('click', onClick));
  }, []);

  return (
    <div className="min-h-screen bg-beige relative">
      <Header />
      <div className='relative flex items-center' style={{ backgroundImage: 'url(./thumbnail06.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', height: '430px', }}>
        <div className='absolute top-0 left-0 right-0 bottom-0 mix-blend-multiply bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3))] lg:bg-[linear-gradient(270deg,rgba(26,27,30,0)_65.39%,#1A1B1E_100%)]'> </div>
        <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 relative z-10'>
            <div className='lg:max-w-[560px]'> 
                <h1 className='text-center lg:text-left mt-9 mb-[70px] font-medium text-[50px] leading-[50px] md:text-[70px] md:leading-[70px] text-white'>
                  Economic consulting 
                </h1> 
                
                <img className='cursor-pointer m-auto lg:m-0 block arrow-scroll' alt="" src="./arrow-down-scroll.svg"/>
                  
            </div>
        </div>
        <img className='absolute bottom-0 right-0' alt="" src="./Vector01.svg"/>
      </div>
 
      <div className='pb-14 py-20 md:py-[100px] min-h-[900px] relative'>
           <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20'>
              <div className='max-w-[840px] m-auto relative z-20'>
                  <div className='box-question'> 
                      <div className='bg-white border-2 border-[#CDCCD8] shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 mb-4'>
                          <div className='flex items-center'>
                              <img className='mr-4' alt="" src="./icon1.svg"/>  
                              <h3 className='font-medium text-xl leading-[30px] text-secondary relative w-full'>
                                  Chartered Accountants 
                              </h3>
                          </div>
                          <div className=''>
                              <div className='mt-5 border-2 border-[#EDECF6]'>
                                  <div className='px-5 pt-5 border-b-2 border-[#EDECF6]'> 
                                      <strong className='text-base leading-[26px] font-medium text-secondary mb-2 block'>
                                        Business management
                                      </strong>
                                      <p>
                                        Beyond the foundational support in provisional budgeting and management dashboards, 
                                        we delve into dynamic financial forecasting that adapts to market fluctuations. Our IT tools, 
                                        for instance, integrate real-time data analytics to track key performance indicators (KPIs) 
                                        like cash flow, gross margin, and inventory turnover. For a Luxembourg-based retail SME, 
                                        this meant they could adjust stock levels weekly based on predictive sales models, reducing 
                                        holding costs by 18% within a quarter.
                                      </p>
                                      <p>
                                        We also offer customized reporting frameworks tailored to stakeholders’ needs. Shareholders 
                                        might receive concise summaries of revenue growth and dividend projections, while operational 
                                        teams get granular insights into departmental expenses and efficiency metrics. This clarity 
                                        empowers decision-making at all levels, turning financial data from a compliance task into a strategic asset.
                                      </p>
                                  </div>
                                  <div className='px-5 pt-5 border-b-2 border-[#EDECF6]'> 
                                      <strong className='text-base leading-[26px] font-medium text-secondary mb-2 block'>
                                        Transfer/cessation of a company
                                      </strong>
                                      <p>
                                        In the human dimension, we facilitate succession planning workshops to align the entrepreneur’s 
                                        vision with potential successors—whether family members, existing employees, or external 
                                        buyers. We recently supported a Luxembourg manufacturing firm where we helped the founder 
                                        document institutional knowledge (from supplier relationships to unique production processes) 
                                        and mentor the new leadership, ensuring a 6-month transition period with zero operational disruption.
                                      </p>
                                      <p>
                                        Economically, our valuation process goes beyond balance sheets. We conduct market comparables 
                                        analysis, assessing recent transactions of similar businesses in Luxembourg’s ecosystem, and 
                                        factor in intangible assets like brand reputation and intellectual property. For a tech 
                                        startup, this approach uncovered the true value of its proprietary software, leading to 
                                        a valuation 30% higher than initial estimates.
                                      </p>
                                  </div>
                                  <div className='px-5 pt-5'> 
                                      <strong className='text-base leading-[26px] font-medium text-secondary mb-2 block'>
                                        Diagnosis of companies
                                      </strong>
                                      <p>
                                        Our diagnostic process employs a 360° assessment model covering financial, operational, 
                                        marketing, and human resource domains. For a struggling hospitality business in Luxembourg, 
                                        we analyzed customer feedback data to redesign service workflows, trained staff on upselling 
                                        techniques, and renegotiated supplier contracts—resulting in a 25% increase in customer 
                                        retention and a 15% boost in profit margins within a year.
                                      </p>
                                      <p>
                                        We also specialize in digital transformation diagnostics. For SMEs lagging in tech adoption, 
                                        we evaluate their current systems (e.g., CRM, e-commerce platforms) and map out phased 
                                        implementation plans. A local consultancy, for example, went from manual client reporting 
                                        to an automated dashboard system, cutting administrative time by 40% and freeing up resources 
                                        for business development.
                                      </p>
                                  </div>
                              </div>    
                          </div>
                      </div>
                  </div>
              </div>
           </div>
           
           <div className=''>
              <div 
                  className="min-h-[332px] absolute z-10 left-0 right-0 bottom-0 overflow-hidden" 
                  style={{ backgroundImage: "url('/Vector3.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "bottom center", backgroundSize: "cover" }}
              > 
              
              </div>
            </div> 
      </div>
      <Footer /> 
    </div>
  );
}