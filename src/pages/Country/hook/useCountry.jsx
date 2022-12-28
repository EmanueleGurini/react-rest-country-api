import { useState, useEffect } from "react";

const useCountry = (id) => {
  const [country, setCountry] = useState({
    data: null,
    error: "",
    isLoading: false,
  });

  useEffect(() => {
    setCountry((prev) => {
      return { ...prev, isLoading: true };
    });

    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((res) =>
        setCountry((prev) => {
          return { ...prev, data: res[0] };
        })
      )
      .catch((error) =>
        setCountry((prev) => {
          return { ...prev, error: error };
        })
      )
      .finally(() =>
        setCountry((prev) => {
          if (country.error !== "") console.log(country.error);
          return { ...prev, isLoading: false };
        })
      );
  }, [id]);

  return country;
};

export default useCountry;
