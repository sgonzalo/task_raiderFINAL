import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import { JobCard } from "../component/jobCard";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="form-group row">
				<div className="col-1" />
				<div className="col-1 m-2">
					<Link to="postjob">
						<button type="button" className="btn-primary">
							Post a Job
						</button>
					</Link>
				</div>
			</div>
			<div className="text-center m-3">
				<font size="6">
					<font color="blue">
						<strong>
							<u>Tasks Available</u>
						</strong>
					</font>
				</font>
			</div>
			<JobCard />
		</div>
	);
};
