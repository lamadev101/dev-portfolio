import React, { createContext, useContext, useState } from 'react'


const Context = createContext()

const StateContext = ({children}) => {
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = () =>{
    if(darkMode){
      const theme0 = {background: "#0f1624"}
      const theme1 = {background: "#111827", color: "#fff"}
      const imgNeg = {filter: "invert(100%)"}
      const theme2 = {border: ".5px solid #fff", color: "#fff"}
      const boxShadow = {boxShadow: "5px 5px 20px #000000"}
      const textColor = {color: "#e2e2e2"}

      return [theme0, theme1, imgNeg, theme2, boxShadow, textColor]
    }
    return ""
  }
  const dark = darkTheme();

  return (
    <Context.Provider value={{darkMode, setDarkMode, dark}}>
      {children}
    </Context.Provider>
  )
}

export default StateContext
export const useContextState = ()=> useContext(Context)