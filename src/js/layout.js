import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// IMPORTING VIEWS
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Login } from "./views/login";
import { Single } from "./views/single";
import { SignUpCompany } from "./views/signupCompany";
import { SignUpUser } from "./views/signupUser";
import injectContext from "./store/appContext";

// IMPORTING COMPONENTS
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUpCompany} />
						<Route path="/signupuser" component={SignUpUser} />
						<Route path="/signupcompany" component={SignUpCompany} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
