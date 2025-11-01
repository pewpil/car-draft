"use strict";

import type { ReactElement } from "react";
import style from "../../styles/home/Action.module.css";

export default function Action(): ReactElement {
	return (
		<div id={style.actions}>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					location_on
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Pick-up location</h3>
					<h4 className={style.action_desc}>City, airport or ...</h4>
				</div>
			</div>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					event_upcoming
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Pick-up date</h3>
					<h4 className={style.action_desc}>12/10/2025</h4>
				</div>
			</div>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					delivery_truck_speed
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Time</h3>
					<h4 className={style.action_desc}>10:00</h4>
				</div>
			</div>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					calendar_check
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Drop-off Date</h3>
					<h4 className={style.action_desc}>12/10/2025</h4>
				</div>
			</div>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					hand_package
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Time</h3>
					<h4 className={style.action_desc}>10:00</h4>
				</div>
			</div>
			<span className={`${"material-symbols-outlined"}`} id={style.search}>
				search
			</span>
		</div>
	);
}
