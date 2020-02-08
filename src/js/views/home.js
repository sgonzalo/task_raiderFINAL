import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="text-center mt-5">Job Posting</div>
		</div>
	);
};
