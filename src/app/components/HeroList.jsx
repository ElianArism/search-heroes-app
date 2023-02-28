import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <ul>
        {heroes.map((heroe) => (
          <li key={heroe.id} className="my-3">
            <div className="card">
              <div className="card-header">
                <h4>{heroe.superhero}</h4>
                <small>{heroe.alter_ego}</small>
              </div>
              <div className="card-body">
                <p>{heroe.first_appearance}</p>
                <p>{heroe.characters}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
