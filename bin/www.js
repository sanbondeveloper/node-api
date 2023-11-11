const app = require("../index");
const syncDb = require("./sync-db");

(async () => {
  await syncDb();
  console.log("Sync database");

  app.listen(3000, () => {
    console.log("Server is running on 3000 port");
  });
})();
