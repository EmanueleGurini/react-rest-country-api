import React from "react";
import Select from "react-select";
import { useFetch } from "./hook/useFetch";

import Card from "./components/Card/Card";
import style from "./Home.module.css";
import IconLensLight from "../../assets/icons/icon-lens-light.svg";
import IconLensDark from "../../assets/icons/icon-lens-dark.svg";

import { options } from "./data/data";
import { useContext } from "react";
import { ThemeContext } from "../../shared/context/ThemeContext";
import { styles } from "./select.style";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [countryFilter, setCountryFilter] = React.useState("");
  const {
    countries,
    selectedRegion,
    actions: { getCountryByRegion },
  } = useFetch();

  /**
   * Set coutryFilter state with the value passed inside the input
   *
   * @param {string} e
   */
  const handleChange = (e) => {
    setCountryFilter(e.target.value.toLowerCase());
  };

  return (
    <React.Fragment>
      {/* SECTION SEARCH */}
      <section className={style.search}>
        {/* INPUT */}
        <div
          className={`${style["search__input"]} ${
            style[theme ? "light" : "dark"]
          }`}
        >
          <img
            src={theme ? IconLensLight : IconLensDark}
            alt={theme ? "icon lens light" : "icon lens dark"}
          />
          <input
            className={style[theme ? "light" : "dark"]}
            value={countryFilter}
            type={"text"}
            onChange={handleChange}
            placeholder="Search for a country..."
          />
        </div>
        {/* END INPUT */}

        {/* SELECT */}
        <div className={style["serch__select"]}>
          <Select
            isSearchable={false}
            input={false}
            styles={styles(theme)}
            defaultValue={selectedRegion}
            onChange={getCountryByRegion}
            options={options}
            autoFocus={false}
            placeholder={"Filter by Region..."}
          />
        </div>
        {/* END SELECT */}
      </section>
      {/* END SEARCH SECTION */}

      {/* SECTION CARDS */}
      <section className={style.cards}>
        {/* Single Card */}
        {countries
          ?.filter((item) =>
            item?.name?.common.toLowerCase().includes(countryFilter)
          )
          .map((country, index) => {
            return <Card key={`country-${index}`} country={country} />;
          })}
      </section>
      {/* END SECTION CARDS */}
    </React.Fragment>
  );
};

export default Home;
