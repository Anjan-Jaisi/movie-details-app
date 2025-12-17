const button = document.getElementById("button");
const title = document.getElementById("title");
const year = document.getElementById("year");
const rating = document.getElementById("rating");
const duration = document.getElementById("duration");
const plot = document.getElementById("plot");
const genre = document.getElementById("genre");
const director = document.getElementById("director");
const stars = document.getElementById("stars");
const poster = document.getElementById("poster");

button.addEventListener("click", () => {
    const movieName = document.getElementById("searchBox").value.trim();
    if (movieName === "") {
        alert("Enter movie name");
        return;
    }
    fetchMovie(movieName);
});

async function fetchMovie(movieName){
    try{
        const response = await fetch(
            `https://www.omdbapi.com/?t=${movieName}&apikey=9ceaf3a1`
        );
        const data = await response.json();

        if(data.Response === "False"){
            alert("Movie not found");
            return;
        }

        title.textContent = data.Title;
        year.textContent = "Year: " + data.Year;
        rating.textContent = data.imdbRating;
        duration.textContent = data.Runtime;
        plot.textContent = data.Plot;
        genre.textContent = "Genre: " + data.Genre;
        director.textContent = "Directed by: " + data.Director;
        stars.textContent = "Starring: " + data.Actors;
        poster.src = data.Poster;

    }catch(error){
        alert("Error fetching movie");
    }
}
