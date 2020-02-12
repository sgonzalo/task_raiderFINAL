import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const JobCard = () => {
	const { store } = useContext(Context);
	const [button, setButton] = useState("Apply");
	console.log("testing job posting", store.jobPosting);
	return (
		<div>
			{store.jobPosting &&
				store.jobPosting.map((e, index) => {
					return (
						<div key={index} className="form-group row">
							<div className="col-2" />
							<div className="col-8 mb-4">
								<div className="card">
									<img id="logo" src="logo.png" alt="..." />
									<div className="skills p-2">
										<div className="skillsDiv text-center ">
											<label>
												<strong>
													<u>Skills Needed</u>
												</strong>
											</label>
											<p>{e.skills_needed}</p>
										</div>
										{/* <label>Management</label> */}
										<button
											className="btn btn-primary form-control m-2"
											onClick={() => {
												alert("email confirmation was sent");
												setButton("Applied");
											}}
											style={{ position: "absolute", width: "100px", bottom: "0", left: "20%" }}>
											{button}
										</button>
									</div>
									<div className="card-body p-1">
										<h5 className="card-title">{e.job_title}</h5>
										<div>
											<i className="fas fa-trash-alt" />
										</div>
										<label className="date" />
										<p className="card-text description">{e.job_description}</p>
									</div>

									<div className="city">
										<label>
											Location: <strong>{e.zip_code}</strong>
										</label>
									</div>
									<div className="hours">
										<label>
											Hours Expected:
											<strong>{e.hours_expected}</strong>
										</label>
									</div>
									<div className="rate">
										<label>
											Rate:
											<strong>{e.payment}</strong>
										</label>
									</div>
								</div>
							</div>
							<div className="col-2" />
						</div>
					);
				})}
		</div>
	);
};
