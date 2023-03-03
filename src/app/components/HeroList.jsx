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
          <div key={hero.id} className="col-3 my-2">
            <Hero {...hero} />
          </div>
        ))}
      </ul>
    </>
  );
};
