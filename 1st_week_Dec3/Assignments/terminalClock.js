function printClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;
  console.clear();
  console.log(time);
}

setInterval(printClock, 1000);

// hot add this folder to perticular git repo
// git init
// git add .
// git commit -m "initial commit"
// git remote add origin
