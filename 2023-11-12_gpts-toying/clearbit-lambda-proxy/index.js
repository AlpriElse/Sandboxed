require("dotenv").config();
const CLEARBIT_KEY = process.env.CLEARBIT_API_KEY;

const axios = require("axios");

exports.handler = async (event) => {
  let queryParam = event.queryStringParameters?.query;

  if (queryParam === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Query parameter `query` is required",
      }),
    };
  }

  return getCompanyData(queryParam)
    .then((res) => {
      return {
        statusCode: 200,
        body: JSON.stringify({
          result: res.results,
          message: `Processed ${queryParam}`,
        }),
      };
    })
    .catch((e) => ({
      statusCode: 500,
      body: JSON.stringify({
        error: e,
      }),
    }));
};

const getCompanyData = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        "https://discovery.clearbit.com/v1/companies/search",
        {
          params: {
            query,
            sort: "alexa_asc",
          },
          auth: {
            username: CLEARBIT_KEY,
            password: "",
          },
        }
      );

      resolve(response.data);
    } catch (error) {
      console.error("Error when calling Clearbit", error.message);
      reject(error);
    }
  });
};
