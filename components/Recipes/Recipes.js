import React, {useEffect, useState} from 'react';
import Product from '../partials/Product';
import { supplementData } from '../../api/supplements';
import { funkcija } from '../../api/getRecepies';
import Recipe from "../partials/Recipe";

const Recipes = () => {
	const [recept, setRecept] = useState([]);

	useEffect(async () => {
		setRecept(await funkcija());
	}, []);

	return (
		<div className='recipes'>
			{recept.data ? (recept.data.hits.map((recipe) => (
				<Recipe image={recipe.recipe.image} name={recipe.recipe.label} protein={recipe.recipe.totalNutrients.PROCNT.quantity} carbohydrates={recipe.recipe.totalNutrients.CHOCDF.quantity} fat={recipe.recipe.totalNutrients.FAT.quantity} />
			))) : ''}
		</div>
	);
};

export default Recipes;
