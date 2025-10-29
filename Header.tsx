import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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


export default function Header() {
	useEffect(() => {
		const svgOpen = document.querySelector<SVGElement>('svg.open');
		const svgClose = document.querySelector<SVGElement>('svg.close');
		const menu = document.querySelector<HTMLElement>('.menu-click');
		if (!svgOpen || !menu) return;

		// inject CSS to make menu overlay fullscreen when body has .menu-open
		if (!document.getElementById('menu-open-style')) {
			const style = document.createElement('style');
			style.id = 'menu-open-style';
			style.textContent = `
				body.menu-open { overflow: hidden !important; }
				.menu-click { display: none; }
				.menu-click.show { display: block !important; position: fixed !important; inset: 0 !important; z-index: 99999 !important; overflow: auto !important; }
			`;
			document.head.appendChild(style);
		}

		const openHandler = () => {
			menu.classList.remove('hidden');
			menu.classList.add('show');
			// lock body scroll and ensure menu is fullscreen via CSS
			document.body.classList.add('menu-open');
		};

		const closeHandler = () => {
			menu.classList.remove('show');
			menu.classList.add('hidden');
			document.body.classList.remove('menu-open');
		};

		const onDocumentClick = (e: MouseEvent) => {
			const target = e.target as Node | null;
			if (!target) return;
			if (menu.contains(target)) return;
			if (svgOpen.contains(target)) return;
			if (svgClose && svgClose.contains(target)) return;
			closeHandler();
		};

		svgOpen.addEventListener('click', openHandler);
		if (svgClose) svgClose.addEventListener('click', closeHandler);
		document.addEventListener('click', onDocumentClick);

		return () => {
			svgOpen.removeEventListener('click', openHandler);
			if (svgClose) svgClose.removeEventListener('click', closeHandler);
			document.removeEventListener('click', onDocumentClick);
			// ensure class removed on unmount
			document.body.classList.remove('menu-open');
		};
	}, []);
	
	// Toggle .box-submenu khi click .open-language (plain JS)
	useEffect(() => {
		const buttons = Array.from(document.querySelectorAll<HTMLElement>('.open-language'));
		if (buttons.length === 0) return;

		const onBtnClick = (e: Event) => {
			e.stopPropagation();
			const btn = e.currentTarget as HTMLElement;
			const container = btn.closest('.pr-5') || btn.parentElement;
			const box = container?.querySelector<HTMLElement>('.box-submenu');
			if (!box) return;

			// close other open boxes
			document.querySelectorAll<HTMLElement>('.box-submenu.show').forEach(b => {
				if (b !== box) {
					b.classList.remove('show');
					b.classList.add('hidden');
				}
			});

			if (box.classList.contains('show')) {
				box.classList.remove('show');
				box.classList.add('hidden');
			} else {
				box.classList.add('show');
				box.classList.remove('hidden');
			}
		};

		const onDocClick = (e: MouseEvent) => {
			const t = e.target as HTMLElement | null;
			if (!t) return;
			if (!t.closest('.box-submenu') && !t.closest('.open-language')) {
				document.querySelectorAll<HTMLElement>('.box-submenu.show').forEach(b => {
					b.classList.remove('show');
					b.classList.add('hidden');
				});
			}
		};

		buttons.forEach(b => b.addEventListener('click', onBtnClick));
		document.addEventListener('click', onDocClick);

		return () => {
			buttons.forEach(b => b.removeEventListener('click', onBtnClick));
			document.removeEventListener('click', onDocClick);
		};
	}, []);

	return (
		<>
		<div className='wrap-header'>
			<div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 relative z-10'>
				<nav className="bg-white border-b border-white/10 sticky top-0">
					<div className="h-[88px] flex items-center justify-between">
						<h1 className='font-merriweather font-bold text-base md:text-xl leading-6'>
							<Link to="/" aria-label="Go to home" className="text-[#2F324A] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#CCAB80]">
								Fiduciaire Premier Luxembourg S.A.
							</Link>
						</h1>
						<div className="flex items-center gap-10">
							<div className='flex items-center'>
								<div className="hidden md:block pr-5 md:pr-10 border-r border-[#E5E7EB] cursor-pointer relative">
									<div className='open-language flex items-center justify-center'>
										<svg className='rounded-full' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M-0.234924 -1.03876H30.3105V31.1143H-0.234924V-1.03876Z" fill="#083F80"/>
											<path d="M-0.234924 10.2151H30.3105V19.7462H-0.234924V10.2151Z" fill="white"/>
											<path d="M17.9548 -1.11433V31.0388H11.9184V-1.11433H17.9548Z" fill="white"/>
											<path d="M30.3105 27.5545V31.1143H26.6742L-0.234924 2.86548V-1.03876H3.3287L30.3105 27.5545Z" fill="white"/>
											<path d="M30.3105 2.52107V-1.03876H26.6742L-0.234924 27.0952V31.1143H3.3287L30.3105 2.52107Z" fill="white"/>
											<path d="M-0.234893 1.48755L7.98329 10.2148H10.456L-0.234924 -1.03876L-0.234893 1.48755ZM30.3105 28.4732L22.0924 19.7459H19.6196L30.3106 31.1143L30.3105 28.4732ZM17.9469 9.29614V10.2148H19.5469L30.3105 -1.03876H27.6196L17.9469 9.29614ZM12.1287 20.7794V19.7459H10.5287L-0.234893 31.1143H2.45601L12.1287 20.7794ZM13.2196 -1.03876H16.7833V31.1143H13.2196V-1.03876Z" fill="#B7333C"/>
											<path d="M-0.310547 17.8409V12.2142H30.3076V17.841L-0.310547 17.8409Z" fill="#B7333C"/>
										</svg>
										<span className='flex items-center ml-[10px] mr-[10px]'>
											English
											<svg className='ml-[10px]' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.75 10.875L0.125 6.28125C0.0416667 6.19792 0 6.10938 0 6.01562C0 5.92188 0.03125 5.83333 0.09375 5.75L0.71875 5.125C0.802083 5.0625 0.895833 5.03125 1 5.03125C1.10417 5.03125 1.1875 5.0625 1.25 5.125L5 8.84375L8.75 5.125C8.8125 5.0625 8.89583 5.03125 9 5.03125C9.10417 5.03125 9.19792 5.0625 9.28125 5.125L9.90625 5.75C9.96875 5.83333 10 5.92188 10 6.01562C10 6.10938 9.96875 6.19792 9.90625 6.28125L5.28125 10.875C5.19792 10.9375 5.10417 10.9688 5 10.9688C4.89583 10.9688 4.80208 10.9375 4.71875 10.875H4.75Z" fill="#2F324A"/>
											</svg>
										</span>
									</div>
									<div className='box-submenu absolute top-[50px] left-[-16px] bg-white p-4 hidden'>
										<ul>
											<li className='mb-2'>
												<div className='open-language flex items-center justify-center'>
													<svg className='rounded-full' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M-0.234924 -1.03876H30.3105V31.1143H-0.234924V-1.03876Z" fill="#083F80"/>
														<path d="M-0.234924 10.2151H30.3105V19.7462H-0.234924V10.2151Z" fill="white"/>
														<path d="M17.9548 -1.11433V31.0388H11.9184V-1.11433H17.9548Z" fill="white"/>
														<path d="M30.3105 27.5545V31.1143H26.6742L-0.234924 2.86548V-1.03876H3.3287L30.3105 27.5545Z" fill="white"/>
														<path d="M30.3105 2.52107V-1.03876H26.6742L-0.234924 27.0952V31.1143H3.3287L30.3105 2.52107Z" fill="white"/>
														<path d="M-0.234893 1.48755L7.98329 10.2148H10.456L-0.234924 -1.03876L-0.234893 1.48755ZM30.3105 28.4732L22.0924 19.7459H19.6196L30.3106 31.1143L30.3105 28.4732ZM17.9469 9.29614V10.2148H19.5469L30.3105 -1.03876H27.6196L17.9469 9.29614ZM12.1287 20.7794V19.7459H10.5287L-0.234893 31.1143H2.45601L12.1287 20.7794ZM13.2196 -1.03876H16.7833V31.1143H13.2196V-1.03876Z" fill="#B7333C"/>
														<path d="M-0.310547 17.8409V12.2142H30.3076V17.841L-0.310547 17.8409Z" fill="#B7333C"/>
													</svg>
													<span className='flex items-center ml-[10px] mr-[10px]'>
														English 
													</span>
												</div>
											</li>
											<li>
												<div className='open-language flex items-center justify-center'>
													<svg className='rounded-full' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M-0.234924 -1.03876H30.3105V31.1143H-0.234924V-1.03876Z" fill="#083F80"/>
														<path d="M-0.234924 10.2151H30.3105V19.7462H-0.234924V10.2151Z" fill="white"/>
														<path d="M17.9548 -1.11433V31.0388H11.9184V-1.11433H17.9548Z" fill="white"/>
														<path d="M30.3105 27.5545V31.1143H26.6742L-0.234924 2.86548V-1.03876H3.3287L30.3105 27.5545Z" fill="white"/>
														<path d="M30.3105 2.52107V-1.03876H26.6742L-0.234924 27.0952V31.1143H3.3287L30.3105 2.52107Z" fill="white"/>
														<path d="M-0.234893 1.48755L7.98329 10.2148H10.456L-0.234924 -1.03876L-0.234893 1.48755ZM30.3105 28.4732L22.0924 19.7459H19.6196L30.3106 31.1143L30.3105 28.4732ZM17.9469 9.29614V10.2148H19.5469L30.3105 -1.03876H27.6196L17.9469 9.29614ZM12.1287 20.7794V19.7459H10.5287L-0.234893 31.1143H2.45601L12.1287 20.7794ZM13.2196 -1.03876H16.7833V31.1143H13.2196V-1.03876Z" fill="#B7333C"/>
														<path d="M-0.310547 17.8409V12.2142H30.3076V17.841L-0.310547 17.8409Z" fill="#B7333C"/>
													</svg>
													<span className='flex items-center ml-[10px] mr-[10px]'>
														English 
													</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className='flex items-center pl-5 md:pl-10'>
									<svg className='open cursor-pointer' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="15.1602" y="30.2928" width="20.9723" height="3.22651" rx="1.61326" fill="#CCAB80"/>
										<rect x="23.2265" y="21.4199" width="12.9061" height="3.22651" rx="1.61326" fill="#CCAB80"/>
										<rect x="3.86743" y="13.3536" width="32.2651" height="3.22651" rx="1.61326" fill="#CCAB80"/>
										<rect x="15.1602" y="4.48069" width="20.9723" height="3.22651" rx="1.61326" fill="#CCAB80"/>
									</svg>
									<span className='font-inter font-bold text-base leading-6 text-[#CCAB80] ml-[10px]'>
										Menu
									</span>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>

			{/* Menu overlay */}
			<div className='menu-click bg-[linear-gradient(180deg,#383842_0%,#19191D_100%)] absolute top-0 left-0 right-0 z-[99999] hidden'>
				<div className='max-w-[1400px] mx-auto w-full px-0 md:px-10 lg:px-20 relative'>
					<div className='absolute top-6 right-[20px] sm:right-[40px] md:right-[90px] lg:right-[130px]'>
						<svg className='close cursor-pointer' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 29L29 11M11 11L29 29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</div>

					{/* primary nav list */}
					<div className='sm:px-6 pb-0 pt-24'>
						<ul className='space-y-6'>
							<li className='font-normal text-[30px] leading-[72px] text-secondary border-l-[10px] border-[#D9BA92]'>
								<Link to="/" className='pl-[10px] sm:pl-[30px] md:pl-[90px]'>Home</Link> 
							</li>
							<li className='font-normal text-[30px] leading-[72px] text-secondary border-l-[10px] border-transparent'>
								<div className='flex items-center pl-[10px] sm:pl-[30px] md:pl-[90px]'>
									<span>Services</span> 
								</div>
								<ul className='pl-[30px] md:pl-[130px] mt-4 space-y-3'>
									<li><Link to="/Services" className='text-lg flex items-center'><img className='mr-4' alt="" src="/icon1.svg"/> Chartered Accountants</Link></li>
									<li><Link to="/Services" className='text-lg flex items-center'><img className='mr-4' alt="" src="/icon2.svg"/> Economic consulting</Link></li>
									<li><Link to="/Services" className='text-lg flex items-center'><img className='mr-4' alt="" src="/icon3.svg"/> Taxation</Link></li>
									<li><Link to="/Services" className='text-lg flex items-center'><img className='mr-4' alt="" src="/icon4.svg"/> The social secretariat</Link></li>
									<li><Link to="/Services" className='text-lg flex items-center'><img className='mr-4' alt="" src="/icon5.svg"/> Asset engineering</Link></li>
									<li><Link to="/Services" className='text-lg flex items-center'><img className='mr-4' alt="" src="/icon6.svg"/> Domiciliation</Link></li>
								</ul>
							</li>
							<li className='font-normal text-[30px] leading-[72px] text-secondary border-l-[10px] border-transparent'>
								<Link to="/News" className='pl-[10px] sm:pl-[30px] md:pl-[90px]'>News</Link>
							</li>
						</ul>
					</div>

					
				</div>
		
				{/* contact + form (kept) */}
				<div className='pb-10 pt-10 mt-10 border-t border-[#ffffff33]'>
					<div className='max-w-[1400px] mx-auto w-full px-5 md:px-10 lg:px-20 relative'>
						<div className='md:flex md:gap-10 lg:gap-20 sm:px-[20px] md:px-[100px]'>
							<div className='mb-10 md:mb-0 md:max-w-[482px] w-full'>
								<h2 className='mb-4 font-normal text-2xl leading-[34px] text-secondary'>Contact us</h2>
								<div className='font-normal text-lg leading-6 text-[#CDCCD8] mb-8'>
									<span className='block'>
										Fiduciaire Premier Luxembourg S.A.
									</span>
									<span className='block opacity-[.6]'>
										Financial Engineering
									</span>
								</div>
								<div className=''>
									<a href="tel:+352223294" className='text-[#CDCCD8] block mb-6 mr-5'>
										<img className='inline-block mr-3' alt="" src="/footer-icon1.svg"/>
										+352 22 32 94
									</a>
									<a href="tel:+352691123" className='text-[#CDCCD8] block mb-6'>
										<img className='inline-block mr-3' alt="" src="/footer-icon2.svg"/>
										+352 69 11 23
									</a>

									<a href="mailto:hello@fiduciaire-premier.lu" className='text-[#CDCCD8] block mb-6'>
										<img className='inline-block mr-3' alt="" src="/footer-icon3.svg"/>
										hello@fiduciaire-premier.lu
									</a>

									<span className='text-[#CDCCD8] flex items-center mb-6'>
										<img className='inline-block mr-3' alt="" src="/footer-icon4.svg"/>
										14, rue Mathias Hardt, L-1717 Luxembourg <br />
										BP 460-L-2014 Luxembourg
									</span>
								</div>
								<div>
									<a href="#">
										<img className='inline-block mr-3' alt="" src="/facebook-01.svg"/>
									</a>
									<a href="#">
										<img className='inline-block mr-3' alt="" src="/Social Icons.svg"/>
									</a>
								</div>
							</div>
							<div>
								<form className="space-y-5">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="flex flex-col space-y-[4px]">
											<label
												htmlFor="fname"
												className="font-normal text-sm leading-none text-[#CDCCD8]"
											>
												First name
											</label>
											<input
												type="text"
												id="fname"
												className="w-full h-11 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]"
												placeholder=""
											/>
										</div>
										<div className="flex flex-col space-y-[4px]">
											<label
												htmlFor="lname"
												className="font-normal text-sm leading-none text-[#CDCCD8]"
											>
												Last name
											</label>
											<input
												type="text"
												id="lname"
												className="w-full h-11 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]"
												placeholder=""
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="flex flex-col space-y-[4px]">
											<label
												htmlFor="email"
												className="font-normal text-sm leading-none text-[#CDCCD8]"
											>
												E-mail *
											</label>
											<input
												type="email"
												id="email"
												className="w-full h-11 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]"
												placeholder=""
											/>
										</div>
										<div className="flex flex-col space-y-[4px]">
											<label
												htmlFor="phone"
												className="font-normal text-sm leading-none text-[#CDCCD8]"
											>
												Phone
											</label>
											<input
												type="number"
												id="phone"
												className="w-full h-11 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]"
												placeholder=""
											/>
										</div>
									</div>
									<div className="flex flex-col space-y-[4px]">
										<label
											htmlFor="message"
											className="font-normal text-sm leading-none text-[#CDCCD8]"
										>
											Message *
										</label>
										<textarea
											id="message"
											className="w-full h-40 p-2 outline-none focus:border-navy focus:ring-navy transition duration-200 bg-transparent border border-[#CDCCD8]"
											placeholder="Your message"
										></textarea>
									</div>
									<div className="space-y-6">
										<div className='flex items-center'>
											<input
												type="checkbox"
												id="emailOptIn"
												name="emailOptIn"
												className="peer2 hidden"
											/>
											<label
												htmlFor="emailOptIn"
												className="custom-checkbox-button2 mr-[10px] relative flex items-center justify-center flex-shrink-0"
											>
												<svg className='absolute h-4 w-4 text-white opacity-0 transition-opacity duration-200' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g opacity="0.6">
														<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#CDCCD8"/>
														<path d="M12.207 4.79303C12.3945 4.98056 12.4998 5.23487 12.4998 5.50003C12.4998 5.76519 12.3945 6.0195 12.207 6.20703L7.207 11.207C7.01947 11.3945 6.76517 11.4998 6.5 11.4998C6.23484 11.4998 5.98053 11.3945 5.793 11.207L3.793 9.20703C3.61084 9.01843 3.51005 8.76583 3.51233 8.50363C3.51461 8.24143 3.61978 7.99062 3.80518 7.80521C3.99059 7.6198 4.2414 7.51463 4.5036 7.51236C4.7658 7.51008 5.0184 7.61087 5.207 7.79303L6.5 9.08603L10.793 4.79303C10.9805 4.60556 11.2348 4.50024 11.5 4.50024C11.7652 4.50024 12.0195 4.60556 12.207 4.79303Z" fill="#CDCCD8"/>
													</g>
												</svg>
											</label>
											<label htmlFor="emailOptIn" className="font-normal text-xs text-[#CDCCD8] cursor-pointer select-none">
												By checking this box and submitting this form, I explicitly agree that my personal data will be used to contact me in connection with my request indicated in this form. No other processing will be carried out with my information.
											</label>
										</div>
										<button
											type="submit"
											className="w-full sm:w-auto text-sm font-medium text-primary bg-secondary h-11 px-10 hover:bg-white transition duration-200"
										>
											Send message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="pt-10 flex gap-3 items-center justify-center md:hidden text-white pr-5 md:pr-10 border-r border-[#E5E7EB] cursor-pointer relative">
						<div className='open-language flex items-center justify-center'>
							<svg className='rounded-full' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M-0.234924 -1.03876H30.3105V31.1143H-0.234924V-1.03876Z" fill="#083F80"/>
								<path d="M-0.234924 10.2151H30.3105V19.7462H-0.234924V10.2151Z" fill="white"/>
								<path d="M17.9548 -1.11433V31.0388H11.9184V-1.11433H17.9548Z" fill="white"/>
								<path d="M30.3105 27.5545V31.1143H26.6742L-0.234924 2.86548V-1.03876H3.3287L30.3105 27.5545Z" fill="white"/>
								<path d="M30.3105 2.52107V-1.03876H26.6742L-0.234924 27.0952V31.1143H3.3287L30.3105 2.52107Z" fill="white"/>
								<path d="M-0.234893 1.48755L7.98329 10.2148H10.456L-0.234924 -1.03876L-0.234893 1.48755ZM30.3105 28.4732L22.0924 19.7459H19.6196L30.3106 31.1143L30.3105 28.4732ZM17.9469 9.29614V10.2148H19.5469L30.3105 -1.03876H27.6196L17.9469 9.29614ZM12.1287 20.7794V19.7459H10.5287L-0.234893 31.1143H2.45601L12.1287 20.7794ZM13.2196 -1.03876H16.7833V31.1143H13.2196V-1.03876Z" fill="#B7333C"/>
								<path d="M-0.310547 17.8409V12.2142H30.3076V17.841L-0.310547 17.8409Z" fill="#B7333C"/>
							</svg>  
						</div>
						<div className='box-submenu'>
							<ul className='flex items-center gap-3'>
								<li className=''>
									<div className='open-language flex items-center justify-center'>
										<svg className='rounded-full' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M-0.234924 -1.03876H30.3105V31.1143H-0.234924V-1.03876Z" fill="#083F80"/>
											<path d="M-0.234924 10.2151H30.3105V19.7462H-0.234924V10.2151Z" fill="white"/>
											<path d="M17.9548 -1.11433V31.0388H11.9184V-1.11433H17.9548Z" fill="white"/>
											<path d="M30.3105 27.5545V31.1143H26.6742L-0.234924 2.86548V-1.03876H3.3287L30.3105 27.5545Z" fill="white"/>
											<path d="M30.3105 2.52107V-1.03876H26.6742L-0.234924 27.0952V31.1143H3.3287L30.3105 2.52107Z" fill="white"/>
											<path d="M-0.234893 1.48755L7.98329 10.2148H10.456L-0.234924 -1.03876L-0.234893 1.48755ZM30.3105 28.4732L22.0924 19.7459H19.6196L30.3106 31.1143L30.3105 28.4732ZM17.9469 9.29614V10.2148H19.5469L30.3105 -1.03876H27.6196L17.9469 9.29614ZM12.1287 20.7794V19.7459H10.5287L-0.234893 31.1143H2.45601L12.1287 20.7794ZM13.2196 -1.03876H16.7833V31.1143H13.2196V-1.03876Z" fill="#B7333C"/>
											<path d="M-0.310547 17.8409V12.2142H30.3076V17.841L-0.310547 17.8409Z" fill="#B7333C"/>
										</svg> 
									</div>
								</li>
								<li>
									<div className='open-language flex items-center justify-center'>
										<svg className='rounded-full' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M-0.234924 -1.03876H30.3105V31.1143H-0.234924V-1.03876Z" fill="#083F80"/>
											<path d="M-0.234924 10.2151H30.3105V19.7462H-0.234924V10.2151Z" fill="white"/>
											<path d="M17.9548 -1.11433V31.0388H11.9184V-1.11433H17.9548Z" fill="white"/>
											<path d="M30.3105 27.5545V31.1143H26.6742L-0.234924 2.86548V-1.03876H3.3287L30.3105 27.5545Z" fill="white"/>
											<path d="M30.3105 2.52107V-1.03876H26.6742L-0.234924 27.0952V31.1143H3.3287L30.3105 2.52107Z" fill="white"/>
											<path d="M-0.234893 1.48755L7.98329 10.2148H10.456L-0.234924 -1.03876L-0.234893 1.48755ZM30.3105 28.4732L22.0924 19.7459H19.6196L30.3106 31.1143L30.3105 28.4732ZM17.9469 9.29614V10.2148H19.5469L30.3105 -1.03876H27.6196L17.9469 9.29614ZM12.1287 20.7794V19.7459H10.5287L-0.234893 31.1143H2.45601L12.1287 20.7794ZM13.2196 -1.03876H16.7833V31.1143H13.2196V-1.03876Z" fill="#B7333C"/>
											<path d="M-0.310547 17.8409V12.2142H30.3076V17.841L-0.310547 17.8409Z" fill="#B7333C"/>
										</svg> 
									</div>
								</li>
							</ul>
						</div>
					</div>	


				</div> 
			</div>
		</div>
		</>
	);
}