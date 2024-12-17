import express from "express";

const app = express();
const hostname = "localhost";
const port = 2728;

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, hostname, () => {
  /* eslint-disable no-console */
  console.log(`HeySon server đang chạy trên: http://${hostname}:${port}`);
});
