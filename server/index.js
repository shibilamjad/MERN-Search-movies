const express = require("express");
const cors = require("cors");
const movieList = require("./moviesList.json");
const app = express();
console.log(movieList.length);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.query.movieName);
  const { movieName } = req.query;

  const filterMovies = movieList.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(movieName.toLocaleLowerCase())
  );

  res.json(filterMovies);
});
app.post("/", (req, res) => {
  // console.log(req.body);
  res.json(movieList);
});

const PORT = 3005;
app.listen(PORT, () => console.log(`server runing ${PORT}`));
