import { useGetCocktailByIdQuery } from "../data/cocktailApi";

const Cocktail = ({ id }) => {
const { data, isLoading, isError } = useGetAllCocktailsByInputQuery(id);
 
  return (
    <>
      {isError && <p>An error occured..r</p>}
      {isLoading && <p>Loading...</p>}
      {data &&
        data.drinks.map(({ strDrink, strCategory, strAlcoholic, strDrinkThumb, strInstructions }) => (
          <div className="flex-grid">
            <div className="col">
              <h2 className="title">{strDrink}</h2>
              <figure>
                <img src={strDrinkThumb} alt={strDrink}></img>
                <figcaption>{strCategory}</figcaption>
              </figure> 
              <p>{strAlcoholic}</p>
              <p>{strInstructions}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Cocktail