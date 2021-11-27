import React from 'react';
import {useRouter} from "next/router";
import Image from "next/image";

const Recipe = () => {
    const router = useRouter();
    const { query } = router;
    return (
        <div className="supplement">
            <h4 className="path">Home / Recipes / <span className="path-slug">{query.slug}</span></h4>
            <div className="supplement-details">
                <Image src="/vitamin-d.png" height="813px" width="813px"/>
                <div className="vertical-line"/>
                <div className="supplement-information">
                    <h1 className="supplement-title">Pasta Bolognese</h1>
                    <ul className="recipe-times">
                        <li className="recipe-time">Preparation time: 10mins</li>
                        <li className="recipe-time">Cooking time: 10mins</li>
                        <li className="recipe-time">Additional time: 10mins</li>
                        <li className="recipe-time">Total time: 30mins</li>
                    </ul>
                </div>
            </div>
            <div className="supplement-details-2">
                <div className="ingredients">
                    <ul className="ingredient-list">
                        <li className="recipe-ingredient-title">Ingredients:</li>
                        <li className="recipe-ingredient">½ cup butter</li>
                        <li className="recipe-ingredient">1 onion, chopped</li>
                        <li className="recipe-ingredient">1 (16 ounce) package frozen chopped broccoli</li>
                        <li className="recipe-ingredient">4 (14.5 ounce) cans chicken broth</li>
                        <li className="recipe-ingredient">1 (1 pound) loaf processed cheese food, cubed</li>
                        <li className="recipe-ingredient">2 cups milk</li>
                    </ul>
                </div>
                <div className="nutrients">
                    <ul className="nutrients-list">
                        <li className="nutrient-ingredient-title">Nutrients:</li>
                        <li className="nutrient-ingredient">Protein: 10g</li>
                        <li className="nutrient-ingredient">Carbohydrates: 15.1g</li>
                        <li className="nutrient-ingredient">Fiber: 1.2g</li>
                        <li className="nutrient-ingredient">Sugars: 6.3g</li>
                        <li className="nutrient-ingredient">Fat: 18.2g</li>
                        <li className="nutrient-ingredient">Cholesterol: 56.5mg</li>
                    </ul>
                </div>
            </div>
            <div className="recipe-instructions">
                <h4 className="instruction-header">Instructions</h4>
                <hr className="instruction-line"/>
                <ol className="instruction-list">
                    <li className="instruction-text">In a stockpot, melt butter over medium heat. Cook onion in butter until softened. Stir in broccoli, and cover with chicken broth. Simmer until broccoli is tender, 10 to 15 minutes</li>
                    <li className="instruction-text">Reduce heat, and stir in cheese cubes until melted. Mix in milk and garlic powder.</li>
                    <li className="instruction-text">In a small bowl, stir cornstarch into water until dissolved. Stir into soup; cook, stirring frequently, until thick.</li>
                </ol>
            </div>
        </div>
    );
};

export default Recipe;