var axios = require('axios').default;

var options = {
	method: 'GET',
	url: 'https://recipesapi2.p.rapidapi.com/recipes/tomatosoup',
	params: { maxRecipes: '2' },
	headers: {
		'x-rapidapi-host': 'recipesapi2.p.rapidapi.com',
		'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
