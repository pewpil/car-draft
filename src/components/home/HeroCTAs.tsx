"use strict";
import type { ReactElement } from "react";
import style from "../../styles/HeroCTAs.module.css";

import NavBar from "./NavBar";
import Hero from "./Hero";
import Action from "./Action";

export default function HeroCTAs(): ReactElement {
	return (
		<div id={style.hero_ctas}>
			<NavBar></NavBar>
			<Hero></Hero>
			<Action></Action>
		</div>
	);
}
