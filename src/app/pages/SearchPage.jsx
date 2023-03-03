import queryString from "query-string";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // used to read query params
  const params = useMemo(
    () => queryString.parse(location.search),
    [location.search]
  ); // 3rd party lib to extract query params

  const { onInputChange, onResetForm, searchValue } = useForm({
    searchValue: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const value = searchValue.toLowerCase().trim();

    if (!value.length) return;
    navigate("?hero=" + value);
    console.log(location);
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
          </form>
          <button type="submit" className="btn btn-success mt-2">
            Search
          </button>
        </div>
        <div className="col-7">
          <h3>Results</h3>
          <hr />
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">
            There's no results with{" "}
            <span className="text-muted">{params.hero}</span>
          </div>

          {/* {<Hero />} */}
        </div>
      </div>
    </>
  );
};
