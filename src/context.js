import React from 'react';

const RecipeContext = React.createContext();
const RecipeConsumer = RecipeContext.Consumer;

export default class RecipeProvider extends React.Component {
    state = {
            recipe_id: "",
            default: "Default string"
        }

    componentDidUpdate() {
        console.log(this.state.recipe_id)
    }

    setRecipeID = (id) => {
        console.log("setRecipeID called");
        console.log(id);
        
        this.setState(() => {
            return {'recipe_id': id}
        })
    }

    render() {
        return(
            <RecipeContext.Provider value={{
               ...this.state,
               setRecipeID: this.setRecipeID
            }}>
                {this.props.children}
            </RecipeContext.Provider>
        )
    }
}

export {RecipeProvider, RecipeConsumer, RecipeContext}