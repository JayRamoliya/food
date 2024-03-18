// RecipeDetails.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams, useNavigate, Link } from 'react-router-dom';

const RecipeDetails = ({ match }) => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/recipes/${id}`);
                setRecipe(response.data.data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    return (
        <div>
            {recipe && (
                <div className="h-screen flex justify-center items-center border-2">
                    <div className="flex items-center mb-4">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={'https://source.unsplash.com/random?food'} alt="Recipe" />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-xl font-bold">{recipe.name}</h2>
                            <p className="text-gray-600 mb-9">{recipe.description}</p>
                            <p className="mt-2"><span className="font-bold text-xl">Instructions:</span> {recipe.instructions}</p>
                            <p className="mt-2"><span className="font-bold text-xl">Items: </span> {recipe.ingredients.join(', ')}</p>
                            {/* Back button */}
                            <Link to="/" className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block">Back</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeDetails;
