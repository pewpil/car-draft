"use strict";

import style from "../../styles/home/BrowseCar.module.css";
import type { ReactElement } from "react";

export default function BrowseCar(): ReactElement {
	return (
		<div id={style.browse_car}>
			<div id={style.car_preview}>
				<div id={style.preview_bg}>
					<img src="car.png" />
					<div>
						<svg
							width="44"
							height="49"
							viewBox="0 0 44 49"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
						>
							<g filter="url(#filter0_d_2_191)">
								<path
									d="M38.5 17.7269C40.5 18.8816 40.5 21.7684 38.5 22.9231L8.5 40.2436C6.5 41.3983 4 39.9549 4 37.6455L4 3.00447C4 0.695069 6.5 -0.748305 8.5 0.406396L38.5 17.7269Z"
									fill="#E2E2E2"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_2_191"
									x="0"
									y="0"
									width="44"
									height="48.65"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_2_191"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_2_191"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</div>
				</div>
			</div>
			<div id={style.headlines}>
				<h1 id={style.headline}>BROWSE OUR CARS.</h1>
				<p id={style.body1}>
					Explore our diverse fleet of vehicles, each designed to meet your
					every need.
				</p>
				<div className={style.model}>
					<p id={style.body1}>WIGO 2020 AT</p>
				</div>
				<div className={style.model}>
					<p id={style.body1}>VIEW DETAILS</p>
				</div>
			</div>
		</div>
	);
}
