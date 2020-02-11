import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const JobCard = () => {
	const { store } = useContext(Context);
	console.log("testing job posting", store.jobPosting);
	return (
		<div>
			{store.jobPosting.map((e, index) => {
				return (
					<div key={index} className="form-group row">
						<div className="col-2" />
						<div className="col-8 mb-4">
							<div className="card">
								<div className="skills p-2">
									<div className="skillsDiv text-center ">
										<label>
											<strong>Skills Needed</strong>
										</label>
										<p>{e.skills_needed}</p>
									</div>
									{/* <label>Management</label> */}
								</div>
								<div className="card-body p-1">
									<h5 className="card-title">{e.job_title}</h5>
									<label className="date" />
									<p className="card-text description">{e.job_description}</p>
								</div>

								<div className="city">
									<label>
										Located at: <strong>{e.zip_code}</strong>
									</label>
								</div>
								<div className="hours">
									<label>
										Hours expected:
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
