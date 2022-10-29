import React from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../../../shared/api/numberWithCommas";
import { ThemeContext } from "../../../../shared/context/ThemeContext";

import style from "./Card.module.css";

const Card = ({ country }) => {
  const { theme } = React.useContext(ThemeContext);

  // sperimentig if is better to initializa six memeory space for each card inside the stack
  // or is better to initialize one memory space with a reference to the heap per each cards
  const data = {
    cca3: "",
    flag: "",
    countryName: "",
    population: "",
    region: "",
    capital: "",
  };

  if (country) {
    console.log(country);
    Object.assign(data, {
      cca3: country?.cca3 ? country?.cca3 : "",
      flag: country?.flags?.png,
      countryName: country?.name?.official,
      population: numberWithCommas(country?.population, "."),
      region: country?.region,
      capital: country?.capital ? country?.capital[0] : "",
    });
  }

  return (
    <Link to={country?.cca3}>
      {/* COL */}
      <div className={style.col}>
        {/* CARD */}
        <div
          className={`${style.card} ${
            theme ? style["card--light"] : style["card--dark"]
          }`}
        >
          {/* FLAG */}
          <img
            className={style["card__card-flag"]}
            src={country?.flags?.png}
            alt={`${country.countryName} flag`}
          />
          {/* END FLAG */}

          {/* CARD INFO */}
          <div className={style["card__info"]}>
            <h2>{data?.countryName}</h2>
            <p>
              <span>Population:</span> {data?.population}
            </p>
            <p>
              <span>Region:</span> {data?.region}
            </p>
            <p>
              <span>Capital:</span> {data?.capital}
            </p>
          </div>
          {/* END CARD INFO */}
        </div>

        {/* END CARD */}
      </div>
      {/* END COL*/}
    </Link>
  );
};

export default Card;
