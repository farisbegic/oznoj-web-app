import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';

const ResultData = ({
	BMIIndex,
	macros,
	dailyCalories,
	idealWeight,
	bfPer,
}) => {
	console.log(dailyCalories);
	if (!macros) return 'Loading...';

	return (
		<div className='sexy_data'>
			<h2>Your BMI Data</h2>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Your BMI Index is</h3>
					<h1>{BMIIndex.bmi}</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Health</h3>
					<h1>{BMIIndex.health}</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Healthy BMI Range:</h3>
					<h1>{BMIIndex.healthy_bmi_range}</h1>
				</div>
			</div>
			<h2>Your Macros</h2>
			<h1>Calories: {macros?.calorie?.toFixed(2)}</h1>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Balanced Intake</h3>
					<h4>Protein: {macros?.balanced?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.balanced?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.balanced?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Low Fat</h3>
					<h4>Protein: {macros?.lowfat?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.lowfat?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.lowfat?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Low Carbs:</h3>

					<h4>Protein: {macros?.lowcarbs?.protein.toFixed(2)}g</h4>
					<h4>Fat: {macros?.lowcarbs?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.lowcarbs?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>High Protein:</h3>

					<h4>Protein: {macros?.highprotein?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.highprotein?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.highprotein?.carbs?.toFixed(2)}g</h4>
				</div>
			</div>
			<h2>Your Daily Calorie Intake</h2>
			<h1>BMR: {macros?.calorie?.toFixed(2)}</h1>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Balanced Intake</h3>
					<h4>Protein: {macros?.balanced?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.balanced?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.balanced?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Low Fat</h3>
					<h4>Protein: {macros?.lowfat?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.lowfat?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.lowfat?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Low Carbs:</h3>

					<h4>Protein: {macros?.lowcarbs?.protein.toFixed(2)}g</h4>
					<h4>Fat: {macros?.lowcarbs?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.lowcarbs?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>High Protein:</h3>

					<h4>Protein: {macros?.highprotein?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.highprotein?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.highprotein?.carbs?.toFixed(2)}g</h4>
				</div>
			</div>
		</div>
	);
};

export default ResultData;
