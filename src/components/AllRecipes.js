import React from 'react';

export default function AllRecipes() {
    const recipes = [
        {
            id: "1",
            title: "Title 1",
            ingredients: "ingredients1",
            prep_time: "1 Hour",
            image: "/img/sample1.jpeg"
        },
        {
            id: "2",
            title: "Title 2",
            ingredients: "ingredients2",
            prep_time: "2 Hours",
            image: "/img/sample2.jfif"
        },
        {
            id: "3",
            title: "Title 3",
            ingredients: "ingredients3",
            prep_time: "3 Hours",
            image: "/img/sample3.jpg"
        },
        {
            id: "4",
            title: "Title 4",
            ingredients: "ingredients4",
            prep_time: "4 Hours",
            image: "/img/sample3.jpg"
        },
        {
            id: "5",
            title: "Title 5",
            ingredients: "ingredients5",
            prep_time: "5 Hours",
            image: "/img/sample1.jpeg"
        },
        {
            id: "6",
            title: "Title 6",
            ingredients: "ingredients6",
            prep_time: "6 Hours",
            image: "/img/sample2.jfif"
        }
    ]

    const recipeCards = recipes.map((recipe) =>
        <div className="card bg-danger text-white ml-3 mt-3 card-shadow" key={recipe.id}>
            <div className="card-header">{recipe.title}</div>
            <div className="card-body">
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Prep Time: {recipe.prep_time}</p>
            </div>
            <img class="card-img-bottom" src={recipe.image} alt={recipe.title}></img>
        </div>
    );

    return(
        <div className="card-columns">
            {recipeCards}
        </div>
    )
}