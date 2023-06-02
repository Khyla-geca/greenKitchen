import {useEffect} from "react"
import { useLocation } from "react-router-dom"

// function to scroll to top when you open some recipe

const ScrollFeature = () => {
    
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ pathname ]);

    return null
}

export default ScrollFeature