const express = require("express");
const app = express();
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema.js");
const port = 3000;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: 
true
  })
);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api", (req, res) => res.json({ success: true, value: 4 }));

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
const signals = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGTERM: 15
};
const shutdown = (signal, value) => {
  console.log("shutdown!");
  server.close(() => {
    console.log(`server stopped by ${signal} with value ${value}`);
    process.exit(128 + value);
  });
};

Object.keys(signals).forEach(signal => {
  process.on(signal, () => {
    console.log(`process received a ${signal} signal`);
    shutdown(signal, signals[signal]);
  });
});
