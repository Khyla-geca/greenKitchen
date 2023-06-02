import React from "react"
import { Link } from "react-router-dom";
import CardCSS from "./Card.module.css"

const Card = (props) => {

    return(
        <Link to={`/recipe/${props.id}`}>
            <div className={CardCSS.card}>
                {props.isPopular && <div className="popular"><p>Popular</p></div>}
                <img src={props.image} alt="recipe" className={CardCSS.cardImage}/>
                <h3 className={CardCSS.cardName}>{props.name}</h3>
                <p className={CardCSS.cardMinutes}>(meal preparation: <span className={CardCSS.bold}>{props.readyIn}min</span>)</p>
            </div>
        </Link>
    )
}

export default Card