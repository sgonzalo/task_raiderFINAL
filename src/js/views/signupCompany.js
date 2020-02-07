import React from "react";
import { Link } from "react-router-dom";

export const SignUpCompany = () => {
	return (
		<div className="content">
			<div className="container">
				<form
					className="sign p-3"
					style={{ width: "40%", height: "auto", marginLeft: "0", marginRight: "0", display: "block" }}>
					<h1 className="text-center mt-2">Sign up</h1>
					<div>
						<div className="form-group">
							<label>{"Title"}</label>

							<input type="text" className="form-control" placeholder="Title" />
						</div>
						<div className="form-group">
							<label>Github Link</label>
							<input type="text" className="form-control" placeholder="Enter github link" />
						</div>
						<div className="form-group">
							<label>Demo Link</label>
							<input type="text" className="form-control" placeholder="Demo link" />
						</div>
						<div className="form-group">
							<label>Demo Link</label>
							<input type="text" className="form-control" placeholder="Demo link" />
						</div>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea
							type="text"
							className="form-control"
							// helperText={"You have " + (maxLength - descritption.length) + " left"}
							placeholder="Company description"
						/>
						{/* <p className="textLeft">
								{"You have "} {maxLength - description.length} {" left"}
							</p> */}
					</div>

					<Link to={"/home"}>
						<button style={{ width: "100px" }} type="button" className="btn btn-primary form-control mr-5">
							create
						</button>
					</Link>
					<Link to="/home">
						<button className="btn btn-primary form-control" style={{ width: "100px" }}>
							Go Back
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
