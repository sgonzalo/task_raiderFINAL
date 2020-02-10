import React from "react";

export const JobCard = () => {
	return (
		<div className="form-group row">
			<div className="col-2" />
			<div className="col-8 mb-4">
				<div className="card">
					<div className="skills p-2">
						<div className="skillsDiv text-center ">
							<label>
								<strong>Skills Needed</strong>
							</label>
							<p>Management</p>
						</div>
						{/* <label>Management</label> */}
					</div>
					<div className="card-body p-1">
						<h5 className="card-titl">Card title</h5>
						<label className="date" />
						<p className="card-text description">
							This is a longer card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer. This is a longer card with supporting text below as a
							natural lead-in to additional content. This content is a little bit longer.
						</p>
					</div>

					<div className="city">
						<label>Located at:</label>
					</div>
					<div className="hours">
						<label>Hours expected:</label>
					</div>
					<div className="rate">
						<label>Rate:</label>
					</div>
				</div>
			</div>
			<div className="col-2" />
		</div>
	);
};
