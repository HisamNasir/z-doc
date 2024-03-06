import axios from "axios";

const getCountryCode = async () => {
  try {
    const response = await axios.get(
      `https://api.ipstack.com/check?access_key=5d6926314489a236e9566eac61f0f245`
    );
    console.log("ipstack response:", response.data);
    const countryCode = response.data.country_code;
    return countryCode;
  } catch (error) {
    return null;
  }
};

export default getCountryCode;
