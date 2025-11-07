"use strict";

import type { ReactElement } from "react";
import style from "../../styles/home/Footer.module.css";

export default function Footer(): ReactElement {
	return (
		<div id={style.footer}>
			<div id={style.information}>
				<div id={style.information}>
					<h1 id={style.company}>D&I</h1>
					<h4 id={style.company_tagline}>Tara, laag ta.</h4>
					<div id={style.contacts}>
						<h3 id={style.location}>
							Guada Plains Guadalupe, Cebu City, Philippines
						</h3>
						<h3 id={style.phone_number}>
						Contact Us at <a href="tel:+639123456789">+63 912 345 6789</a>
						</h3>
					</div>
				</div>
				<div id={style.legal}></div>
			</div>
		</div>
	);
}
