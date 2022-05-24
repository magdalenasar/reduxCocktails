import { useGetCocktailByIdQuery } from "../data/cocktailApi";

const Cocktail = ({ id }) => {
const { data, isLoading, isError } = useGetAllCocktailsByInputQuery(id);
 
  return (
    <>
      {isError && <p>Er is een error</p>}
      {isLoading && <p>Loading...</p>}
      {data &&
        data.drinks.map(({ strDrink, strCategory, strAlcoholic, strDrinkThumb, strInstructions }) => (
            <div>
              <h2>{strDrink}</h2>
              <img src={strDrinkThumb} alt={strDrink}></img>
              <p>{strCategory}</p>
              <p>{strAlcoholic}</p>
              <p>{strInstructions}</p>
            </div>
          )
        )}
    </>
  );
};

export default Cocktail