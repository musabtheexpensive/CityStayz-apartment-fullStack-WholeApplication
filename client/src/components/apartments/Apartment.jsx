import React, { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
  const [apartments, setApartments]= useState([]);
  useEffect(() => {
    fetch("../../../public/apartment.json")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};

export default Apartment;
