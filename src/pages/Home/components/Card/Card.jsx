import React from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "@/lib/utils/numberWithCommas";
import { ThemeContext } from "@/shared/context/ThemeContext";

import style from "./Card.module.css";

const Card = ({ country }) => {
  const { theme } = React.useContext(ThemeContext);

  if (!country) return null;

  if (country) {
    const {
      cca3 = "",
      flags: { png: flag = "" },
      name: { official: countryName = "" },
      population = "",
      region = "",
      capital: [capital] = [],
    } = country;

    return (
      <Link to={`country/${cca3}`}>
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
              src={flag}
              alt={`${countryName} flag`}
            />
            {/* END FLAG */}

            {/* CARD INFO */}
            <div className={style["card__info"]}>
              <h2>{countryName}</h2>
              <p>
                <span>Population:</span> {numberWithCommas(population, ".")}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              <p>
                <span>Capital:</span> {capital}
              </p>
            </div>
            {/* END CARD INFO */}
          </div>

          {/* END CARD */}
        </div>
        {/* END COL*/}
      </Link>
    );
  }
};

export default Card;
