import axios from "axios";
import { transformGEODBData } from "../utils/transformGDData";

const API_KEY = import.meta.env.VITE_REACT_APP_GEODB_KEY;

const getCitiesSuggestions = async (namePrefix) => {
  console.log(namePrefix)
  console.log(API_KEY)
  const API_URL = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${namePrefix}`;
  const headers = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }

  try {
    const response = await axios.get(API_URL, { headers: headers });
    const transformedResponse = transformGEODBData(response.data.data || [])
    return transformedResponse;
  }
  catch (error) {
    console.error(error);
  }
}

export {getCitiesSuggestions}