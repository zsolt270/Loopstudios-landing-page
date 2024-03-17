import ManPic from "../../assets/images/desktop/image-interactive.jpg";
import "./About.css";

export default function About() {
	return (
		<div className='container'>
			<div className='about-div'>
				<img
					src={ManPic}
					alt=''
					className=' img-fluid'
				/>
				<div className='aboutText-div'>
					<h2 className='text-uppercase fw-light mb-4'>
						the leader in <br /> interactive vr
					</h2>
					<p className='text-secondary fw-medium px-lg-4 p-xl-0'>
						Founded in 2011, Loopstudios has been producing world-class virtual
						reality projects for some of the best companies around the globe.
						Our award-winning creations have transformed businesses through
						digital experiences that bind to their brand.
					</p>
				</div>
			</div>
		</div>
	);
}
