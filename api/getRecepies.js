export const getRecipes = async () => {
	var axios = require('axios').default;
	var options = {
		method: 'GET',
		url: 'https://edamam-recipe-search.p.rapidapi.com/search',
		params: {q: 'healthy'},
		headers: {
			'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
			'x-rapidapi-key': 'c5aa363243mshc733fe979990d3fp10b19bjsnfd3d6cf48b0f'
		}
	};

	return await axios.request(options);
};
