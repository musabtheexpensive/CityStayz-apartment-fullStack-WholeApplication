import React, { useEffect, useState } from 'react';

const Apartment = () => {
    const {apartments,setApartments}=useState({})
    useEffect(()=>{
        fetch('../../../public/apartment.json')
        .then(res=>res.json())
        .then(data=>setApartments(data))
    },[])
    return (
        <div>
            A
        </div>
    );
};

export default Apartment;
