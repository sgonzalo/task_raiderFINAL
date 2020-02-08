import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "./signup.scss";
//this component is not being used!!
export const Demo = () => {
	const { store, actions } = useContext(Context);

	return <div />;
};
