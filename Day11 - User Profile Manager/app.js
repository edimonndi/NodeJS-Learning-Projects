require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models/user");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");
    await sequelize.sync({ force: false }); // Set to 'true' to reset DB during dev
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
})();
