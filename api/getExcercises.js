var axios = require('axios').default;

var getAllExcersises = {
	method: 'GET',
	url: 'https://exercisedb.p.rapidapi.com/exercises',
	headers: {
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
	},
};

const fetchAllExcersises = () => {
	axios
		.request(getAllExcersises)
		.then(function ({ data }) {
			return data;
		})
		.catch(function (error) {
			console.error(error);
		});
};

fetchAllExcersises();
