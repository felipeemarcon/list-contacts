const app = require("./app");

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(
    `Server is up on ${process.env.APP_HOST}:${process.env.APP_PORT}!`
  );
});
