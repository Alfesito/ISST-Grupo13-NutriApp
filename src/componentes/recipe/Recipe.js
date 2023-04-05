import React from "react";

import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Recipe(props) {
  let { recipeId } = useParams();
  console.log("🚀 ~ file: Producto.js ~ line 7 ~ Producto ~ productId", recipeId)
  
  let id = props.theproducts && props.theproducts.findIndex((el) => el.recipe.label === recipeId)
  let item = props.theproducts[id]

  return (
    <div>
      <div className="containerr">
        <div className="box">
          <div key={item.recipe.label}>
            <div className="product-img">
              <img
                src={
                  item.recipe.image
                }
                width="250"
                alt=""
              />
            </div>

            <div className="product-info">
              <h1 id="titulo">{item.recipe.label}</h1>

                <p className="price">
                {item.recipe.ingredientLines && item.recipe.ingredientLines.map((item) => {
                    return item+';';
                })}
              </p>

              <p className="description">Fuente: {item.recipe.source} </p>

              <br />

              <Link to="/recomendaciones">
                <Button variant="info">Volver</Button>
              </Link>
              <Button variant="success" style={{ float: "right"}}>Añadir</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
