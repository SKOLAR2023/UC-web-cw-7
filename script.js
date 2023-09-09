const movie1 = {
    name: "Oppenheimer",
    img: "https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900"
}
const movie2 = {
    name: "1917",
    img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/19e5290f1efbfa994701b3e2368b255df1748f7cc9c82db59dc5324427b452a9._RI_TTW_.jpg"
}
const movie3 = {
    name: "Dumb and Dumber",
    img: "https://upload.wikimedia.org/wikipedia/ar/4/4e/Dumb_and_dumber1poster.jpg"
}

const movies = []

movies.push(movie1,movie2,movie3 );



let movieContainer = document.getElementById('container')

movies.forEach((movie) => {
    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${movie.img}" alt="movie picture" />
 <h2>${movie.name}</h2>
 </div>
`;
})
