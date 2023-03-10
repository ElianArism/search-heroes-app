import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => navigate("/");

  if (!hero) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego</b> {hero.alter_ego}{" "}
          </li>
          <li className="list-group-item">
            <b>Publisher</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appareance</b> {hero.first_appareance}
          </li>

          <h5 className="p-3">Characters</h5>
          <p>{hero.characters}</p>

          <button
            className="btn btn-outline-primary"
            onClick={onNavigateBack}
          >
            Go Back
          </button>
        </ul>
      </div>
    </div>
  );
};
