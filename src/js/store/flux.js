const url = "https://taskraider.herokuapp.com/company";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			company: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getMethod: () => {
				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("resulttt", result);
						setStore({
							company: result
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
					getActions().getMethod();
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
