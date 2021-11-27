var axios = require('axios').default;

export const callExcersise = (url) => {
	var options = {
		method: 'GET',
		url: `${url}`,
		headers: {
			'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	axios
		.request(options)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.error(error);
		});
};
