import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryName } from "../../shared/api/getCountryName";
import { numberWithCommas } from "../../shared/api/numberWithCommas";
import Spinner from "../../shared/components/Spinner/Spinner";
import { ThemeContext } from "../../shared/context/ThemeContext";
import styles from "./Country.module.css";

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

  const [country, setCoutry] = React.useState({
    data: null,
    error: "",
    isLoading: false,
  });

  React.useEffect(() => {
    setCoutry((prev) => {
      return { ...prev, isLoading: true };
    });

    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((res) =>
        setCoutry((prev) => {
          return { ...prev, data: res[0] };
        })
      )
      .catch((error) =>
        setCountry((prev) => {
          return { ...prev, error: error };
        })
      )
      .finally(() =>
        setCoutry((prev) => {
          if (country.error !== "") console.log(country.error);
          return { ...prev, isLoading: false };
        })
      );
  }, [id]);

  // sperimentig if is better to initializa six memeory space for each card inside the stack
  // or is better to initialize one memory space with a reference to the heap per each cards
  const data = {
    borders: [],
    capital: "",
    countryName: "",
    currencies: "",
    flag: "",
    region: "",
    languages: [],
    nativeName: "",
    population: "",
    subregion: "",
    tld: [],
  };

  if (country.data) {
    // Extraxt the currencies name from the object
    const cur = Object.getOwnPropertyNames(country.data?.currencies)[0];

    Object.assign(data, {
      borders: country.data?.borders ? country?.data?.borders : [],
      capital: country.data?.capital ? country.data?.capital[0] : "",
      countryName: country.data ? country.data?.name?.common : "",
      currencies: country.data ? country.data?.currencies[cur]?.name : "",
      flag: country.data ? country.data?.flags?.svg : "",
      languages: country.data ? Object.values(country.data?.languages) : [],
      nativeName: country.data ? country.data?.altSpellings[1] : "",
      population: numberWithCommas(country.data?.population, "."),
      region: country.data ? country.data?.region : "",
      subregion: country.data ? country.data?.subregion : "",
      tld: country.data ? country.data?.tld[0] : [],
    });
  }

  return (
    <div
      className={`${styles["country"]} ${
        styles[`country--${theme ? "light" : "dark"}`]
      }`}
    >
      {country.isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Spinner />
        </div>
      )}

      <section className={styles["country__nav"]}>
        <Button value="Back" onClick={() => navigate(-1)} />
      </section>
      {/* COUNTRY INFORMATIONS */}
      <section className={styles["country__infos"]}>
        {/* COUNTRY IMAGE FLAG */}
        <div className={styles["country__img"]}>
          <div className={styles["img__container"]}>
            <img src={data?.flag} alt="img" />
          </div>
        </div>

        {/* COUNTRY INFO */}
        <div className={styles["infos__container"]}>
          <div className={styles.info}>
            <h1>{data?.countryName}</h1>
            <div className={styles["info__top"]}>
              <div className={styles["top__left"]}>
                <p>
                  <span>Native Name: </span>
                  {data?.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {data?.population}
                </p>
                <p>
                  <span>Region: </span>
                  {data?.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {data?.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {data?.capital}
                </p>
              </div>
              <div className={styles["top__right"]}>
                <p>
                  <span>Top Level Domain: </span>
                  {data?.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {data?.currencies}
                </p>
                <p>
                  <span>Languages: </span>
                  {data?.languages?.join(", ")}
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
                {data?.borders.map((item, index) => {
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
};

export default Country;
