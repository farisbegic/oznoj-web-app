import React, { useState, useEffect } from 'react';
import {
	Typography,
	Card,
	CardContent,
	Grid,
	TextField,
	Button,
} from '@material-ui/core';
import ResultData from './ResultData';
import { getBMIndex, getMacros } from '../../api/calculator';

const StartForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [gender, setGender] = useState('');
	const [activityLevel, setActivityLevel] = useState('');
	const [goal, setGoal] = useState('');
	const [neck, setNeck] = useState('');
	const [waist, setWaist] = useState('');
	const [hip, setHip] = useState('');
	const [BMIIndex, setBMIIndex] = useState({});
	const [macros, setMacros] = useState({});

	const handleSubmit = async (a, w, h) => {
		let variable1 = await getBMIndex(a, w, h);
		setBMIIndex(variable1.data.data);
	};

	return (
		<div>
			<Card style={{ maxWidth: '650px', margin: '10rem auto' }}>
				<CardContent gutterBottom>
					<Typography variant='h4'>
						We are gonna need some data first
					</Typography>
					<Typography
						gutterBottom
						color='textSecondary'
						variant='body2'
						component='p'
					>
						We guarantee complete confidentiality of this data. It won't be used
						for any marketing purposes but strictly to make you a meal and a
						workout plan.
					</Typography>
					<div>
						<Grid container spacing={1}>
							<Grid xs={12} sm={6} item>
								<TextField
									onChange={(e) => setFirstName(e.target.value)}
									placeholder='First Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									onChange={(e) => setLastName(e.target.value)}
									placeholder='Last Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setAge(e.target.value)}
									type='number'
									placeholder='Age'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setWeight(e.target.value)}
									type='number'
									placeholder='Weight'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setHeight(e.target.value)}
									type='number'
									placeholder='Height'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setGender(e.target.value)}
									type='text'
									placeholder='Gender'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setActivityLevel(e.target.value)}
									type='number'
									placeholder='Activity Level'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setGoal(e.target.value)}
									type='number'
									placeholder='Goal'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setNeck(e.target.value)}
									type='number'
									placeholder='Neck'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setWaist(e.target.value)}
									type='number'
									placeholder='Waist'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setHip(e.target.value)}
									type='number'
									placeholder='Hip'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>

							<Grid xs={12} item>
								<Button
									onClick={() => handleSubmit(age, weight, height)}
									type='submit'
									variant='contained'
									color='primary'
									fullWidth
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</div>
				</CardContent>
			</Card>
			<ResultData BMIIndex={BMIIndex} />
		</div>
	);
};

export default StartForm;
