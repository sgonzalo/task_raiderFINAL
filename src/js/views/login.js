import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import street from "../../img/street.jpg";
import logo from "../../img/logo.png";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Login = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { actions, store } = useContext(Context);
	return (
		<div className="backColor">
			<div className="side1">
				{/* Image Logo */}
				<div>
					<img className="imgLog" src={logo} alt="..." />
				</div>
				{/* Mission Statement */}
				<div className="about">
					<h4 className="text-center mb-0 mt-2 missionSta">Mission Statement</h4>
					<blockquote className="mb-1">
						<p className="justify-content mb-1 pr-3 pl-3 mt-2">
							&quot;Our passion is to provide the top possible matches between employer and contractor in
							any industries. We have a foundational belief that creating relationships and connecting
							people is what moves companies and employees forward.&quot;
						</p>
						{/* <p className="font-italic">Santiago Gonçalo</p> */}
						<cite className="float-right mr-2" title="Santiago Gonzalo">
							- Santiago Gonzalo and Tim Salinas
						</cite>
					</blockquote>
				</div>
				{/* Login Component */}
				<div className="p-3 login">
					<h1 className="text-center mt-2">Login</h1>
					<div>
						<div className="form-group">
							<label>E-mail</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter Your Email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter Your Password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="buttonLogin">
						<Link to={"/signup"}>
							<button
								style={{ width: "100px" }}
								type="button"
								className="btn btn-primary form-control mr-1">
								Sign Up
							</button>
						</Link>
						<button to="/">
							<button
								onClick={() => {
									actions.login(email, password, props.history);
								}}
								className="btn btn-primary form-control"
								style={{ width: "100px" }}>
								Login
							</button>
						</button>
					</div>
				</div>
			</div>
			<div className="side2">
				<img src={street} className="imgLogin" alt="..." />
			</div>
		</div>
	);
};
Login.propTypes = {
	history: PropTypes.object
};
