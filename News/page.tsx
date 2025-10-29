import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const scrollToFooter = () => {
    const el = document.getElementById('site-footer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
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
      // collapse
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
      // find hero container marked with data-hero
      const hero = btn.closest('[data-hero]') as HTMLElement | null;
      const target = hero?.nextElementSibling as HTMLElement | null;
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    if ($) {
      // jQuery present
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

      <div data-hero className='relative flex items-center' style={{ backgroundImage: 'url(./thumbnail03.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', height: '430px', }} >
        <div className='absolute top-0 left-0 right-0 bottom-0 mix-blend-multiply bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3))] lg:bg-[linear-gradient(270deg,rgba(26,27,30,0)_65.39%,#1A1B1E_100%)]'> </div>
        <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 relative z-10'>
            <div className='lg:max-w-[560px]'> 
                <h1 className='text-center lg:text-left mt-9 mb-[70px] font-medium text-[50px] leading-[50px] md:text-[70px] md:leading-[70px] text-white'>
                  News 
                </h1> 
                
                <img className='cursor-pointer m-auto lg:m-0 block arrow-scroll' alt="" src="./arrow-down-scroll.svg"/>
                  
            </div>
        </div>
        <img className='absolute bottom-0 right-0' alt="" src="./Vector01.svg"/>
      </div>
 
      <div className='pt-24 py-28 relative'>
           <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20'> 
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
            <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 pt-20'>
                <div className='wp-pageNavi flex justify-between items-center'>
                    <div>
                        <a href='' className='flex items-center font-normal text-sm leading-[26px] text-primary'>
                          <svg className='mr-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.8332 10.0001H4.1665M4.1665 10.0001L9.99984 15.8334M4.1665 10.0001L9.99984 4.16675" stroke="#2F324A" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          Previous
                        </a>
                    </div>
                    <div className='flex items-center font-normal text-sm leading-[26px] text-primary'>
                        <a className='w-10 h-10 flex items-center justify-center'>1</a>
                        <a className='w-10 h-10 flex items-center justify-center'>2</a>
                        <a className='w-10 h-10 flex items-center justify-center'>3</a>
                        <a className='w-10 h-10 flex items-center justify-center'>...</a>
                        <a className='w-10 h-10 flex items-center justify-center'>8</a>
                        <a className='w-10 h-10 flex items-center justify-center'>9</a>
                        <a className='w-10 h-10 flex items-center justify-center'>10</a>
                    </div>
                    <div>
                        <a href='' className='flex items-center font-normal text-sm leading-[26px] text-primary'> 
                          Next
                          <svg className='ml-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.1665 10.0001H15.8332M15.8332 10.0001L9.99984 4.16675M15.8332 10.0001L9.99984 15.8334" stroke="#2F324A" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </a>
                    </div>
                </div>
            </div>  
      </div>
      <Footer />  
    </div>
  );
}