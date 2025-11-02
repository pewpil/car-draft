"use strict";

import style from "../../styles/home/Features.module.css";

export default function Features() {
	return (
		<div id={style.features}>
			<div className={style.feature_container} id={style.fuel}>
				<img className={style.feature_icon} src="home/fuel.svg" />
				<h4 className={style.feature_desc}>FUEL EFFICIENT UNITS</h4>
			</div>
			<div className={style.feature_container} id={style.sanitize}>
				<img className={style.feature_icon} src="home/sanitize.svg" />
				<h4 className={style.feature_desc}>
					WELL MAINTAINED, CLEAN AND SANITIZED
				</h4>
			</div>
			<div className={style.feature_container} id={style.drive}>
				<img className={style.feature_icon} src="home/drive.svg" />
				<h4 className={style.feature_desc}>SELF-DRIVE OR WITH DRIVER</h4>
			</div>
			<div className={style.feature_container} id={style.rentals}>
				<img className={style.feature_icon} src="home/rentals.svg" />
				<h4 className={style.feature_desc}>
					DAILY, WEEKLY AND MONTHLY RENTALS
				</h4>
			</div>
		</div>
	);
}
