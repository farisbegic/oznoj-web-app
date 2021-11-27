import React from 'react';
import workouts from '../../api/personalizedWorkouts';
import WorkoutPlan from './WorkoutPlan';

const WorkoutPlansComponent = () => {
	return (
		<>
			Farise odradi ovaj dio, bitno je da importujes iz personalized workoutsa
			citav plan, mapiras preko njega i displayas na screen. Ja sam zamislio
			komponentu koja zauzima 80% ekrana i visoka nekih 200px i unutar tog
			containera da ipises kljucne informacije o treningu u obliku tabele.{' '}
		</>
	);
};

export default WorkoutPlansComponent;
