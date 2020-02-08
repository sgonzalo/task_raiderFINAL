import React from "react";
import { Link } from "react-router-dom";

export const SignUpCompany = () => {
	return (
		<div className="backColor">
			<div className="side2">
				<img src="https://i.imgur.com/O1dfRgE.jpg" className="imgComp" alt="..." />
			</div>
			<div className="side1">
				<form
					className="sign p-3"
					style={{ width: "80%", height: "auto", marginLeft: "0", marginRight: "0", display: "block" }}>
					<h1 className="text-center mt-2">Sign Up Your Company</h1>
					<div>
						<div className="form-group">
							<label>{"Email"}</label>

							<input type="text" className="form-control" placeholder="Enter Your Email" />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="text" className="form-control" placeholder="Enter Your Password" />
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" placeholder="Enter Your Company Address" />
						</div>
						<div className="form-group">
							<label>Company Name</label>
							<input type="text" className="form-control" placeholder="Enter Your Company's Name" />
						</div>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea
							type="text"
							className="form-control"
							// helperText={"You have " + (maxLength - descritption.length) + " left"}
							placeholder="What's Your Company About?"
						/>
						{/* <p className="textLeft">
								{"You have "} {maxLength - description.length} {" left"}
							</p> */}
					</div>

					<Link to={"/home"}>
						<button style={{ width: "100px" }} type="button" className="btn btn-primary form-control mr-5">
							Sign In
						</button>
					</Link>
					<Link to="/">
						<button className="btn btn-primary form-control" style={{ width: "100px" }}>
							Go Back
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
