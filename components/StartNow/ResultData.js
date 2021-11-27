import React, { useState, useEffect } from 'react';

const ResultData = ({ BMIIndex, macros }) => {
	console.log(macros);
	return (
		<div>
			<h4>Your BMI Index is : {BMIIndex.bmi}</h4>
			<h4> Your health status according to your BMI is: {BMIIndex.health} </h4>
			<h4>
				Please note that the healthy BMI range is in a range:{' '}
				{BMIIndex.healthy_bmi_range}
			</h4>
			<h4></h4>
		</div>
	);
};

export default ResultData;
