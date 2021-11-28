import React from 'react';

const WorkoutList = (props) => {
    return (
        <div className="workout-list">
            {props.workouts.map((workout) => (
                <div className="workout-card">
                    <h4 className="workout-info">{workout.aboutTheProgram.name}</h4>
                    <h4 className="workout-info">{workout.aboutTheProgram.goal}</h4>
                    <h4 className="workout-info">{workout.aboutTheProgram.programDuration}</h4>
                    <h4 className="workout-info">{workout.aboutTheProgram.targetGender}</h4>
                    <a className="workout-more-information" href={`workouts/${workout.aboutTheProgram.id}`}>View More</a>
                </div>
            ))}
        </div>
    );
};

export default WorkoutList;