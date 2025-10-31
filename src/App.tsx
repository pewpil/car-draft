"use strict";
import type { ReactElement } from "react";
import Home from "./components/home/Home";
import style from "./App.module.css";

function App(): ReactElement {
	return (
		<div id={style.app}>
			<Home></Home>
		</div>
	);
}

export default App;
