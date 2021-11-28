import { Grid, Typography, Card } from '@material-ui/core';
import React from 'react';
import { workouts } from '../../api/personalizedWorkouts';

const WorkoutRecommend = () => {
	return (
		<Grid container spacing={2}>
			{workouts.map(({ aboutTheProgram }, index) => (
				<Grid key={index} item xs={12} sm={12}>
					<Card gutterBottom>
						<Typography variant='h3'>{aboutTheProgram.name}</Typography>
						<Typography variant='h5'>
							Goal of this program is: {aboutTheProgram.goal}
						</Typography>
						<Typography variant='h6'>This is a</Typography>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default WorkoutRecommend;
