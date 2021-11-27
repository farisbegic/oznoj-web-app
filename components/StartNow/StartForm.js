import React from 'react';

import {
	Typography,
	Card,
	CardContent,
	Grid,
	TextField,
	Button,
} from '@material-ui/core';

const StartForm = () => {
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
					<form>
						<Grid container spacing={1}>
							<Grid xs={12} sm={6} item>
								<TextField
									placeholder='First Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									placeholder='Last Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Age'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Weight'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Height'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='text'
									placeholder='Gender'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Activity Level'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Goal'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Neck'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Waist'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Hip'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>

							<Grid xs={12} item>
								<Button
									type='submit'
									variant='contained'
									color='primary'
									fullWidth
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default StartForm;
