import axios from "axios";

export const allCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const countriesByRegion = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/region/europe"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const countryByName = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/name/nigeria"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
countriesByRegion();
