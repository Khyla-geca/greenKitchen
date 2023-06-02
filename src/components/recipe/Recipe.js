import React, { useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { APIContext } from "../../APIContext"
import RecipeCSS from "./Recipe.module.css"

const Recipe = () => {
   
    const {id} = useParams() // id of the specific recipe

    //API call with axios 

    const {data, APICall} = useContext(APIContext)

    useEffect(() => {

        APICall(`https://api.spoonacular.com/recipes/${id}/information?apiKey=898ddcc16621405e8b3cafa261cb7611`)
         // eslint-disable-next-line
    },[id])

    return (
        <>
            <Link to="/"><button className={RecipeCSS.backBtn}>Home Page</button></Link>
            <div className={RecipeCSS.recipe}>
                <div className={RecipeCSS.imageContainer}>
                    {data.veryPopular && <div className={RecipeCSS.popular}><p>Popular</p></div>}
                    <img src={data.image} alt="recipe" className={RecipeCSS.recipeImage}/>
                </div>
                <div className={RecipeCSS.recipeInfo}>
                    <h1 className={RecipeCSS.recipeTitle}>{data.title}</h1>
                    {data.summary && <h2 className={RecipeCSS.summaryTitle}>Summary</h2>}
                    <p className={RecipeCSS.recipeSummary} dangerouslySetInnerHTML={{__html: data.summary}}></p>
                    {data.extendedIngredients && <h2 className={RecipeCSS.ingredientsTitle}>Ingredients</h2>}
                    {data.extendedIngredients?.map((ingredient, index) => {
                        return <p key={index} className={RecipeCSS.recipeIngredients}>{ingredient.original}</p>
                    })}
                    {data.instructions && <h2 className={RecipeCSS.instructionsTitle}>Instructions</h2>}
                    {data.instructions && <p className={RecipeCSS.recipeInstructions} dangerouslySetInnerHTML={{__html: data.instructions}}></p>}
                </div>
            </div>
        </>    
    )
}

export default Recipe