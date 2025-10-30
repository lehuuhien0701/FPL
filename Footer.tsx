import React from 'react';

export default function Footer() {
	return (
		<footer id="site-footer" className="bg-[linear-gradient(180deg,#383842_0%,#19191D_100%)]">
			<div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 pt-20">
				<div className='border-b border-[#9CA3AF] mb-10 pb-20'>
					<div className='md:flex md:gap-10 lg:gap-20'>
						<div className='mb-10 md:mb-0 md:max-w-[482px] w-full'>
							<h2 className='mb-4 font-normal text-2xl leading-[34px] text-secondary'>Contact us</h2>
							<div className='font-normal text-lg leading-6 text-[#CDCCD8] mb-8'>
								<span className='block'>Fiduciaire Premier Luxembourg S.A.</span>
								<span className='block opacity-[.6]'>Financial Engineering</span>
							</div>
							<div className=''>
								<a href="tel:+352223294" className='text-[#CDCCD8] block mb-6 mr-5'>
									<img className='inline-block mr-3' alt="" src="./footer-icon1.svg"/>
									+352 22 32 94
								</a>
								<a href="tel:+352691123" className='text-[#CDCCD8] block mb-6'>
									<img className='inline-block mr-3' alt="" src="./footer-icon2.svg"/>
									+352 69 11 23
								</a>
								<a href="mailto:hello@fiduciaire-premier.lu" className='text-[#CDCCD8] block mb-6'>
									<img className='inline-block mr-3' alt="" src="./footer-icon3.svg"/>
									hello@fiduciaire-premier.lu
								</a>
								<span className='text-[#CDCCD8] flex items-center mb-6'>
									<img className='inline-block mr-3' alt="" src="./footer-icon4.svg"/>
									14, rue Mathias Hardt, L-1717 Luxembourg <br/>
									BP 460-L-2014 Luxembourg
								</span>
							</div>
							<div>
								<a href="#"><img className='inline-block mr-3' alt="" src="./facebook-01.svg"/></a>
								<a href="#"><img className='inline-block mr-3' alt="" src="./Social Icons.svg"/></a>
							</div>
						</div>
						<div>
							<form className="space-y-5">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="flex flex-col space-y-[4px]">
										<label htmlFor="fname" className="font-normal text-sm leading-none text-[#CDCCD8]">First name</label>
										<input type="text" id="fname" className="text-base text-white w-full h-11 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]" placeholder=""/>
									</div>
									<div className="flex flex-col space-y-[4px]">
										<label htmlFor="lname" className="font-normal text-sm leading-none text-[#CDCCD8]">Last name</label>
										<input type="text" id="lname" className="text-base text-white w-full h-11 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]" placeholder=""/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="flex flex-col space-y-[4px]">
										<label htmlFor="email" className="font-normal text-sm leading-none text-[#CDCCD8]">E-mail *</label>
										<input type="email" id="email" className="text-base text-white w-full h-11 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]" placeholder=""/>
									</div>
									<div className="flex flex-col space-y-[4px]">
										<label htmlFor="phone" className="font-normal text-sm leading-none text-[#CDCCD8]">Phone</label>
										<input type="number" id="phone" className="text-base text-white w-full h-11 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]" placeholder=""/>
									</div>
								</div>

								<div className="flex flex-col space-y-[4px]">
									<label htmlFor="message" className="font-normal text-sm leading-none text-[#CDCCD8]">Message *</label>
									<textarea id="message" className="text-base text-white w-full h-40 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]" placeholder="Your message"></textarea>
								</div>

								<div className="space-y-6">
									<div className='flex items-center'>
										<input type="checkbox" id="emailOptIn2" name="emailOptIn" className="peer2 hidden"/>
										<label htmlFor="emailOptIn2" className="custom-checkbox-button2 mr-[10px] relative flex items-center justify-center flex-shrink-0">
											<svg className='absolute h-4 w-4 text-white opacity-0 transition-opacity duration-200' width="16" height="16" viewBox="0 0 16 16" fill="none">
												<g opacity="0.6">
													<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#CDCCD8"/>
													<path d="M12.207 4.79303C12.3945 4.98056 12.4998 5.23487 12.4998 5.50003C12.4998 5.76519 12.3945 6.0195 12.207 6.20703L7.207 11.207C7.01947 11.3945 6.76517 11.4998 6.5 11.4998C6.23484 11.4998 5.98053 11.3945 5.793 11.207L3.793 9.20703C3.61084 9.01843 3.51005 8.76583 3.51233 8.50363C3.51461 8.24143 3.61978 7.99062 3.80518 7.80521C3.99059 7.6198 4.2414 7.51463 4.5036 7.51236C4.7658 7.51008 5.0184 7.61087 5.207 7.79303L6.5 9.08603L10.793 4.79303C10.9805 4.60556 11.2348 4.50024 11.5 4.50024C11.7652 4.50024 12.0195 4.60556 12.207 4.79303Z" fill="#CDCCD8"/>
												</g>
											</svg>
										</label>
										<label htmlFor="emailOptIn2" className="font-normal text-xs text-[#CDCCD8] cursor-pointer select-none">
											By checking this box and submitting this form, I explicitly agree that my personal data will be used to contact me in connection with my request indicated in this form. No other processing will be carried out with my information.
										</label>
									</div>
									<button type="submit" className="w-full sm:w-auto text-sm font-medium text-primary bg-secondary h-11 px-10 hover:bg-white transition duration-200">Send message</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className="max-w-[1400px] mx-auto w-full pt-0 py-20">
					<div className='xl:flex items-center text-[#CDCCD8] justify-between'>
						<div className='text-center xl:text-left'>
							<p>Copyright © Fiduciaire Premier Luxembourg S.A. 2025 | All rights reserved | Privacy Policy  | Cookie Policy</p>
						</div>
						<div className='justify-center xl:justify-end flex items-center flex-wrap'>
							<p className='flex items-center'>Designed By <img className='mx-[6px]' alt="" src="./Meta.svg"/></p>
							<p>& Premium Partner of Nextimmo.lu / Secretimmo.lu / Goodwork.lu</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}