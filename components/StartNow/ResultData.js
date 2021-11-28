import React, { useState, useEffect } from 'react';

const ResultData = ({
	BMIIndex,
	macros,
	dailyCalories,
	idealWeight,
	bfPer,
}) => {
	console.log(macros);
	console.log(dailyCalories);
	console.log(idealWeight);
	console.log(bfPer);
	return (
		<div className='sexy_data'>
			<h4>Your BMI Index is : {BMIIndex.bmi}</h4>
			<h4> Your health status according to your BMI is: {BMIIndex.health} </h4>
			<h4>
				Please note that the healthy BMI range is in a range:{' '}
				{BMIIndex.healthy_bmi_range}
			</h4>
			<h4>{console.log(macros.balanced)}</h4>
		</div>
	);
};

export default ResultData;
