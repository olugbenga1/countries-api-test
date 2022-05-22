import axios from "axios";

async function getCountries() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getCountries();

export default { getCountries };
