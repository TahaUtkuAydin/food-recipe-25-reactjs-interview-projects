import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h1 className="text-2xl">
        <NavLink to={"/"}>Food Recipes</NavLink>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchParam}
          placeholder="Enter Items"
          onChange={(e) => setSearchParam(e.target.value)}
          className="border border-solid rounded-lg p-3 px-8  lg:w-96"
        />
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
