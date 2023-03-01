import { HEROES } from "../../../assets/heroes";

export const getHeroById = (id) => {
  return HEROES.find((hero) => hero.id === id);
};
