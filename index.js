const movies = document.getElementById("Movies");

function fetchMovies() {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3114b5ee&s=avengers")
        .then((data) => {
            return data.json();
        })
        .then((data) => {
                data.Search.forEach((element) => {
                    const div = document.createElement("div");
                    div.className = "Movie-card";
                    const img = document.createElement("img");
                    const h3 = document.createElement("h3");

                    img.src = element.Poster;
                    h3.innerText = element.Title;
                    div.append(img, h3);
                    movies.appendChild(div);
                    
            console.log(data);

                });
            
            
        })
        .catch((err) => {
            console.error(err);
        });
}

fetchMovies();
