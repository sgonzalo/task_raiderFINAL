import React from "react";
import { Link } from "react-router-dom";
import street from "../../img/street.jpg";
import logo from "../../img/logo.png";

export const Login = () => {
	return (
		<div className="backColor">
			<div className="side1">
				<div className="about" />
				<img className="imgLogo" src={logo} alt="..." />
				<h1 className="text-center mt-2">Mission Statement</h1>
				<p className="text-center mt-2">
					Our passion is to provide the top possible matches between employer and contractor in any
					industries. We have a foundational belief that creating relationships and connecting people is what
					moves companies and employees forward.
				</p>
			</div>

			<form className="p-3 login">
				<h1 className="text-center mt-2">Login</h1>
				<div>
					<div className="form-group">
						<label>E-mail</label>
						<input type="text" className="form-control" placeholder="Enter Your Email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="text" className="form-control" placeholder="Enter Your Password" />
					</div>
				</div>
				<Link to={"/signup"}>
					<button style={{ width: "100px" }} type="button" className="btn btn-primary form-control mr-5">
						Sign Up
					</button>
				</Link>
				<Link to="/">
					<button className="btn btn-primary form-control" style={{ width: "100px" }}>
						Login
					</button>
				</Link>
			</form>
			<div className="side2">
				<img src={street} className="imgLogin" alt="..." />
			</div>
		</div>
	);
};
