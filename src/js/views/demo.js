import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "./signup.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="content">
			<div className="left">
				<div className="company">esquerda</div>
			</div>
			<div className="right">
				<div className="user">direita</div>
			</div>
		</div>
	);
};
