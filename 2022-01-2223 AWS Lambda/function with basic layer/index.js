const test = require("my-test-layer");
const fs = require("fs");

exports.handler = async (event) => {
  test();
  console.log("hi");
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
