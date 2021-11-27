var axios = require('axios').default;

export const getBMIndex = async (age, weight, height) => {
	var options = {
		method: 'GET',
		url: 'https://fitness-calculator.p.rapidapi.com/bmi',
		params: { age: `${age}`, weight: `${weight}`, height: `${height}` },
		headers: {
			'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	try {
		return await axios.request(options);
	} catch (err) {
		console.log(err);
	}
};

export const getMacros = async (
	age,
	gender,
	height,
	weight,
	activityLevel,
	goal
) => {
	var options = {
		method: 'GET',
		url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
		params: {
			age: `${age}`,
			gender: `${gender}`,
			height: `${height}`,
			weight: `${weight}`,
			activitylevel: `${activityLevel}`,
			goal: `${goal}`,
		},
		headers: {
			'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	try {
		return await axios.request(options);
	} catch (err) {
		console.log(err);
	}
};
