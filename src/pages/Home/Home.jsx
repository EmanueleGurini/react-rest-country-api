import React from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card/Card";

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
          return <Card key={`country-${index}`} country={country} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default Home;
