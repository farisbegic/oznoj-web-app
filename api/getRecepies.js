var axios = require('axios').default;

export const funkcija = async (imejela) => {
	var options = {
		method: 'GET',
		url: `https://recipesapi2.p.rapidapi.com/recipes/${imejela}`,
		params: { maxRecipes: '1' },
		headers: {
			'x-rapidapi-host': 'recipesapi2.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	return await axios.request(options);
};
