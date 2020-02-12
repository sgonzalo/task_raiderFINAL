import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PostJob = () => {
	const { actions } = useContext(Context);
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	const [hours, setHours] = useState("");
	const [payment, setPayment] = useState("");
	const [skills, setSkills] = useState("");
	const [zipcode, setZipcode] = useState("");

	return (
		<div className="backColor">
			{/* <div className="side2">
				<img src="https://i.imgur.com/8N3EJbL.jpg" className="imgComp" alt="..." />
			</div> */}
			{/* <div className="side1"> */}
			<form
				className="sign p-3"
				style={{ width: "80%", height: "auto", marginLeft: "0", marginRight: "0", display: "block" }}>
				<h1 className="text-center mt-2">Post a Job</h1>

				<div className="form-group row">
					<div className="col-6">
						<label>{"Job Title"}</label>

						<input
							type="text"
							// defaultValue={email}
							// onChange={e => setEmail(e.target.value)}
							className="form-control"
							placeholder="Enter The Job Title"
							defaultValue={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</div>
					<div className="col-6">
						<label>Skills</label>
						<input
							type="text"
							defaultValue={skills}
							onChange={e => setSkills(e.target.value)}
							className="form-control"
							placeholder="Enter Required Skills"
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-6">
						<label>City</label>
						<input
							type="text"
							defaultValue={date}
							onChange={e => setDate(e.target.value)}
							className="form-control"
							placeholder="Where's The Job?"
						/>
					</div>
					<div className="col-6">
						<label>Zip Code</label>
						<input
							type="text"
							defaultValue={zipcode}
							onChange={e => setZipcode(e.target.value)}
							className="form-control"
							placeholder="Enter The Job Zip Code"
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-6">
						<label>Hours Expected</label>
						<input
							type="text"
							defaultValue={hours}
							onChange={e => setHours(e.target.value)}
							className="form-control"
							placeholder="Enter Expected Hours of Work"
						/>
					</div>
					<div className="col-6">
						<label>Payment</label>
						<input
							type="text"
							defaultValue={payment}
							onChange={e => setPayment(e.target.value)}
							className="form-control"
							placeholder="How Much Does This Job Pay?"
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-7">
						<label>Job Description</label>
						<textarea
							type="text"
							className="form-control"
							defaultValue={description}
							onChange={e => setDescription(e.target.value)}
							// helperText={"You have " + (maxLength - descritption.length) + " left"}
							placeholder="What's The Job About?"
						/>
						{/* <p className="textLeft">
								{"You have "} {maxLength - description.length} {" left"}
							</p> */}
					</div>
					<div className="col-1" />
					<div className="col-4 mt-5">
						<Link to={"/"}>
							{/* This button is where it goes the POST method */}
							<button
								style={{ width: "100px" }}
								type="button"
								onClick={() => {
									actions.createJobPosting(hours, date, description, title, skills, payment, zipcode);
								}}
								className="btn btn-primary mr-3 form-control">
								Create
							</button>
						</Link>
						{/* Underlined prase instead of button? 'Already Member' */}
						<Link to="/">
							<button className="btn btn-primary ml-3 form-control" style={{ width: "100px" }}>
								Go Back
							</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
		// </div>
	);
};
