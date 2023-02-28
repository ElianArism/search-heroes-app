import { HEROES } from "../../../assets/heroes";

export const getHeroesByPublisher = (publisher) => {
  if (publisher === "Marvel Comics" || publisher === "DC Comics") {
    return HEROES.filter(({ publisher }) => publisher === publisher);
  }
  throw new Error("Publisher not supported");
};
