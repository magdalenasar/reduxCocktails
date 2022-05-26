import React from 'react'
import { useGetCocktailsByInputQuery } from "../data/cocktailApi";
import { useState, useEffect } from "react";


const Cocktails = () => {
  return (
      <>
        const [input, setInput] = useState('');
        const { data, isLoading, isError } = useGetCocktailsByInputQuery(input);
  
        {isLoading && (<progress className='progress is-small is-primary' max='100'/>)}
        {isError && (<div className="notification is-danger"><button className="delete"></button>There is a problem.</div>)}
        {data && ( 
            <div className="flex-grid">
            {data.drinks.map(({ idDrink, strDrink, strDrinkThumb, strIngredient1,strIngredient2, strIngredient3 }) => (
              <div className="col" >
                <div className="card" key={ idDrink } >
                  <div className="card-image">
                    <figure className="image">
                      <img src={ strDrinkThumb } alt={ strDrink }  />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4 className="subtitle">Cocktail: {strDrink} </h4>
                      <div>
                        Ingredients: <span className="tag">{strIngredient1} | {strIngredient2} | {strIngredient3}</span>
                      </div>
                    </div>
                  </div>
                  <button className="button is-link is-light" onClick={()=> setSelectedCocktailID(idDrink)}>Quicklook</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
  )
}

export default Cocktails
