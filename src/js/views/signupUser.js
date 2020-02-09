import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUpUser = () => {
    const { store, actions } = useContext(Context);
	const [contactInfo, setContactInfo] = useState("");
	const [firstandlastName, setFirstandLastName] = useState("");
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
						style={{ width: "40%", height: "auto", marginLeft: "0", marginRight: "0", display: "block" }}>
						<h1 className="className=text-center mt-5">Sign up</h1>
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
                                    type="text"
                                    defaultValue={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="form-control" 
                                    placeholder="Enter Your Password" />
							</div>
							<div className="form-group">
								<label>Contact Information</label>
                                <input 
                                    type="text"
                                    defaultValue={contactInfo}
                                    onChange={e => setContactInfo(e.target.value)}
                                    className="form-control" 
                                    placeholder="Enter Your Phone Number" />
							</div>
							<div className="form-group">
								<label>First and Last Name</label>
								<input
                                    type="text"
                                    defaultValue={firstandlastName}
                                    onChange={e => setFirstandLastName(e.target.value)}
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
									placeholder="Enter Any Unique Skills You Have"
								/>
							</div>
						</div>
						{/* POST Method for creating a user */}
						<Link to={"/home"}>
							<button
								style={{ width: "100px" }}
								type="button"
								className="btn btn-primary form-control mr-5"
								onClick={() => {
									alert("Create a User");
								}}>
								Sign In
							</button>
						</Link>
						<Link to="/home">
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
