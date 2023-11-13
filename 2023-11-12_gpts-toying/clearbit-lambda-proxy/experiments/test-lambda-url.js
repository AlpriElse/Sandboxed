const axios = require("axios");
require("dotenv").config();

axios
  .get(process.env.LAMBDA_FUNCTION_URL, {
    params: {
      query: "and:(tech:marketo raised:100000~)",
    },
  })
  .then((res) => console.log(res.data.result))
  .catch((e) => {
    console.log("error", e);
  });
