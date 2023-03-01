import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { Hero } from "./Hero";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(
    () => getHeroesByPublisher(publisher),
    [publisher]
  );

  return (
    <>
      <ul className="row g-3">
        {heroes.map((hero) => (
          <Hero key={hero.id} {...hero} />
        ))}
      </ul>
    </>
  );
};
