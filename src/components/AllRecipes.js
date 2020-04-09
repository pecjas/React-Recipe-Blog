import React from 'react';
import { RecipeContext, RecipeConsumer } from '../context';
import { Link } from 'react-router-dom';

class AllRecipes extends React.Component {
    render() {
        let context = this.context;
        console.log(context);

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
                title: "Title 6 - This one is a really long one. A REALLY long one. What happends now?",
                ingredients: "ingredients6",
                prep_time: "6 Hours",
                image: "/img/sample2.jfif"
            }
        ]
    
        const recipeCards = recipes.map((recipe) =>
            <div className="card bg-danger text-white ml-3 mt-3 card-shadow" key={recipe.id}>
                <div className="card-header d-flex justify-content-between align-content-center">
                    {/* {recipe.title}<a href="/manage" id={recipe.id} onClick={() => context.setRecipeID(recipe.id)}><i className="material-icons text-center text-white">edit</i></a> */}
                    {recipe.title}<Link to={"/manage?recipe_id=".concat(recipe.id)}><i className="material-icons text-center text-white">edit</i></Link>
                </div>
                <div className="card-body">
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Prep Time: {recipe.prep_time}</p>
                </div>
                <img className="card-img-bottom" src={recipe.image} alt={recipe.title}></img>
            </div>
        );

        return(
            <div className="card-columns">
                {recipeCards}
            </div>
        )
    }
}

AllRecipes.contextType = RecipeContext;

export default AllRecipes;