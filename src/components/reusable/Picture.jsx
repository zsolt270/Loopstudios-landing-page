import "./Picture.css";
export default function Picture({ src, alt, text }) {
	return (
		<div className='pic col-12 col-md-6 col-lg-3 position-relative mb-4'>
			<img
				className='img-fluid'
				src={src}
				alt={alt}
			/>
			{text}
		</div>
	);
}
