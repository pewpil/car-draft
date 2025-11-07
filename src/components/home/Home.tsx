"use strict";
import type { ReactElement } from "react";
import style from "../../styles/home/Home.module.css";
import HeroCTAs from "./HeroCTAs";
import BrowseCar from "./BrowseCar";
import Features from "./Features";
import Functionalities from "./Functionalities";
import CustomerService from "./CustomerService";
import Footer from "./Footer";

export default function Home(): ReactElement {
	return (
		<div id={style.home}>
			<HeroCTAs></HeroCTAs>
			<BrowseCar></BrowseCar>
			<Features></Features>
			<Functionalities></Functionalities>
			<CustomerService></CustomerService>
			<Footer></Footer>
		</div>
	);
}
