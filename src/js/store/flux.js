const companyUrl = "https://taskraider.herokuapp.com/company";
const userUrl = "https://taskraider.herokuapp.com/user";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			company: [],
			user: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCompany: () => {
				fetch(companyUrl)
					.then(res => res.json())
					.then(result => {
						console.log("get company", result);
						setStore({
							company: result
						});
					});
			},
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
