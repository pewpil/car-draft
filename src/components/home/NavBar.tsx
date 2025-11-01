"use strict";
import type { ReactElement } from "react";
import style from "../../styles/home/NavBar.module.css";

export default function NavBar(): ReactElement {
	return (
		<nav id={style.navbar}>
			<h1 id={style.company}>
				D<span className={style.calg}>&</span>I
			</h1>
			<div id={style.nav_actions}>
				<span className={`${"material-symbols-outlined"} ${style.icon}`}>
					menu
				</span>
				<span className={`${"material-symbols-outlined"} ${style.icon}`}>
					account_circle
				</span>
			</div>
		</nav>
	);
}
