import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { APIContextProvider } from "./APIContext";
import "./App.css";

//Components

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Recipe from "./components/recipe/Recipe"
import Error from "./components/error/Error"

// function to scroll towards the top of the page when you open some recipe

import ScrollFeature from "./components/ScrollFeature";



function App() {

  return (
    <Router>
      <ScrollFeature />
      <div className="App">

        <Header />

        <APIContextProvider>
          <Routes>  

              <Route exact path="/" element={<Home />} />
                
              <Route path={"/recipe/:id"} element={<Recipe />} />

              <Route path={"*"} element={<Error />} />

          </Routes>
        </APIContextProvider>

      </div>
    </Router>  
  );
}

export default App;