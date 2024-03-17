import "./Header.css";
import logo from "../../assets/images/logo.svg";

export default function Header() {
	return (
		<div className='container-fluid header-div'>
			<nav className='navbar navbar-expand-lg container pb-4 pb-lg-5 pt-3'>
				<div className='container-fluid'>
					<a
						className='navbar-brand'
						href='#'
					>
						<img
							src={logo}
							alt=''
						/>
					</a>
					<button
						className='navbar-toggler text-light'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarNav'
					>
						<ul className='navbar-nav w-100 justify-content-end'>
							<li className='nav-item'>
								<a
									className='nav-link'
									aria-current='page'
									href='#'
								>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='#'
								>
									Careers
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='#'
								>
									Events
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='#'
									aria-disabled='true'
								>
									Products
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='#'
									aria-disabled='true'
								>
									Support
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container'>
				<h2 className='header-text mb-5 display-6 mx-auto mx-md-0'>
					immersive experiences that deliver
				</h2>
			</div>
		</div>
	);
}
