import React, { useEffect, useState } from 'react';
import { getRecipes } from '../../api/getRecepies';
import Recipe from '../partials/Recipe';
import Loader from 'react-loader-spinner';

const Recipes = () => {
	const [recept, setRecept] = useState([]);

	useEffect( () => {
		setRecept(getRecipes);
	}, []);
	return (
		<div className='recipes'>
			{recept.data ? (
				recept.data.hits.map((recipe, index) => (
					<Recipe
						key={index}
						image={recipe.recipe.image}
						name={recipe.recipe.label}
						protein={recipe.recipe.totalNutrients.PROCNT.quantity}
						carbohydrates={recipe.recipe.totalNutrients.CHOCDF.quantity}
						fat={recipe.recipe.totalNutrients.FAT.quantity}
						url={recipe.recipe.url}
					/>
				))
			) : (
				<Loader type='TailSpin' color='#7C9DF3' height={100} width={100} />
			)}
		</div>
	);
};

export default Recipes;
