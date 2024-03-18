import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Home = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('http://localhost:3000/api/recipes');
                console.log(response.data.data);
                setFood(response.data.data)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleOpenDetails = async (recipeId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/recipes/${recipeId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipe details');
            }
            const recipeDetails = await response.json();
            console.log('Recipe Details:', recipeDetails);

        } catch (error) {
            console.error('Error fetching recipe details:', error.message);
        }
    };


    return (
        <>
        <h2 className='font-bold text-black text-2xl text-center mt-5'>Welcome</h2>
            <div className="flex flex-wrap justify-around mt-9">
                {food.map((recipe, index) => (
                    <div key={index} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-8">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-full w-full object-cover md:w-48" src={`https://source.unsplash.com/random?food&${index}`} alt="Recipe" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{recipe.name}</div>
                                <p className="mt-2 text-gray-500 mb-6">{recipe.description}</p>
                                <Link to={`/recipes/${recipe._id}`} className="mt-9 bg-indigo-500 text-white py-2 px-4 rounded-md">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home


