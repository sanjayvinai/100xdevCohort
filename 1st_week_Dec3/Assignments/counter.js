let count = 30;
let counter = setInterval(() => {
  count--;
  console.clear();
  console.log(count);
  if (count === 0) {
    clearInterval(counter);
    return;
  }
}, 1000);
