"use strict";
import type { ReactElement } from "react";
import style from "../../styles/Home.module.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Action from "./Action";

export default function Home(): ReactElement {
	return (
		<div id={style.home}>
			<NavBar></NavBar>
			<Hero></Hero>
			<Action></Action>
		</div>
	);
}
