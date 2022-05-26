import React from 'react'
import './style/styles.scss'
import { useGetCocktailsByInputQuery } from "./data/cocktailApi";
import { useState } from "react";
import Cocktail from "./components/Cocktail";



const App = () => {
  const [input, setInput] = useState('');
  const [selectedCocktailID, setSelectedCocktailID] = useState(undefined);
  //when in bad order=> "ReferenceError: Cannot access uninitialized variable."
  const { data, isLoading, isError } = useGetCocktailsByInputQuery(input);
  return (
    <>
      <main className="container">
        <h1 className="title box"> 🍸 Cocktails </h1>
        <input
          className="input is-link is-normal is-rounded is-hovered is-focused box"
          type="text"
          placeholder="Search for a drink...🔎"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <div className="columns box">
          <div className="column is-one-third">
            {selectedCocktailID == undefined && <p>Quicklook </p>}
            {selectedCocktailID && <Cocktail id={selectedCocktailID} />}
          </div>

          {isLoading && (<progress className='progress is-small is-primary' max='100'/>)}
          {isError && (<div className="notification is-danger"><button className="delete"></button>There is a problem.</div>)}
          {data && ( 
              <div className="flex-grid">
              {data.drinks.map(({ idDrink, strDrink, strDrinkThumb, strIngredient1,strIngredient2, strIngredient3 }) => (
                <div className="col" key={ idDrink } >
                  <div className="card"  >
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
        </div>
      </main>
    </>
  )
}

export default App