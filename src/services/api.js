const axios = require("axios").default;

// fetchs the data from the API
export const fetchData = async (url) => {
  await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
