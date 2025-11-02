"use strict";

import style from "../../styles/home/BrowseCar.module.css";
import type { ReactElement } from "react";

export default function BrowseCar(): ReactElement {
	return (
		<div id={style.browse_car}>
			<div id={style.car_preview}>
				<div id={style.preview_container}>
					<div id={style.model_container}>
						<img src="car.png" id={style.model} />
					</div>
					<div id={style.next_car}>
					<img src="next_car.svg" />
					</div>
				</div>
			</div>
			<div id={style.texts}>
				<h1 id={style.headline}>
					BROWSE OUR <span className={style.lettering}>CARS.</span>
				</h1>
				<p className={style.body}>
					Explore our diverse fleet of vehicles, each designed to meet your
					every need.
				</p>
				<div id={style.boxeds}>
					<div className={style.boxed}>
						<p className={style.body2}>WIGO 2020 AT</p>
					</div>
					<div className={style.boxed}>
						<p className={style.body2}>VIEW DETAILS</p>
					</div>
				</div>
			</div>
		</div>
	);
}
