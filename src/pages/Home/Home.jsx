import React from "react";

import style from "./Home.module.css";

const Home = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => setCountries(res));
  }, []);

  return (
    <React.Fragment>
      <section className={style.search}>search</section>
      {/* Cards */}
      <section className={style.cards}>
        {/* Single Card */}
        {countries?.map((country, index) => {
          return (
            <>
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
                      <b>Population:</b>
                    </p>
                    <p>
                      <b>Region:</b>
                    </p>
                    <p>
                      <b>Capitol:</b>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Home;
