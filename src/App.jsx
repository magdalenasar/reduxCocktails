import React from 'react'
import './style/styles.scss'
import { useGetCocktailsByInputQuery } from "./data/cocktailApi";
import { useState, useEffect } from "react";
import Cocktail from "./components/Cocktail";



const App = () => {
  const [input, setInput] = useState('');
  const [selectedCocktailID, setSelectedCocktailID] = useState(undefined);
  // in bad order=> error: "ReferenceError: Cannot access uninitialized variable."
  const { data, isLoading, isError } = useGetCocktailsByInputQuery(input);
  return (
    <>
      <div className="container box">
        <h1 className="title box"> 🍸 Cocktails </h1>
        <input
          className="input is-link is-normal is-rounded is-hovered is-focused"
          type="text"
          placeholder="Search ...🔎"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <hr />
        {isLoading && (<progress className='progress is-small is-primary' max='100'/>)}
        {isError && (<div className="notification is-danger"><button className="delete"></button>There is a problem.</div>)}
        {data && ( 
          <div className="container">
            <div className="flex-grid">
            {data.drinks.map(({ idDrink, strDrink, strDrinkThumb, strIngredient1,strIngredient2, strIngredient3 }) => (
              <div className="col" key={ idDrink}>
                <div className="card" >
                <div className="card-image">
                  <figure className="image">
                    <img src={ strDrinkThumb } alt={ strDrink }  />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4 className="subtitle">Cocktail: { strDrink }</h4>
                      <div>
                        Ingredients:
                        <span className="tag">{ strIngredient1 }</span>
                        <span className="tag">{ strIngredient2 }</span>
                        <span className="tag">{ strIngredient3 }</span>
                      </div>
                    </div>
                </div>
              </div>
              </div>
            ))}
          </div>
          </div>
        )}

        
      </div>
    </>
  )
}

export default App