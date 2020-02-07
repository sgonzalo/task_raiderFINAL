import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 h-20">
			<div className="position">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">About</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Login</span>
				</Link>
				<Link to="/demo">
					<span className="navbar-brand mb-0 h1">Sign up</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">sss</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">sss</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">sss</span>
				</Link>
			</div>
		</nav>
	);
};
