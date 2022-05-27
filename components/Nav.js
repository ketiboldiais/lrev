import React, { useState, useRef } from "react";
import navStyles from "../styles/Nav.module.css";
import Routes from "./Routes";
import Tree from "./TreeList";

const Nav = () => {
	const ref = useRef();
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};
	return (
		<nav className={navStyles.nav}>
			<div className={navStyles.headBar}>
				<button onClick={handleToggle} ref={ref}>
					{navbarOpen
						? "Close Topics List"
						: "Topics"}
				</button>
			</div>
			<div
				className={`${navStyles.navContent} ${
					navbarOpen ? navStyles.showNav : ""
				}`}>
				<Tree data={Routes} allLinks={true} clickHandler={handleToggle}/>
			</div>
		</nav>
	);
};
export default Nav;
