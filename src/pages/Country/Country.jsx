import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryName } from "../../shared/api/getCountryName";
import { numberWithCommas } from "../../shared/api/numberWithCommas";
import styles from "./Country.module.css";

const Button = ({ value, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {value}
    </button>
  );
};

const ButtonCountry = ({ value, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${styles["btn-country"]}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const Country = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [country, setCoutry] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((res) => setCoutry(res[0]));
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

  if (country) {
    console.log(country);
    Object.assign(data, {
      borders: country?.borders ? country?.borders : [],
      capital: country?.capital ? country?.capital[0] : "",
      countryName: country ? country?.name?.common : "",
      currencies: country ? country?.currencies?.BBD?.name : "",
      flag: country ? country?.flags?.svg : "",
      languages: country ? Object.values(country?.languages) : [],
      nativeName: country ? country?.altSpellings[1] : "",
      population: numberWithCommas(country?.population, "."),
      region: country ? country?.region : "",
      subregion: country ? country?.subregion : "",
      tld: country ? country?.tld[0] : [],
    });
  }

  return (
    <div className={styles.country}>
      <section className={styles["country__nav"]}>
        <Button value="Back" onClick={() => navigate(-1)} />
      </section>
      <section className={styles["country__infos"]}>
        <div className={styles["country__img"]}>
          <div className={styles["img__container"]}>
            <img src={data?.flag} alt="img" />
          </div>
        </div>
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
                  {data.languages.join(", ")}
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
                {data.borders.map((item, index) => {
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
