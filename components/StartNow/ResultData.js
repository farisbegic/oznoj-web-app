import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';

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
			<h2>Your BMI Information</h2>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Your BMI Index is</h3>
					<h1>{BMIIndex.bmi}</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Your BMI Index is</h3>
					<h1>{BMIIndex.bmi}</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Your BMI Index is</h3>
					<h1>{BMIIndex.bmi}</h1>
				</div>
			</div>
		</div>
	);
};

export default ResultData;
