"use strict";

import type { ReactElement } from "react";
import style from "../../styles/home/Functionality.module.css";

export default function Functionalities(): ReactElement {
	return (
		<div id={style.functionalities}>
			<h1 id={style.title}>
				<span id={style.title_HOW}>HOW </span>DOES IT WORK?
			</h1>
			<div id={style.headline}>
				<p id={style.body}>
					Your journey, simplified in a few easy steps. Select your ride, set
					your schedule, and enjoy a smooth travel experience from start to
					finish
				</p>
			</div>
			<div id={style.functionalities_container}>
				<div className={style.functionality}>
					<span
						className={`${"material-symbols-outlined"} ${style.functionality_icon}`}
					>
						icon_name
					</span>
					<h2 className={style.functionality_title}>Create an Account</h2>
				</div>
				<div className={style.functionality}>
					<span
						className={`${"material-symbols-outlined"} ${style.functionality_icon}`}
					>
						icon_name
					</span>
					<h2 className={style.functionality_title}>Book Time and Date</h2>
				</div>
				<div className={style.functionality}>
					<span
						className={`${"material-symbols-outlined"} ${style.functionality_icon}`}
					>
						icon_name
					</span>
					<h2 className={style.functionality_title}>Select A Car Model</h2>
				</div>
				<div className={style.functionality}>
					<span
						className={`${"material-symbols-outlined"} ${style.functionality_icon}`}
					>
						icon_name
					</span>
					<h2 className={style.functionality_title}>Rent with D&I</h2>
				</div>
			</div>
		</div>
	);
}
