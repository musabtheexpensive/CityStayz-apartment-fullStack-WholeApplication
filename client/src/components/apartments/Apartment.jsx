import React, { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
  const { apartments, setApartments } = useState({});
  useEffect(() => {
    fetch("../../../public/apartment.json")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);
  return (
    <div>
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};

export default Apartment;
