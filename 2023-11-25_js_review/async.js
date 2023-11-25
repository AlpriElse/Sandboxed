function delayedResolve() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 3000);
  });
}

async function main() {
  console.log("start call");
  await delayedResolve();
  console.log("done");
}
// main();

async function main2() {
  console.log("start call");
  delayedResolve().then(() => console.log("done"));
}

// main2();

async function main3() {
  console.log("start call");
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve(), 3000)
  );
  console.log("done");
}
// main3();
