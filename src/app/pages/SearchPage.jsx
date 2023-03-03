import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { Hero } from "../components";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { useForm } from "../hooks/useForm";

const ConditionalAlerts = ({
  searchValue = "",
  herouesFounded = 0,
}) => {
  return (
    <>
      {!searchValue.length && (
        <div className="alert alert-primary">Search a hero</div>
      )}

      {searchValue.length && herouesFounded < 1 && (
        <div className="alert alert-danger">
          There's no results with{" "}
          <span className="text-muted">{searchValue}</span>
        </div>
      )}
    </>
  );
};

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // used to read query
  const { hero = "" } = queryString.parse(location.search); // 3rd party lib to extract query params
  const { onInputChange, onResetForm, searchValue } = useForm({
    searchValue: hero,
  });

  const heroesByName = getHeroesByName(hero);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = searchValue.toLowerCase().trim();

    if (!value.length) return;
    navigate("?hero=" + value);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>

          <hr />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchValue"
              placeholder="Sarch a hero..."
              autoComplete="off"
              value={searchValue}
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-success mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h3>Results</h3>
          <hr />

          <ConditionalAlerts
            searchValue={hero}
            herouesFounded={heroesByName.length}
          />

          {heroesByName.map((hero) => (
            <div key={hero.id} className="col my-2">
              <Hero {...hero} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
