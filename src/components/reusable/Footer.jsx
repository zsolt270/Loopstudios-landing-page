import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import Facebook from "../../assets/images/icon-facebook.svg";
import Pinterest from "../../assets/images/icon-pinterest.svg";
import Twitter from "../../assets/images/icon-twitter.svg";

export default function Header() {
	return (
		<div className='bg-dark '>
			<div className='container pt-5 mt-5'>
				<div className='row'>
					<div className='col-12 col-lg-8 col-xl-6 text-center text-lg-start'>
						<div className='row mb-4'>
							<div className='col'>
								<img
									src={logo}
									alt='Loopstudios logo'
								/>
							</div>
						</div>
						<div className='row'>
							<div className='row text-light pb-3 footerMenu '>
								<div className='col-12 col-lg-2  position-relative'>
									<p className=' pb-1 fw-bold'>About</p>
								</div>
								<div className='col-12 col-lg-2  position-relative'>
									<p className=' pb-1 fw-bold'>Careers</p>
								</div>
								<div className='col-12 col-lg-2  position-relative'>
									<p className=' pb-1 fw-bold'>Events</p>
								</div>
								<div className='col-12 col-lg-2  position-relative'>
									<p className=' pb-1 fw-bold'>Products</p>
								</div>
								<div className='col-12 col-lg-2  position-relative'>
									<p className=' pb-1 fw-bold'>Support</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg text-center text-lg-end'>
						<div className='row mb-3 mb-lg-4 mt-4 mt-lg-0'>
							<div className='col socials'>
								<img
									src={Facebook}
									alt='Facebook logo'
									className='mx-2 pb-1'
								/>
								<img
									src={Twitter}
									alt='Twitter logo'
									className='mx-2 pb-1'
								/>
								<img
									src={Pinterest}
									alt='Pinterest logo'
									className='mx-2 pb-1'
								/>
								<img
									src={Instagram}
									alt='Instagram logo'
									className='mx-2 pb-1'
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col mb-3 d-flex justify-content-center justify-content-lg-end'>
								<i className='bi bi-c-circle me-1 text-secondary'></i>
								<p className=' text-secondary'>
									2021 Loopstudios. All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
