import React, { useState } from 'react';
import './App.css';

interface Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async () => {
    try {
      const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=3646ea75`
      );
      const data = await response.json();
      console.log(data)
      if (data.Search){
        const newMovies = data.Search.map((movie: any) => ({
          title: movie.Title,
          year: movie.Year,
          imdbID: movie.imdbID,
          type: movie.Type,
          poster: movie.Poster,
        }));
        setMovies(newMovies);
      }
    } catch (error){
      console.log('Error searching movies:', error);
    }
  };

  return(
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-semibold mb-4">Movie Search App</h1>
          <div className="flex mb-4">
            <input
            type={"text"}
            placeholder={"Search for a movie"}
            className={"border p-2 rounded-l w-full"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button
            className={"bg-blue-500 text-white px-4 py-2 rounded-r"}
            onClick={searchMovies}
            >Search</button>
          </div>
          <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
            {movies.map((movie) => (
                <div key={movie.imdbID}
                className={"bg-white rounded shadow overflow-hidden"}>
                  <img
                  src={movie.poster}
                  alt={movie.title}
                  className={"h-64 w-full object-cover"}
                  />
                  <div className={"p-4"}>
                    <h2 className={"text-xl font-semibold"}>{movie.title}</h2>
                    <p>Year: {movie.year}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default App;