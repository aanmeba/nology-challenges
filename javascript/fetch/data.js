const API_URL = "https://restcountries.com/v3.1/name";

const getData = async (value) => {
  const response = await fetch(`${API_URL}/${value}`);
  const data = await response.json();

  const {
    capital: [capital],
    name: { common, official },
    flag: flagEmoji,
    flags: { png: flag },
    region,
  } = data[0]; // capital: string, name: object {common, official}, flags.png: string, region

  return { common, official, capital, flagEmoji, flag, region };
};

export default getData;
