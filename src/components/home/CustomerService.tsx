"use strict";

import type { ReactElement } from "react";
import style from "../../styles/home/CustomerService.module.css";

export default function CustomerService(): ReactElement {
	return (
		<div id={style.customer_service}>
			<div id={style.reviews_container}>
				<h1 id={style.title}>
					Customer <span id={style.title_Service}>Service</span>
				</h1>
				<div id={style.review_tabs}>
					<h2 className={style.review_tab}>General Overview</h2>
					<h2 className={style.review_tab}>Others</h2>
				</div>
				<div id={style.reviews}>
					<div className={style.review}></div>
					<div className={style.review}></div>
					<div className={style.review}></div>
					<div className={style.review}></div>
				</div>
			</div>
			<div id={style.mascot_container}></div>
		</div>
	);
}
