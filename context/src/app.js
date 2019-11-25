const graphqlHTTP = require("express-graphql");
const schema = require("./schema.js");

const application = (app) => {
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
};

module.exports = application;
