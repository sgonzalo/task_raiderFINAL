import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="form-group row">
				<div className="col-10" />
				<div className="col-1 m-2">
					<Link to="postjob">
						<button type="button" className="btn-primary">
							Post a Job
						</button>
					</Link>
				</div>
			</div>
			<div className="text-center mt-5">Job Posting</div>
			<div className="form-group row">
				<div className="col-2" />
				<div className="col-8 mb-4">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
				<div className="col-2" />
			</div>
		</div>
	);
};
