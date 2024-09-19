document.getElementById('searchButton').addEventListener('click', searchMovies);

const api_key = '4eafea0ef28f1874219dd30c80570a3f';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWFmZWEwZWYyOGYxODc0MjE5ZGQzMGM4MDU3MGEzZiIsIm5iZiI6MTcyNjQxOTQ5Mi41OTk1MjIsInN1YiI6IjY2ZTcxMDJmZDdiY2NhNTI0ZGIwYTZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.woEgpRro2ohM4r0sDUtMJ5j9rUkkpfr10EK54b7T2Js';
const urlBase = 'https://api.themoviedb.org/3/search/movie';
const ejemplo = 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=4eafea0ef28f1874219dd30c80570a3f';
const urlImg = 'https://image.tmdb.org/t/p/w500';
const resultContainer = document.getElementById('results');
 

function searchMovies() {
  let searchInput = document.getElementById('searchInput').value;
  resultContainer.innerHTML="Cargando...";
  fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
  .then(response => response.json())
  .then(response => displayMovies(response.results))
}


function displayMovies(movies){

  resultContainer.innerHTML="";
  if(movies.length === 0){
    resultContainer.innerHTML = '<p> No se encontraron resultados </p>';
    return;
  }

  movies.forEach(movie => {
    let moviediv = document.createElement('div');
    moviediv.classList.add('movie');

    let title = document.createElement('h2');
    title.textContent = movie.title;

    let releaseDate = document.createElement('p');
    releaseDate.textContent = `La fecha de lanzamiento fue: ${movie.release_date}`;

    let overview = document.createElement('p');
    overview.textContent = movie.overview;

    let posterPath = urlImg+movie.poster_path;
    let poster = document.createElement('img');
    poster.src = posterPath;

    moviediv.appendChild(poster);
    moviediv.appendChild(title);
    moviediv.appendChild(releaseDate);
    moviediv.appendChild(overview);
    resultContainer.appendChild(moviediv);
  });
}