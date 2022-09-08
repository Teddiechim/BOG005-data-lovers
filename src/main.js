import data from "./data/ghibli/ghibli.js";
import {
  sortDateRecent,
  sortDateAncient,
  GenreFilters,
  searchFilters,
} from "./data.js";

//responsive
let menu = document.getElementsByClassName("menu")[0];

menu.classList.add("hideMenu");

let estado = true;
function visible() {
  if (estado) {
    menu.classList.remove("hideMenu");
    estado = false;
  } else {
    menu.classList.add("hideMenu");
    estado = true;
  }
}

document.getElementById("searchIcon2").addEventListener("click", visible);

// movie target

data.films;
let output = "";
for (let i = 0; i < data.films.length; i++) {
  output =
    output +
    `<div class="movie" id=${data.films[i].id} >
          <figure>
            <img
              alt="Portada de ${data.films[i].title}"
              class="movieImg"
              src="${data.films[i].poster}"/>
          </figure>
          <span class="titleMovie">${data.films[i].title}</span>
          <span class="fecha">${data.films[i].release_date}</span>
      </div>`;
}

document.getElementById("movieContainer__2").innerHTML = output;

// MovieEvent

let page2 = document.getElementById("page2");
page2.classList.add("hideMenu");

let targetMovie = document.getElementsByClassName("movie");

for (let nodo of targetMovie) {
  nodo.addEventListener("click", dataMovie);
}

function dataMovie(e) {
  window.scrollTo(0, 0);
  document.getElementById("page1").classList.add("hideMenu");
  let dataId = e.target.id;
  let clickedMovie = data.films.find((element) => element.id == dataId);
  let movieInformation = `<div id= "page2">
       <header id="header">
         <section class="navContainer">
           <figure class="logoContainer">
             <img alt="Studio Ghibli Logo" class="logo" src="img/logo.svg" />
           </figure>
           <span class="title">STUDIO GHIBLI WIKI</span>
         </section>
         <nav class="iconBack">
           <a href="index.html">
             <i class="fi fi-rr-arrow-circle-left iconBackImg"></i>
           </a>
         </nav>
       </header>
       <main>
         <section class="Movi1Container">
           <img
             alt="Portada de Castle ${clickedMovie.title}"
             class="Movie1Sky"
             src="${clickedMovie.poster}"
           />
           <div class="caja1">
             <span class="titleMovie1"><b> ${clickedMovie.title}</b></span
             ><br />
             <span class="fecha1"><b>Release date:</b> ${clickedMovie.release_date}</span><br />
             <span class="director"><b>Director:</b> ${clickedMovie.director}</span><br />
             <span class="producer"><b>Producer:</b>${clickedMovie.producer}</span><br />
             <span class="Description"
               ><b>Description:</b> ${clickedMovie.description}</span
             ><br />
             <span class="rt_score"
               ><b>Score: &#9733; &#9733; &#9733; &#9733; &#9733;</b> ${clickedMovie.rt_score}</span
             ><br />
           </div>
           <img alt="Imagen de Totoro" class="TotoroCharacter" src="img/totoroCharacter.png" />
         </section>`;

  let carouselOpen = `<div class="carousel">
    <div class="carouselContainer">
     <div class="carouselList">`;

  let carouselClose = `</div> 
           <button aria-label="prev" class="carouselBack">
             <i class="fi fi-rr-angle-left"></i>
           </button>
           <button aria-label="next" class="carouselNext">
            <i class="fi fi-rr-angle-right"></i>
           </button>
          </div>
          <div role="tablist" class="carouselIndicators"></div>
         </div>`;

  let peopleText = `<span class="titlesMovie">PEOPLE</span>`;

  let peopleInformation = "";
  for (let i = 0; i < clickedMovie.people.length; i++) {
    peopleInformation += `<section class="peoplesky" id="peoples">
           <div class="people">
             <figure>
               <img
                 alt="Imagen de ${clickedMovie.people[i].name} de ${clickedMovie.title}"
                 class="peopleImg"
                 src=${clickedMovie.people[i].img}
               />
             </figure>
             <span class="peopleText"
               ><b>${clickedMovie.people[i].name}</b><br />Gender: ${clickedMovie.people[i].gender}<br />Age: ${clickedMovie.people[i].age}<br />Eye color: ${clickedMovie.people[i].eye_color}<br />Hair
               color: ${clickedMovie.people[i].hair_color}<br />
               Specie: ${clickedMovie.people[i].specie}
             </span>
           </div>
          </section>
          `;
  }

  let locationsText =
    clickedMovie.locations.length != 0
      ? `<span class="titlesMovie">LOCATIONS</span>`
      : "";

  let locationsInformation = "";
  for (let i = 0; i < clickedMovie.locations.length; i++) {
    locationsInformation += `<section class="peoplesky" id="peoples">
           <div class="people">
             <figure>
               <img
                 alt="Imagen de ${clickedMovie.locations[i].name} de ${clickedMovie.title}"
                 class="peopleImg"
                 src=${clickedMovie.locations[i].img}
               />
             </figure>
             <span class="peopleText"
               ><b>${clickedMovie.locations[i].name}</b><br />Climate: ${clickedMovie.locations[i].climate}<br />Terrain: ${clickedMovie.locations[i].terrain}<br />Surface
               Water: ${clickedMovie.locations[i].surface_water}
             </span>
           </div>
         </section>`;
  }

  let vehiclesText =
    clickedMovie.vehicles.length != 0
      ? `<span class="titlesMovie">VEHICLES</span>;`
      : "";

  let vehiclesInformation = "";
  for (let i = 0; i < clickedMovie.vehicles.length; i++) {
    vehiclesInformation += `<section class="peoplesky" id="peoples">
           <div class="people">
             <figure>
               <img
                 alt="Imagen de ${clickedMovie.vehicles[i].name} de ${clickedMovie.title}"
                 class="peopleImg"
                 src=${clickedMovie.vehicles[i].img}
               />
             </figure>
             <span class="peopleText"
               ><b>${clickedMovie.vehicles[i].name}</b><br />Description:${clickedMovie.vehicles[i].description}<br />Vehicle class:
               ${clickedMovie.vehicles[i].vehicle_class}<br />Length: ${clickedMovie.vehicles[i].length}
             </span>
           </div>
         </section>`;
  }

  let footerInformation = `<footer>
           <div class="iconFooterContainer">
             <i class="fi fi-brands-facebook iconFooter"></i>
             <i class="fi fi-brands-twitter iconFooter"></i>
             <i class="fi fi-brands-instagram iconFooter"></i>
             <i class="fi fi-brands-youtube iconFooter"></i>
           </div>
           <span class="copyright"
             >© 2022 Studio Ghilbli All Rights Reserved
           </span>
         </footer>
       </main>
     
   </div>`;

  document.querySelector("body").innerHTML =
    movieInformation +
    peopleText +
    carouselOpen +
    peopleInformation +
    carouselClose +
    locationsText +
    carouselOpen +
    locationsInformation +
    carouselClose +
    vehiclesText +
    carouselOpen +
    vehiclesInformation +
    carouselClose +
    footerInformation;

  // Carousel
  const carousel = document.querySelectorAll(".carouselList");
  for (let nodo of carousel) {
    new Glider(nodo, {
      slidesToScroll: 1,
      slidesToShow: 1,
      draggable: true,
      dots: ".carouselIndicators",
      arrows: {
        prev: ".carouselBack",
        next: ".carouselNext",
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 600,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });
  }
}

// search filter

const searcherInput = document.querySelector(".inputSearch");

searcherInput.addEventListener("keyup", test);

function test() {
  const value = searcherInput.value;
  const filteredData = searchFilters(value, data.films);

  let output = "";
  for (let i = 0; i < filteredData.length; i++) {
    output =
      output +
      `<div class="movie" id=${filteredData[i].id}>
          <figure>
            <img
              alt="Portada de ${filteredData[i].title}"
              class="movieImg"
              src="${filteredData[i].poster}"/>
          </figure>
          <span class="titleMovie">${filteredData[i].title}</span>
          <span class="fecha">${filteredData[i].release_date}</span>
          </div>`;
  }
  document.getElementById("movieContainer__2").innerHTML = output;

  let targetMovie = document.getElementsByClassName("movie");
  for (let nodo of targetMovie) {
    nodo.addEventListener("click", dataMovie);
  }
}

// Genre filter

const genreDesktop = document.getElementsByClassName("spanGenre");
for (let nodo of genreDesktop) {
  nodo.addEventListener("click", test2);
}

function test2(e) {
  const textGenre = e.target.textContent;
  const filteredData = GenreFilters(textGenre, data.films);
  let output = "";
  for (let i = 0; i < filteredData.length; i++) {
    output =
      output +
      `<div class="movie" id=${filteredData[i].id}>
          <figure>
            <img
              alt="Portada de ${filteredData[i].title}"
              class="movieImg"
              src="${filteredData[i].poster}"/>
          </figure>
          <span class="titleMovie">${filteredData[i].title}</span>
          <span class="fecha">${filteredData[i].release_date}</span>
          </div>`;
  }
  document.getElementById("movieContainer__2").innerHTML = output;

  let targetMovie = document.getElementsByClassName("movie");
  for (let nodo of targetMovie) {
    nodo.addEventListener("click", dataMovie);
  }
}

// icons filter

const genreIcons = document.getElementsByClassName("genreIcon");
for (let nodo of genreIcons) {
  nodo.addEventListener("click", test2);
}

//Sort

const buttonRecent = document.getElementById("sortRecent");
const buttonAncient = document.getElementById("sortAncient");

buttonRecent.addEventListener("click", sortRecent);

function sortRecent(e) {
  const sortDate = sortDateRecent(data.films);
  let output = "";
  for (let i = 0; i < sortDate.length; i++) {
    output =
      output +
      `<div class="movie" id=${sortDate[i].id}>
          <figure>
            <img
              alt="Portada de ${sortDate[i].title}"
              class="movieImg"
              src="${sortDate[i].poster}"/>
          </figure>
          <span class="titleMovie">${sortDate[i].title}</span>
          <span class="fecha">${sortDate[i].release_date}</span>
          </div>`;
  }
  document.getElementById("movieContainer__2").innerHTML = output;

  let targetMovie = document.getElementsByClassName("movie");
  for (let nodo of targetMovie) {
    nodo.addEventListener("click", dataMovie);
  }
}

buttonAncient.addEventListener("click", sortAncient);

function sortAncient(e) {
  const sortDate = sortDateAncient(data.films);
  let output = "";
  for (let i = 0; i < sortDate.length; i++) {
    output =
      output +
      `<div class="movie" id=${sortDate[i].id}>
          <figure>
            <img
              alt="Portada de ${sortDate[i].title}"
              class="movieImg"
              src="${sortDate[i].poster}"/>
          </figure>
          <span class="titleMovie">${sortDate[i].title}</span>
          <span class="fecha">${sortDate[i].release_date}</span>
          </div>`;
  }
  document.getElementById("movieContainer__2").innerHTML = output;

  let targetMovie = document.getElementsByClassName("movie");
  for (let nodo of targetMovie) {
    nodo.addEventListener("click", dataMovie);
  }
}
