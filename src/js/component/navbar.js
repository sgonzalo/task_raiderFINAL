import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<a href="#" className="navbar-brand">
				<img className="imgLogo" src={logo} height="28" alt="Job Posting, Work" />
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
				</div>
				<div className="navbar-nav ml-auto">
					<div className="ml-2">
						<a href="https://www.instagram.com/task_raider" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-instagram" />
						</a>
					</div>
					<div className="ml-2">
						<a href="https://www.twitter.com/raider_task" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter" />
						</a>
					</div>
					<div className="ml-2">
						<a href="https://www.facebook.com/task_raider" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-facebook-square" />
						</a>
					</div>
					<Link to="/login">
						<button className="btn btn-primary form-control ml-2" style={{ width: "100px" }}>
							Log Out
						</button>
					</Link>
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
