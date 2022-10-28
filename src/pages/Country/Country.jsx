import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, [id]);

  return <h1>I'm Country</h1>;
};

export default Country;
