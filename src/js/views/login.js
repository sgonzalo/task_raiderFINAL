import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div className="backColor">
			<form className="sign p-3 login">
				<h1 className="text-center mt-2">Login</h1>
				<div>
					<div className="form-group">
						<label>Github Link</label>
						<input type="text" className="form-control" placeholder="Enter github link" />
					</div>
					<div className="form-group">
						<label>Demo Link</label>
						<input type="text" className="form-control" placeholder="Demo link" />
					</div>
				</div>
				<Link to={"/signup"}>
					<button style={{ width: "100px" }} type="button" className="btn btn-primary form-control mr-5">
						sign up
					</button>
				</Link>
				<Link to="/">
					<button className="btn btn-primary form-control" style={{ width: "100px" }}>
						Login
					</button>
				</Link>
			</form>
		</div>
	);
};
