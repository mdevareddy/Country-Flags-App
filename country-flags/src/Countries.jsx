import React, { useState } from 'react'
import { useEffect } from 'react';


const CountryCard=({name,flagImg,flagAltText}) =>{
    return(
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "200px",
        border: "2px solid black",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        textAlign: "center"

      }}
      >
        <img src={flagImg}
         alt={"Flag of" + flagAltText}
         style={{
            width:"100px",
            height:"100px",
        }}/>
        <h2>{name}</h2>
      </div>
    )
  
  }
function Countries(){
    const API_URL = " https://xcountries-backend.azurewebsites.net/all";
    // const tempArr = [1,2,3,4,5,6,7,8];
    const[countries,setCountries] = useState([]);
    console.log({countries});

    useEffect(() =>{
        fetch(API_URL).then(res => res.json()).then(data =>{setCountries(data)}).catch((error) =>(console.error("Error fetching data:",error.message)))

    },[])
    return(
        <div
        style={{
            display: "flex",
            flexWrap: "wrap",
        }}
        >
        {countries.map((country) =><CountryCard key={country.abbr} name={country.name} flagImg={country.flag} flagAltText={country.abbr}/>)}
        </div>
    );
}

export default Countries