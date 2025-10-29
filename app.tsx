import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; 

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
  const scrollToFooter = () => {
    const el = document.getElementById('site-footer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // restore refs and toggle state used in the JSX
  const contentRef1 = useRef<HTMLDivElement | null>(null);
  const contentRef2 = useRef<HTMLDivElement | null>(null);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    const el = contentRef1.current;
    if (!el) return;
    el.style.overflow = 'hidden';
    el.style.transition = 'height 220ms ease, opacity 200ms ease';
    if (open1) {
      const target = el.scrollHeight;
      el.style.height = target + 'px';
      el.style.opacity = '1';
      const t = setTimeout(() => { el.style.height = ''; }, 240);
      return () => clearTimeout(t);
    } else {
      el.style.height = el.scrollHeight + 'px';
      // force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;
      el.style.height = '0px';
      el.style.opacity = '0';
    }
  }, [open1]);

  useEffect(() => {
    const el = contentRef2.current;
    if (!el) return;
    el.style.overflow = 'hidden';
    el.style.transition = 'height 220ms ease, opacity 200ms ease';
    if (open2) {
      const target = el.scrollHeight;
      el.style.height = target + 'px';
      el.style.opacity = '1';
      const t = setTimeout(() => { el.style.height = ''; }, 240);
      return () => clearTimeout(t);
    } else {
      el.style.height = el.scrollHeight + 'px';
      // force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;
      el.style.height = '0px';
      el.style.opacity = '0';
    }
  }, [open2]);

  // scroll to next section when clicking the arrow image (jQuery if available, otherwise plain JS)
  useEffect(() => {
    const selector = '.arrow-scroll';
    const $ = (window as any).jQuery || (window as any).$;

    const handler = (e: Event) => {
      e.preventDefault();
      const btn = (e.currentTarget || e.target) as HTMLElement;
      const hero = btn.closest('.relative.flex.items-center') || btn.closest('div');
      const target = hero?.nextElementSibling as HTMLElement | null;
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    if ($) {
      $(selector).on('click.scrollToNext', handler);
    } else {
      document.querySelectorAll<HTMLElement>(selector).forEach(el => el.addEventListener('click', handler));
    }

    return () => {
      if ($) {
        $(selector).off('.scrollToNext');
      } else {
        document.querySelectorAll<HTMLElement>(selector).forEach(el => el.removeEventListener('click', handler));
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-beige">
      <Header />

      <div className='relative flex items-center' style={{ backgroundImage: 'url(./thumbnail01.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', height: '645px', }} >
        <div className='absolute top-0 left-0 right-0 bottom-0 mix-blend-multiply bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3))] lg:bg-[linear-gradient(270deg,rgba(26,27,30,0)_65.39%,#1A1B1E_100%)]'> </div>
        <div className='max-w-[1400px] mx-auto w-full px-10 lg:px-20 relative z-10'>
            <div className='lg:max-w-[560px]'> 
                <h1 className='text-center lg:text-left mt-9 mb-[70px] font-medium text-[50px] leading-[50px] md:text-[70px] md:leading-[70px] text-white'>
                  We want to 
                  <span className='text-secondary'>take care of your business’s accounting</span>
                </h1> 
                
                <img className='cursor-pointer m-auto lg:m-0 block arrow-scroll' alt="" src="./arrow-down-scroll.svg"/>
                  
            </div>
        </div>
        <img className='absolute bottom-0 right-0' alt="" src="./Vector01.svg"/>
      </div>

      <div className='relative'>
          <div className='absolute top-0 left-0 right-0 bottom-0 mix-blend-multiply' style={{ background: 'var(--beige-gradient)' }}> </div>
          <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 py-20 md:py-[100px] relative z-10'>
              <div className='flex flex-wrap relative z-10'>
                  <div className='w-full md:w-[240px] lg:w-[400px]'>
                      <div className='md:flex items-start'>
                        <img className='mb-6 md:mb-0 mr-[22px]' alt="" src="./setting.svg"/>
                        <h2 className='font-normal text-2xl leading-[34px] flex items-start pb-7 mb-7 border-b border-[#2F324A]'>
                          Practice areas
                        </h2>                        
                      </div>
                      <div className='md:pl-[52px]'>
                        <button onClick={scrollToFooter} className='text-sm font-medium text-white bg-primary h-11 px-10 hover:bg-[#CCAB80] hover:text-[#2F324A] transition duration-200'>Contact us</button>
                      </div>
                  </div>
                  <div className='mt-10 md:mt-0 w-full md:w-[calc(100%-240px)] lg:w-[calc(100%-400px)] flex md:justify-end'>
                      <div className='md:max-w-[647px] flex flex-col md:flex-row gap-6 font-normal leading-[26px]'>
                          <div>
                              <p>
                                  Our company, a member of the Order of Chartered Accountants, can assist you from the incorporation of your company, throughout its life, until the transfer / transfer.
                              </p> 
                              <p>
                                  Present in LUXEMBOURG, our multilingual employees are able to offer you the traditional range of accounting and tax expertise services as well as trust services specific to the Luxembourg financial centre.
                              </p>
                              <p>
                                  The wide range of accounting and tax expertise services includes accounting and annual accounts preparation, tax advice, economic advice for companies in the start-up or restructuring phase, management control and the implementation of internal control procedures.
                              </p>
                          </div>
                          <div>
                              <p>
                                  Without wishing to be exhaustive at this stage, fiduciary services include services for the incorporation of commercial or financial companies, domiciliation, the study and implementation of investment vehicles for tax optimisation in the context of a national or international investment and finally Private Equity.
                              </p>
                              <p>
                                  This is only a brief presentation of our fields of activity and services, to learn more, we invite you to consult our services or simply contact us
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <img className='absolute bottom-0 left-0' alt="" src="./Vector02.svg"/>
          </div>
          
      </div>
      <div className='pb-14 py-20 md:py-[100px] min-h-[900px] relative'>
           <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20'>
              <div className='max-w-[840px] m-auto relative z-[9999]'>
                  <div className='box-question'>
                      <div className='bg-white border-2 border-[#CDCCD8] shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 mb-4'>
                          <div className='flex items-center'>
                              <img className='mr-4' alt="" src="./icon1.svg"/>  
                              <h3 onClick={() => setOpen1(o => !o)} className='font-medium text-xl leading-[30px] text-secondary relative pr-10 w-full cursor-pointer'>
                                  Chartered Accountants
                                  {open1 ? (
                                    <span className='absolute top-0 right-0 w-[30px] h-[30px] bg-[#2F324A] rounded-full flex items-center justify-center'>
                                      <img className='' alt="" src="./arrow-down.svg" style={{ transform: 'rotate(180deg)', transition: 'transform 220ms ease' }} />
                                    </span>
                                  ) : (
                                    <span className='absolute top-0 right-0 w-[30px] h-[30px] bg-[#ffffff] shadow-[6px_10px_20px_rgba(0,0,0,0.12)] rounded-full flex items-center justify-center'>
                                      <img className='' alt="" src="./arrow-down-white.svg" style={{ transform: 'rotate(0deg)', transition: 'transform 220ms ease' }} />
                                    </span>
                                  )}
                              </h3>
                          </div>
                          <div ref={contentRef1} className=''>
                              <div className='mt-5'>
                                  <p>
                                    This is our core competence, to draw up balance sheets and profit and loss accounts in compliance with the laws and regulations in force, to control and adjust the accounts if necessary, to set up and validate internal control procedures.
                                  </p>
                                  <strong className='text-base leading-[26px] font-medium mb-2 block'>
                                    Public accounting is for
                                  </strong>
                                  <ul className='m-0 pl-2 p-0'>
                                      <li className='li-dot flex items-center'>
                                        liberal professions
                                      </li>
                                      <li className='li-dot flex items-center'>
                                        commercial companies
                                      </li>
                                      <li className='li-dot flex items-center'>
                                        industrial societies
                                      </li>
                                      <li className='li-dot flex items-center'>
                                        craft companies, individual or collective
                                      </li>
                                      <li className='li-dot flex items-center'>
                                        financial companies and associations.
                                      </li>
                                  </ul>
                              </div>    
                          </div>
                      </div>
                      <div className='bg-white border-2 border-[#CDCCD8] shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 mb-4'>
                          <div className='flex items-center'>
                              <img className='mr-4' alt="" src="./icon1.svg"/>  
                              <h3 onClick={() => setOpen2(o => !o)} className='font-medium text-xl leading-[30px] text-secondary relative pr-10 w-full cursor-pointer'>
                                  Chartered Accountants
                                  {open2 ? (
                                    <span className='absolute top-0 right-0 w-[30px] h-[30px] bg-[#2F324A] rounded-full flex items-center justify-center'>
                                      <img className='' alt="" src="./arrow-down.svg" style={{ transform: 'rotate(180deg)', transition: 'transform 220ms ease' }} />
                                    </span> 
                                  ) : (
                                    <span className='absolute top-0 right-0 w-[30px] h-[30px] bg-[#ffffff] shadow-[6px_10px_20px_rgba(0,0,0,0.12)] rounded-full flex items-center justify-center'>
                                      <img className='' alt="" src="./arrow-down-white.svg" style={{ transform: 'rotate(0deg)', transition: 'transform 220ms ease' }} />
                                    </span>
                                  )}
                              </h3>
                          </div>
                          <div ref={contentRef2} className=''>
                              <div className='mt-5'>
                              <p>
                                This is our core competence, to draw up balance sheets and profit and loss accounts in compliance with the laws and regulations in force, to control and adjust the accounts if necessary, to set up and validate internal control procedures.
                              </p>
                              <strong className='text-base leading-[26px] font-medium mb-2 block'>
                                Public accounting is for
                              </strong>
                              <ul className='m-0 pl-2 p-0'>
                                  <li className='li-dot flex items-center'>
                                    liberal professions
                                  </li>
                                  <li className='li-dot flex items-center'>
                                    commercial companies
                                  </li>
                                  <li className='li-dot flex items-center'>
                                    industrial societies
                                  </li>
                                  <li className='li-dot flex items-center'>
                                    craft companies, individual or collective
                                  </li>
                                  <li className='li-dot flex items-center'>
                                    financial companies and associations.
                                  </li>
                              </ul>
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
      <div className='py-20 md:py-[120px] relative'>
           <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20'>
                <div className='flex items-start justify-between mb-[60px]'>
                    <h2 className='font-normal text-2xl leading-[34px] text-primary'>
                       Our News           
                    </h2>       
                    <Link to="/News" className='font-normal text-sm leading-[26px] flex items-center'>
                         All News
                         <svg className='ml-[17px]' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#2F324A" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg> 
                    </Link>       
                </div> 
                <div className='grid md:grid-cols-3 gap-10'>
                     <div>
                          <div className='mb-[20px]'>
                              <img className='w-full h-[195px] object-cover' alt="" src="./thumbnail02.jpg"/>  
                          </div>        
                          <div>
                              <h3 className='font-medium text-xl leading-[30px] text-primary mb-3'>
                                  Lorem ipsum dolor sit amet consectetur. Tortor in egestas tellus tristique ultricies v...
                              </h3>
                              <strong className='font-bold text-xs leading-3 text-[#9CA3AF] mb-3'>
                                  13 Aug 2023 / Fiduciaire Premier Luxembourg S.A.
                              </strong>
                              <div className='opacity-60'>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur. Tortor in egestas tellus tristique ultricies vel. Lectus in lectus egestas dictum m...
                                </p>
                              </div>
                              <Link to="/News/single" className="inline-block w-full sm:w-auto text-sm leading-[44px] font-medium text-white bg-primary h-11 px-10 hover:bg-[#CCAB80] hover:text-[#2F324A] transition duration-200">Read more</Link>
                          </div>
                     </div>
                     <div>
                          <div className='mb-[20px]'>
                              <img className='w-full h-[195px] object-cover' alt="" src="./thumbnail02.jpg"/>  
                          </div>        
                          <div>
                              <h3 className='font-medium text-xl leading-[30px] text-primary mb-3'>
                                  Lorem ipsum dolor sit amet consectetur. Tortor in egestas tellus tristique ultricies v...
                              </h3>
                              <strong className='font-bold text-xs leading-3 text-[#9CA3AF] mb-3'>
                                  13 Aug 2023 / Fiduciaire Premier Luxembourg S.A.
                              </strong>
                              <div className='opacity-60'>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur. Tortor in egestas tellus tristique ultricies vel. Lectus in lectus egestas dictum m...
                                </p>
                              </div>
                              <Link to="/News/single" className="inline-block w-full sm:w-auto text-sm leading-[44px] font-medium text-white bg-primary h-11 px-10 hover:bg-[#CCAB80] hover:text-[#2F324A] transition duration-200">Read more</Link>
                          </div>
                     </div> 
                     <div>
                          <div className='mb-[20px]'>
                              <img className='w-full h-[195px] object-cover' alt="" src="./thumbnail02.jpg"/>  
                          </div>        
                          <div>
                              <h3 className='font-medium text-xl leading-[30px] text-primary mb-3'>
                                  Lorem ipsum dolor sit amet consectetur. Tortor in egestas tellus tristique ultricies v...
                              </h3>
                              <strong className='font-bold text-xs leading-3 text-[#9CA3AF] mb-3'>
                                  13 Aug 2023 / Fiduciaire Premier Luxembourg S.A.
                              </strong>
                              <div className='opacity-60'>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur. Tortor in egestas tellus tristique ultricies vel. Lectus in lectus egestas dictum m...
                                </p>
                              </div>
                              <Link to="/News/single" className="inline-block w-full sm:w-auto text-sm leading-[44px] font-medium text-white bg-primary h-11 px-10 hover:bg-[#CCAB80] hover:text-[#2F324A] transition duration-200">Read more</Link>
                          </div>
                     </div>              
                </div>                
            </div>                        
      </div>
      <Footer />
    </div>
  );
}