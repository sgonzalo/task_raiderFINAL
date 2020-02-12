import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUpUser = () => {
	const { actions } = useContext(Context);

	const [contactInfo, setContactInfo] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [skills, setSkills] = useState("");

	return (
		<div className="content">
			<div className="container">
				<div className="side2" />
				<img src="https://i.imgur.com/svdzVi4.jpg" className="imgUser" alt="..." />
				<div>
					<form
						className="sign"
						style={{
							width: "40%",
							height: "auto",
							marginLeft: "0",
							marginRight: "0",
							padding: "7px",
							display: "block"
						}}>
						<h1 className="className=text-center mt-5">Looking For A Job?</h1>
						<Link to="/signupcompany">
							<button className="btn btn-primary form-control" style={{ width: "100px" }}>
								Company
							</button>
						</Link>
						<div>
							<div className="form-group">
								<label>{"Enter You Email"}</label>

								<input
									type="text"
									defaultValue={email}
									onChange={e => setEmail(e.target.value)}
									className="form-control"
									placeholder="Email"
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="password"
									defaultValue={password}
									onChange={e => setPassword(e.target.value)}
									className="form-control"
									placeholder="Enter Your Password"
								/>
							</div>
							<div className="form-group">
								<label>Contact Information</label>
								<input
									type="text"
									defaultValue={contactInfo}
									onChange={e => setContactInfo(e.target.value)}
									className="form-control"
									placeholder="Enter Your Phone Number"
								/>
							</div>
							<div className="form-group">
								<label>Name</label>
								<input
									type="text"
									defaultValue={name}
									onChange={e => setName(e.target.value)}
									className="form-control"
									placeholder="Enter Your First and Last Name"
								/>
							</div>
							<div className="form-group">
								<label>Skills</label>
								<input
									type="text"
									className="form-control"
									defaultValue={skills}
									onChange={e => setSkills(e.target.value)}
									placeholder="Enter A Skill You Have"
								/>
							</div>
						</div>
						{/* POST Method for creating a user */}
						<Link to={"/"}>
							<button
								style={{ width: "100px" }}
								type="button"
								className="btn btn-primary form-control mr-5"
								onClick={() => {
									actions.createUser(contactInfo, email, name, password, skills);
								}}>
								Create
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
		</div>
	);
};
