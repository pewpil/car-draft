"use strict";

import type { ReactElement } from "react";
import style from "../../styles/Hero.module.css";

export default function Hero(): ReactElement {
	return (
		<div id={style.hero}>
			<h1 id={style.headline}>AFFORDABLE CAR RENTAL IN CEBU.</h1>
		</div>
	);
}
