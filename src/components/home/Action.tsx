"use strict";

import type { ReactElement } from "react";
import style from "../../styles/Action.module.css";

export default function Action(): ReactElement {
	return (
		<div id={style.actions}>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					location_on
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Action</h3>
					<h4 className={style.action_desc}>dAction</h4>
				</div>
			</div>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					location_on
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Action</h3>
					<h4 className={style.action_desc}>dAction</h4>
				</div>
			</div>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					location_on
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Action</h3>
					<h4 className={style.action_desc}>dAction</h4>
				</div>
			</div>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					location_on
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Action</h3>
					<h4 className={style.action_desc}>dAction</h4>
				</div>
			</div>
			<div className={style.action}>
				<span className={`${"material-symbols-outlined"} ${style.action_icon}`}>
					location_on
				</span>
				<div className={style.action_text}>
					<h3 className={style.action_title}>Action</h3>
					<h4 className={style.action_desc}>dAction</h4>
				</div>
			</div>
			<span className={`${"material-symbols-outlined"}`} id={style.search}>
				search
			</span>
		</div>
	);
}
