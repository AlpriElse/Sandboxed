require("dotenv").config();
const CLEARBIT_KEY = process.env.CLEARBIT_API_KEY;
const axios = require("axios");

const clearbit = require("clearbit")(CLEARBIT_KEY);

// clearbit.Discovery.search({ query: { tech: "marketo", raised: "100000~" } })
//   .then(function (search) {
//     console.log("Results:", search.results);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

/* This doesn't work */
// clearbit.Discovery.search({
//   query: "and:(tech:marketo raised:10000)",
// })
//   .then((search) => {
//     console.log("========== test 2 ==========");
//     console.log(" results", search.results);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

const getCompanyData = async () => {
  try {
    const response = await axios.get(
      "https://discovery.clearbit.com/v1/companies/search",
      {
        params: {
          query: "and:(tech:marketo raised:100000~)",
          sort: "alexa_asc",
        },
        auth: {
          username: CLEARBIT_KEY,
          password: "",
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error during API call", error.message);
  }
};
getCompanyData();
