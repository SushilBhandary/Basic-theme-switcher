import React,{useState} from "react";
import Hero from "./Components/Hero";
import ThemeContext from "./Context/ThemeContext";

const App = () => {
  const theme = useState("light");
  return(
    <ThemeContext.Provider value={theme}>
      <Hero/>
    </ThemeContext.Provider>
  )
}

export default App;
