import React from "react";

const Meal = ({ data }) => {
  return (
    <div>
      {" "}
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
            
                <div className="py-5" key={item.idMeal}>
                  <div className="h-80 w-80">
                    <img src={item.strMealThumb} alt="" />
                  </div>
                  <p className=""> <b> name:</b>  {item.strMeal}</p>
                  <p className=""> <b>category: </b>  {item.strCategory}</p>
                  <p className=""> <b>Ingredients : </b> {item.strIngredient1},{item.strIngredient2},{item.strIngredient3},{item.strIngredient4},{item.strIngredient5},{item.strIngredient6}</p>
                  <p> <b>Instructions :</b>  {item.strInstructions}</p>
                </div>
            
            );
          })}
    </div>
  );
};

export default Meal;
