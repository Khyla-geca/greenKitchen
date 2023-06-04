import React, {useState, useEffect, useContext} from "react"
import { APIContext } from "../../APIContext"

import HomeCSS from "./Home.module.css"

import Card from "../../components/card/Card"

const Home = () => {

    const [value, setValue] = useState("") // onChange value of the input 
    const [search, setSearch] = useState("") // the complete value of the input
    const [cuisine, setCuisine] = useState("") 
    const [intolerance, setIntolerance] = useState("")

    const {data, APICall} = useContext(APIContext)
    
   

    useEffect(() => {

      APICall(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}&cuisine=${cuisine}&intolerances=${intolerance}&diet=vegetarian&addRecipeInformation=true`)
      // eslint-disable-next-line
    }, [search, cuisine, intolerance])
  

    //onSubmit function

    const putValue = (e) => {
      e.preventDefault()
      setSearch(value)
      setValue("")
    }

    return (
        
        <>
            <form className={HomeCSS.form} onSubmit={putValue}>
            
              <div>
                <select className={HomeCSS.cuisineSelect} value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                    <option value="">Cuisine</option>
                    <option value="italian">Italian</option>
                    <option value="american">American</option>
                    <option value="japanese">Japanese</option>
                    <option value="chinese">Chinese</option>
                    <option value="greek">Greek</option>
                    <option value="indian">Indian</option>
                </select>

                <select className={HomeCSS.intoleranceSelect} value={intolerance} onChange={(e) => setIntolerance(e.target.value)}>
                    <option value="">Intolerance</option>
                    <option value="gluten">Gluten</option>
                    <option value="grain">Grain</option>
                    <option value="soy">Soy</option>
                    <option value="peanut">Peanut</option>
                </select>  
              </div>
              <div>
                <input 
                type="text" 
                className={HomeCSS.searchBar} 
                placeholder="search your favorite dish" 
                value={value} 
                onChange={(event) => setValue(event.target.value)}
                />

                <button className={HomeCSS.submitBtn}>Explore</button>
              </div>
            </form>

            <div className={HomeCSS.cardsContainer}>

              {data.results?.map(recipe => (
                  <Card 
                    key={recipe.id} 
                    id={recipe.id} 
                    name={recipe.title} 
                    image={recipe.image} 
                    readyIn={recipe.readyInMinutes}
                    isPopular={recipe.veryPopular}
                    isEmpty={recipe}
                  />
                )
              )}

            </div>  

        </>    
    )
}

export default Home 