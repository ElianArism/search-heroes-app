export const Hero = ({
  id,
  superhero,
  publisher,
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
                <p className="card-text">{characters}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
