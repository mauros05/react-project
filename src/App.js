import './App.css';
import { useEffect } from 'react';
import MovieCard from './views/MovieCard';
// import Users from './views/Users';
// import Counter from './views/Counter';

import SearchIcon from './search.svg'

// c88f66da
const API_URL = 'http://www.omdbapi.com/?apikey=c88f66da&';
const movie = { 
  "Title": "Transformers",
  "Year": "2007",
  "imdbID": "tt0418279",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Transformers');
  }, []);

  return(
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>
      <div className="container">
        <MovieCard movie={ movie }></MovieCard>
      </div>
    </div>
  )
}

export default App;
