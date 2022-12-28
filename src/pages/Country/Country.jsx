import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryName } from "../../shared/api/getCountryName";
import { numberWithCommas } from "../../shared/api/numberWithCommas";
import { Spinner } from "../../shared/components/index";
import { ThemeContext } from "../../shared/context/ThemeContext";
import styles from "./Country.module.css";
import useCountry from "./hook/useCountry";

const Button = ({ value, onClick }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${theme ? "light" : "dark"}`]}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const ButtonCountry = ({ value, onClick }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <button
      className={`${styles.btn} ${styles["btn-country"]} ${
        styles[`btn--${theme ? "light" : "dark"}`]
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const Country = () => {
  const navigate = useNavigate();
  const { theme } = React.useContext(ThemeContext);
  const { id } = useParams();
  const country = useCountry(id);

  if (country.isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Spinner />
      </div>
    );

  if (country.error) return <h1>data are not available</h1>;

  if (country.data) {
    const cur = Object.getOwnPropertyNames(country.data?.currencies)[0];

    const {
      borders = [],
      capital = [],
      name: { common: countryName = "" },
      currencies: {
        [cur]: { name: currencies = "" },
      },
      flags: { svg: flag = "" },
      languages = [],
      altSpellings: [, nativeName] = [, "N/A"],
      population = "",
      region = "",
      subregion = "",
      tld: [tld] = [],
    } = country.data;

    return (
      <div
        className={`${styles["country"]} ${
          styles[`country--${theme ? "light" : "dark"}`]
        }`}
      >
        <section className={styles["country__nav"]}>
          <Button value="Back" onClick={() => navigate(-1)} />
        </section>
        {/* COUNTRY INFORMATIONS */}
        <section className={styles["country__infos"]}>
          {/* COUNTRY IMAGE FLAG */}
          <div className={styles["country__img"]}>
            <div className={styles["img__container"]}>
              <img src={flag} alt="img" />
            </div>
          </div>

          {/* COUNTRY INFO */}
          <div className={styles["infos__container"]}>
            <div className={styles.info}>
              <h1>{countryName}</h1>
              <div className={styles["info__top"]}>
                <div className={styles["top__left"]}>
                  <p>
                    <span>Native Name: </span>
                    {nativeName}
                  </p>
                  <p>
                    <span>Population: </span>
                    {numberWithCommas(population, ".")}
                  </p>
                  <p>
                    <span>Region: </span>
                    {region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {capital}
                  </p>
                </div>
                <div className={styles["top__right"]}>
                  <p>
                    <span>Top Level Domain: </span>
                    {tld}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {currencies}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {Object.values(languages).join(", ")}
                  </p>
                </div>
              </div>
              <div className={styles["info__bottom"]}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <p>
                    <span>Borders: </span>
                  </p>
                  {borders.map((item, index) => {
                    return (
                      <ButtonCountry
                        key={`country-${index}`}
                        value={getCountryName(item)}
                        onClick={() => navigate(`../home/country/${item}`)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Country;
