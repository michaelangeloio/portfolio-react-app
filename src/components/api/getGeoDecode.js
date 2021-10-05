import Geocode from "react-geocode";

import React, {useEffect, useState} from "react";
async function GeoDecode(lat, lng) {
  Geocode.setApiKey(process.env.REACT_APP_GEODECODE_API_KEY);

  // set response language. Defaults to english.
  Geocode.setLanguage("en");

  // set location_type filter . Its optional. google geocoder returns more that
  // one address for given lat/lng. In some case we need one address as response
  // for which google itself provides a location_type filter. So we can easily
  // parse the result for fetching address components ROOFTOP, RANGE_INTERPOLATED,
  // GEOMETRIC_CENTER, APPROXIMATE are the accepted values. And according to the
  // below google docs in description, ROOFTOP param returns the most accurate
  // result.
  Geocode.setLocationType("ROOFTOP");

  // Enable or disable logs. Its optional.
  Geocode.enableDebug();
  // set Google Maps Geocoding API for purposes of quota management. Its optional
  // but recommended. Get formatted address, city, state, country from latitude &
  // longitude when Geocode.setLocationType("ROOFTOP") enabled the below parser
  // will work for most of the countries
  try {

    const response = await Geocode.fromLatLng(lat, lng);
    const address = response.results[0].formatted_address;
    let city,
      state,
      country;
    for (let i = 0; i < response.results[0].address_components.length; i++) {
      for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
        switch (response.results[0].address_components[i].types[j]) {
          case "locality":
            city = response.results[0].address_components[i].long_name;
            break;
          case "administrative_area_level_1":
            state = response.results[0].address_components[i].long_name;
            break;
          case "country":
            country = response.results[0].address_components[i].long_name;
            break;
          default:
            break;
        }
      }
    }

    let space = ", ";
    let promptAddress = state + space + country;
    console.log(promptAddress)
    return (promptAddress)

  } catch (error) {
    console.error(error);
  }

}
export default GeoDecode;