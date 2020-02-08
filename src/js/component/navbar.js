import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<a href="#" className="navbar-brand">
				<img src="images/logo.svg" height="28" alt="Job Posting, Work" />
			</a>
			<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<div className="navbar-nav">
					<a href="#" className="nav-item nav-link active">
						Home
					</a>
					<a href="#" className="nav-item nav-link">
						Profile
					</a>
					<a href="#" className="nav-item nav-link">
						Messages
					</a>
					<a href="#" className="nav-item nav-link disabled" tabIndex="-1">
						Reports
					</a>
				</div>
				<div className="navbar-nav ml-auto">
					<a href="#" className="nav-item nav-link">
						Login
					</a>
				</div>
			</div>
		</nav>
	);
};
// <nav className="navbar navbar-light bg-light mb-3 h-20">
// 	<div className="navItems">
// 		<Link to="/">
// 			<span className="navbar-brand mb-0 h1">About</span>
// 		</Link>
// 		<Link to="/">
// 			<span className="navbar-brand mb-0 h1">Login</span>
// 		</Link>
// 		<Link to="/demo">
// 			<span className="navbar-brand mb-0 h1">Sign up</span>
// 		</Link>
// 		<Link to="/">
// 			<span className="navbar-brand mb-0 h1">sss</span>
// 		</Link>
// 		<Link to="/">
// 			<span className="navbar-brand mb-0 h1">sss</span>
// 		</Link>
// 		<Link to="/">
// 			<span className="navbar-brand mb-0 h1">sss</span>
// 		</Link>
// 	</div>
// </nav>
