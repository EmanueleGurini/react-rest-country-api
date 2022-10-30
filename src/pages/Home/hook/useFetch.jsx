import React from "react";

export function useFetch() {
  const [countries, setCountries] = React.useState([]);
  const [selectedRegion, setSelectedRegion] = React.useState(null);

  React.useEffect(() => {
    if (!selectedRegion) {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((res) => setCountries(res));
    }

    if (selectedRegion) {
      fetch(`https://restcountries.com/v3.1/region/${selectedRegion.value}`)
        .then((res) => res.json())
        .then((res) => setCountries(res));
    }
  }, [selectedRegion]);

  /**
   * Set selectedOption state with the selected value and send a GET to fetch all value filtered by region.
   *
   * @param {string} option
   */
  function getCountryByRegion(option) {
    setSelectedRegion(option);
  }

  return { countries, selectedRegion, actions: { getCountryByRegion } };
}
