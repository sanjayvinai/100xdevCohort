const startTime = performance.now();

setTimeout(() => {
  const endTime = performance.now();
  const timeElapsed = endTime - startTime;
  console.log(`Time elapsed: ${timeElapsed} milliseconds`);
}, 1000);
