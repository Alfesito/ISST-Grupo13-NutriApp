import React from "react"
import SearchRecipe from "./SearchRecipe"
import Naavbar from "../Naavbar"

function Recomendaciones(props) {
    return (
      <div>
        <Naavbar/>
        <SearchRecipe theproducts={props.theproducts} onInputChange={props.onInputChange} onButtonClick={props.onButtonClick} onSelectChangeDiet={props.onSelectChangeDiet} onSelectChangeHealth={props.onSelectChangeHealth} onSelectChangeCuisine={props.onSelectChangeCuisine}/>
      </div>
    )
  }
  
  export default Recomendaciones