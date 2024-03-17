import Picture from "../reusable/Picture";
import "./Creation.css";
import { useState } from "react";
import { useEffect } from "react";

// kép importok
//desktop
import FishEye from "../../assets/images/desktop/image-fisheye.jpg";
import ImgFromAbove from "../../assets/images/desktop/image-from-above.jpg";
import Grid from "../../assets/images/desktop/image-grid.jpg";
import NightArcade from "../../assets/images/desktop/image-night-arcade.jpg";
import PocketBorealis from "../../assets/images/desktop/image-pocket-borealis.jpg";
import Soccerteam from "../../assets/images/desktop/image-soccer-team.jpg";
import DeepEarth from "../../assets/images/desktop/image-deep-earth.jpg";
import Curiosity from "../../assets/images/desktop/image-curiosity.jpg";

//mobile
import FishEyeMobile from "../../assets/images/mobile/image-fisheye.jpg";
import ImgFromAboveMobile from "../../assets/images/mobile/image-from-above.jpg";
import GridMobile from "../../assets/images/mobile/image-grid.jpg";
import NightArcadeMobile from "../../assets/images/mobile/image-night-arcade.jpg";
import PocketBorealisMobile from "../../assets/images/mobile/image-pocket-borealis.jpg";
import SoccerteamMobile from "../../assets/images/mobile/image-soccer-team.jpg";
import DeepEarthMobile from "../../assets/images/mobile/image-deep-earth.jpg";
import CuriosityMobile from "../../assets/images/mobile/image-curiosity.jpg";

export default function Creations() {
	const [isTablet, setisTablet] = useState(window.innerWidth < 992);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setIsMobile(window.innerWidth < 768);
		});
		return () =>
			window.removeEventListener(
				"resize",
				setIsMobile(window.innerWidth < 768)
			);
	});
	useEffect(() => {
		window.addEventListener("resize", () => {
			setisTablet(window.innerWidth < 992);
		});
		return () =>
			window.removeEventListener(
				"resize",
				setisTablet(window.innerWidth < 992)
			);
	});

	return (
		<div className='container '>
			<div className='row mb-5'>
				<div className='col text-center text-md-start '>
					<h2
						className={
							isMobile ? "display-3 text-uppercase" : "display-6 text-uppercase"
						}
					>
						our creations
					</h2>
				</div>
				{isMobile ? (
					""
				) : (
					<div className='col-5 text-end pt-1'>
						<button className='seeAllBtn '>SEE ALL</button>
					</div>
				)}
			</div>
			<div className='row text-center'>
				<Picture
					src={isTablet ? DeepEarthMobile : DeepEarth}
					alt='DEEP EARTH'
					text={
						<h3 className='titles lh-1'>
							DEEP <br /> EARTH
						</h3>
					}
				></Picture>
				<Picture
					src={isTablet ? NightArcadeMobile : NightArcade}
					alt='NIGHT ARCADE'
					text={
						<h3 className='titles lh-1'>
							NIGHT <br /> ARCADE
						</h3>
					}
				></Picture>
				<Picture
					src={isTablet ? SoccerteamMobile : Soccerteam}
					alt='SOCCER TEAM'
					text={
						<h3 className='titles lh-1'>
							SOCCER <br /> TEAM VR
						</h3>
					}
				></Picture>
				<Picture
					src={isTablet ? GridMobile : Grid}
					alt='THE GRID'
					text={
						<h3 className='titles lh-1'>
							THE <br /> GRID
						</h3>
					}
				></Picture>
			</div>
			<div className='row text-center'>
				<Picture
					src={isTablet ? ImgFromAboveMobile : ImgFromAbove}
					alt='FROM UP ABOVE VR'
					text={
						<h3 className='titles lh-1'>
							FROM UP
							<br /> ABOVE VR
						</h3>
					}
				></Picture>
				<Picture
					src={isTablet ? PocketBorealisMobile : PocketBorealis}
					alt='POCKET BOREALIS'
					text={
						<h3 className='titles lh-1'>
							POCKET <br /> BOREALIS
						</h3>
					}
				></Picture>
				<Picture
					src={isTablet ? CuriosityMobile : Curiosity}
					alt='THE CURIOSITY'
					text={
						<h3 className='titles lh-1'>
							THE <br /> CURIOSITY
						</h3>
					}
				></Picture>
				<Picture
					src={isTablet ? FishEyeMobile : FishEye}
					alt='MAKE IT FISHEYE'
					text={
						<h3 className='titles lh-1'>
							MAKE IT <br /> FISHEYE
						</h3>
					}
				></Picture>
				{isMobile ? (
					<div className='text-center mb-5'>
						<button className='seeAllBtnMobile'>SEE ALL</button>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}
