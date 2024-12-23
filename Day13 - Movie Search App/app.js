const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

// OMDb API Key
const OMDB_API_KEY = "ecef4bfc";

// Serve static files (CSS/JS)
app.use(express.static(path.join(__dirname, "public")));

// Serve the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Endpoint for searching movies
app.get("/search", async (req, res) => {
  const { query } = req.query; // Movie title from the frontend

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
    if (response.data.Response === "True") {
      res.json(response.data.Search); // Return search results
    } else {
      res.json({ error: response.data.Error });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
