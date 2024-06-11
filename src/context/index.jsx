import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState([]);
  const [favoritesList, setFavoritesList] = useState( JSON.parse(localStorage.getItem("favoritesList")) || []);

  const navigate = useNavigate();

  useEffect(()=>{
    localStorage.setItem("favoritesList",JSON.stringify(favoritesList))
  },[favoritesList])

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleFavorites(getId) {
    if(favoritesList.includes(getId)) {
      setFavoritesList(favoritesList.filter((favId)=> favId !== getId))
    }else {
      setFavoritesList([...favoritesList,getId])
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setSearchParam,
        recipeList,
        handleSubmit,
        searchParam,
        recipeDetailsData,
        setRecipeDetailsData,
        handleFavorites,
        favoritesList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
