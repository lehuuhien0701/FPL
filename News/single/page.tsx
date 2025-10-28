import { useRef, useState, useEffect } from 'react';
import Header from '../../Header';
import Footer from '../../Footer'; 


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
  return (
    <div className="min-h-screen bg-beige">
      <Header />
      <div>
          <div className='max-w-[880px] lg:max-w-[960px] mx-auto w-full px-5 md:px-10 lg:px-20 relative z-10 pb-[60px] pt-16'>
              <div className='font-bold text-xs leading-none text-gray-400'>
                 <p>13 Aug 2023 / <span>Fiduciaire Premier Luxembourg S.A.</span></p>
              </div>
              <h3 className='font-medium text-5xl leading-[56px] text-primary'>
                Lorem ipsum dolor sit amet consectetur. Tortor in egestas tellus tristique ultricies vel.
              </h3>
          </div>
          <div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 mb-16'>
              <img className='w-full' alt="" src="../thumbnail04.jpg"/>
          </div>
          <div className='max-w-[880px] lg:max-w-[960px] mx-auto w-full px-5 md:px-10 lg:px-20 relative z-10 pb-[60px]'>
              <h2 className='text-2xl mb-7'>Introduction</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Purus ullamcorper nullam ullamcorper egestas gravida. 
                Malesuada aliquam lacus nam venenatis purus ullamcorper. Adipiscing non in quam at enim ac. 
                Senectus lorem mi ut massa non egestas neque. Nibh rhoncus scelerisque in porta neque. 
                Tincidunt interdum est sed adipiscing fringilla ipsum sed elit. Augue tincidunt dictum 
                amet nulla vivamus odio scelerisque. Amet vitae aliquet vulputate neque dictum morbi. 
                Tellus hendrerit in adipiscing orci metus vitae. Lorem aliquam felis id lectus. 
                Adipiscing molestie tincidunt tortor sed tortor. Eros velit ac ut et enim leo cursus. 
                At ullamcorper tempus molestie tempor et amet etiam auctor.</p>
                <p>Lorem ipsum dolor sit amet consectetur. Purus ullamcorper nullam ullamcorper egestas gravida. 
                  Malesuada aliquam lacus nam venenatis purus ullamcorper. Adipiscing non in quam at enim ac. 
                  Senectus lorem mi ut massa non egestas neque. Nibh rhoncus scelerisque in porta neque. </p>
                <div className='pb-4'>
                <img className='w-full mb-2' alt="" src="../thumbnail05.jpg"/>  
                </div>
                <blockquote className='border-l-[2px] border-primary pl-3 mb-6'>
                  Lorem ipsum dolor sit amet consectetur. Purus ullamcorper nullam ullamcorper egestas gravida. 
                  Malesuada aliquam lacus nam venenatis purus ullamcorper. Adipiscing non in quam at enim ac. 
                  Senectus lorem mi ut massa non egestas neque. Nibh rhoncus scelerisque in porta neque. 
                  Tincidunt interdum est sed adipiscing fringilla ipsum sed elit. Augue tincidunt dictum amet 
                  nulla vivamus odio scelerisque. Amet vitae aliquet vulputate neque dictum morbi. Tellus hendrerit 
                  in adipiscing orci metus vitae. Lorem aliquam felis id lectus. Adipiscing molestie tincidunt tortor 
                  sed tortor. Eros velit ac ut et enim leo cursus. At ullamcorper tempus molestie tempor et amet etiam auctor.
                </blockquote>
                <p>Conclusion</p>
                <p>Lorem ipsum dolor sit amet consectetur. Purus ullamcorper nullam ullamcorper egestas gravida. Malesuada 
                  aliquam lacus nam venenatis purus ullamcorper. Adipiscing non in quam at enim ac.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Purus ullamcorper nullam ullamcorper egestas gravida. 
                  Malesuada aliquam lacus nam venenatis purus ullamcorper. Adipiscing non in quam at enim ac. 
                  Senectus lorem mi ut massa non egestas neque. Nibh rhoncus scelerisque in porta neque. 
                  Tincidunt interdum est sed adipiscing fringilla ipsum sed elit. Augue tincidunt dictum amet 
                  nulla vivamus odio scelerisque. Amet vitae aliquet vulputate neque dictum morbi. 
                  Tellus hendrerit in adipiscing orci metus vitae. Lorem aliquam felis id lectus. Adipiscing 
                  molestie tincidunt tortor sed tortor. Eros velit ac ut et enim leo cursus. At ullamcorper 
                  tempus molestie tempor et amet etiam auctor.
                </p>  
                <div className='mt-10'>
                    <p className='text-center'>Share this post</p>
                    <div className='flex justify-center gap-6 mt-4'>
                        <a href="#"><img className='w-full' alt="" src="../social1.svg"/></a>
                        <a href="#"><img className='w-full' alt="" src="../social2.svg"/></a>
                        <a href="#"><img className='w-full' alt="" src="../social3.svg"/></a>
                        <a href="#"><img className='w-full' alt="" src="../social4.svg"/></a>
                        <a href="#"><img className='w-full' alt="" src="../social5.svg"/></a>
                    </div>
                </div>
          </div>
      </div>
       
      <Footer />
    </div>
  );
}