"use strict";
import type { ReactElement } from "react";
import style from "../../styles/home/Home.module.css";
import HeroCTAs from "./HeroCTAs";
import BrowseCar from "./BrowseCar";

export default function Home(): ReactElement {
	return (
		<div id={style.home}>
			<HeroCTAs></HeroCTAs>
			<BrowseCar></BrowseCar>
		</div>
	);
}
