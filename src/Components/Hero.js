import React,{useContext} from "react";
import Button from "./Buttton";
import AppTheame from "../colors";
import ThemeContext from "../Context/ThemeContext";

const Hero = () => {
    const theme = useContext(ThemeContext)[0];
    const themeChanged = AppTheame[theme];
    return(
        <div
        style={{
            padding : "1rem",
            backgroundColor : `${themeChanged.backgroundColour}`,
            color : `${themeChanged.textColor}`,
            textAlign: "center",
            height : '100vh'
        }}   
        >
            <h1> Constext API</h1>
            <p> Few works from my end  .... {theme}</p>
            <Button/>
        </div>
    )
}

export default Hero;