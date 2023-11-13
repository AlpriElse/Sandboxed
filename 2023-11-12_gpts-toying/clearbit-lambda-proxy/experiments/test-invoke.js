const { handler } = require("../index");

async function main() {
  const result = await handler({
    queryStringParameters: {
      query: "and:(tech:marketo raised:100000~)",
    },
  });

  console.log(result);
  return result;
}

main();
