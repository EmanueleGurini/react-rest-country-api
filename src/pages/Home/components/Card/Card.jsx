import { Link } from "react-router-dom";

import style from "./Card.module.css";

const Card = ({ country }) => {
  const population = country.population ? country.population : "";
  const region = country.region ? country.region : "";
  const capital = country.capital ? country.capital[0] : "";

  return (
    <Link to={country?.cca3}>
      <div className={style.col}>
        <div className={style.card}>
          <img
            className={style["card__card-flag"]}
            src={country?.flags?.png}
            alt="flag"
          />
          <div className={style["card__info"]}>
            <h2>Country</h2>
            <p>
              <b>Population: {population}</b>
            </p>
            <p>
              <b>Region: {region}</b>
            </p>
            <p>
              <b>Capital: {capital}</b>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
