import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    getCocktailsByInput: builder.query({
      query: (input) => ({ url: `/search.php?s=${input}` }),
    }),
    getCocktailDetails: builder.query({
      query: (id) => ({ url: `/lookup.php?i=${id}` }),
    }),
  }),
});

export default cocktailApi;

export const { useGetCocktailsByInputQuery, useGetCocktailDetailsQuery } =
  cocktailApi;
