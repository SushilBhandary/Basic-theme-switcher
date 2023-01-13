import React , {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const Button = () => {
    const [themeMode,setThemeMode] = useContext(ThemeContext);
    return(
        <div>
            <button 
            style={{
                backgroundColor : "#26ae60",
                padding : "10px 150px",
                fountSize :"20px",
                color : "#FFF"
            }}
            onClick={ ( )=> {
                setThemeMode(themeMode === "light" ? "dark" : "light" )
            }}
            > Change to {themeMode === "light" ? "dark" : "light"} Mode</button>
        </div>
    )
}

export default Button;