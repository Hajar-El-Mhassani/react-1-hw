"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "./components/PlanetWishlistItem";
import PlanetCard from "./components/PlanetCard";
import { planets } from "./planetsArray";
import WishListStatus from "./components/WishlistStatus";

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);
  const [error, setError] = useState("");

  let isPlanetSelected = false;
  let numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (planet) => {
    const isAlreadySelected = selectedPlanets.some(
      (p) => p.name === planet.name
    );
    if (isAlreadySelected) {
      onAddPlanet((prevSelected) =>
        prevSelected.filter((p) => p.name !== planet.name)
      );
    } else {
      onAddPlanet((prevSelected) => [...prevSelected, planet]);
    }
  };
  const addToWishlist = (name, thumbnail) => {
    const isAlreadyInWishlist = selectedPlanets.some((p) => p.name === name);
    if (isAlreadyInWishlist) {
      setError(`${name} is already in your wishlist!`);
      return;
    }
    onAddPlanet((prevSelected) => [...prevSelected, { name, thumbnail }]);
    setError(""); // clear error on successful add
  };

  const removeFromWishlist = (name) => {
    onAddPlanet((prevSelected) =>
      prevSelected.filter((planet) => planet.name !== name)
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <WishListStatus count={numberOfPlanets} />

          <AddWishlistItem onAddWishlistItem={addToWishlist} />
          {error && (
            <div className={styles.error}>
              {error} <button onClick={() => setError("")}>Dismiss</button>
            </div>
          )}
          <h3>Your current wishlist</h3>
          <div
            className={`${
              selectedPlanets.length > 0 ? styles.wishlistList : ""
            }`}
          >
            {selectedPlanets.map((planet) => (
              <PlanetWishlistItem
                key={planet.name}
                name={planet.name}
                onRemove={() => removeFromWishlist(planet.name)}
                thumbnail={planet.thumbnail}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              planet={{
                ...planet,
                isSelected: selectedPlanets.some((p) => p.name === planet.name),
                onAddOrRemovePlanet: () => onAddOrRemovePlanet(planet),
              }}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
