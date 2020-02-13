const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentCompany: null,
			companies: [],
			currentUser: [],
			jobPostings: [],
			email: [],
			email2: []
		},
		actions: {
			// login: (){
			//fetch
			// setStore({
			//     company: data.company,
			//     user: data.user,
			//     token: data.token
			// });
			// }
			// Use getActions to call a function within a fuction
			getAllCompanies: () => {
				fetch(process.env.API_URL + "/company")
					.then(res => res.json())
					.then(result => {
						console.log("get company", result);
						setStore({
							companies: result
						});
					});
			},
			getUser: () => {
				fetch(process.env.API_URL + "/user")
					.then(res => res.json())
					.then(result => {
						console.log("get user", result);
						setStore({
							currentUser: result
						});
					});
			},
			// ######################## email test ###############################
			getEmail: () => {
				fetch(process.env.API_URL + "/test_email_two")
					.then(res => res.json())
					.then(result => {
						console.log("eeemaaaaiiiiilllll", result);
						setStore({ email: result });
					});
			},
			getEmail2: () => {
				fetch(process.env.API_URL + "/test_email")
					.then(res => res.json())
					.then(result => {
						console.log("eeemaaaa", result);
						setStore({ email2: result });
					});
			},
			getJobPosting: () => {
				// jobPostingUrl variable tht holds the URL address
				fetch(process.env.API_URL + "/jobposting")
					// .then happens when fetch finishes and res is parameter we choose. It can be any name. It will holds the value
					//coming from the fetch function. => It will be transformed that value into an object.
					.then(res => res.json())
					//result it's been set as a value for the jobPosting:[]
					.then(result => {
						console.log("get job Posting", result);
						setStore({
							jobPostings: result
						});
					});
			},
			// This function will crete company in sign up company
			createCompany: (address, companyDescription, companyName, email, password, history) => {
				fetch(process.env.API_URL + "/company", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						address: address,
						company_description: companyDescription,
						company_name: companyName,
						email: email,
						password: password
					})
				})
					.then(resp => {
						if (resp.status === 200) return resp.json();
						else throw Error("There was en error");
					})
					.then(data => {
						setStore({ currentCompany: data });
						history.push("/");
					})
					.catch(error => {
						alert("There was an error");
						console.log(error);
					});
			},
			createUser: (contact_info, email, name, password, skills) => {
				fetch(process.env.API_URL + "/user", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						contact_info: contact_info,
						email: email,
						name: name,
						password: password,
						skills: skills
					})
				}).then(() => {
					getActions().getUser();
				});
			},
			createJobPosting: (hours, date, description, title, skills, payment, zipcode, history) => {
				// const store = getStore();
				const store = getStore();
				if (!store.currentCompany) throw Error("You need to login");

				fetch(process.env.API_URL + "/jobposting", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						hours_expected: hours,
						job_date: date,
						job_description: description,
						job_title: title,
						payment: payment,
						skills_needed: skills,
						zip_code: zipcode,
						company_id: store.currentCompany.id
					})
				})
					.then(resp => {
						if (resp.status === 200) return resp.json();
					})
					.then(data => {
						const store = getStore();
						setStore({ jobPostings: store.jobPostings.concat([data]) });
						history.push("/");
					})
					.catch(error => {
						alert("There was an error adding the job posting");
						console.log("job posting error", error);
					});
			},
			deletePosting: id => {
				fetch(process.env.API_URL + "/jobposting/" + id, {
					method: "delete"
				}).then(() => {
					getActions().getJobPosting();
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
