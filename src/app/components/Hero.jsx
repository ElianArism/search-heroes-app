import { Link } from "react-router-dom";

const DifferentCharacters = ({ characters, alter_ego }) =>
  characters === alter_ego ? (
    <></>
  ) : (
    <p className="card-text">{characters}</p>
  );

export const Hero = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroRelativePath = `/assets/heroes/${id}.jpg`;

  return (
    <>
      <li key={id} className="col-3">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img
                src={heroRelativePath}
                className="card-img"
                alt="card hero"
              />
            </div>
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <DifferentCharacters
                  characters={characters}
                  alter_ego={alter_ego}
                />
                <p className="card-text">
                  <small className="text-muted">
                    {first_appearance}
                  </small>
                </p>
                <Link to={`/hero/${id}`}>See more</Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
