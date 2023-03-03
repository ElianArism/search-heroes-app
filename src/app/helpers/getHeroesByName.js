import { HEROES } from "../../../assets/heroes";

export const getHeroesByName = (value) => {
  const heroName = value.toLowerCase().trim();

  if (!heroName.length) return [];

  return HEROES.filter(({ superhero }) =>
    superhero.toLowerCase().includes(heroName)
  );
};
