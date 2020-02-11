const companyUrl = "https://taskraider.herokuapp.com/company";
const userUrl = "https://taskraider.herokuapp.com/user";
const jobPostingUrl = "https://taskraider.herokuapp.com/jobposting";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			company: [],
			user: [],
			jobPosting: []
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
			// getCompany: () => {
			// 	fetch(companyUrl)
			// 		.then(res => res.json())
			// 		.then(result => {
			// 			console.log("get company", result);
			// 			setStore({
			// 				company: result
			// 			});
			// 		});
			// },
			getUser: () => {
				fetch(userUrl)
					.then(res => res.json())
					.then(result => {
						console.log("get user", result);
						setStore({
							user: result
						});
					});
			},
			getJobPosting: () => {
				// jobPostingUrl variable tht holds the URL address
				fetch(jobPostingUrl)
					// .then happens when fetch finishes and res is parameter we choose. It can be any name. It will holds the value
					//coming from the fetch function. => It will be transformed that value into an object.
					.then(res => res.json())
					//result it's been set as a value for the jobPosting:[]
					.then(result => {
						console.log("get job Posting", result);
						setStore({
							jobPosting: result
						});
					});
			},
			// This function will crete company in sign up company
			createCompany: (address, companyDescription, companyName, email, password) => {
				fetch(url, {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						address: address,
						company_description: companyDescription,
						company_name: companyName,
						email: email,
						password: password
					})
				}).then(() => {
					getActions().getCompany();
				});
			},
			createUser: (contact_info, email, name, password, skills) => {
				fetch(userUrl, {
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
			createJobPosting: (hours, date, description, title, skills, payment, zipcode) => {
				const store = getStore();
				fetch(jobPostingUrl + "/1", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						hours_expected: hours,
						job_date: "date",
						job_description: "ajhsjashjahsjahsjahsjahsjhjahsjahsjhjahsjahsjahsjahjshajhs",
						job_title: "Titleeeeeeeee",
						payment: "$500/h",
						skills_needed: "html and css",
						zip_code: "lua"
					})
				}).then(() => {
					getActions().getUser();
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
