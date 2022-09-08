import { ComputeStats } from "./data.js";
import data from "./data/ghibli/ghibli.js";
//chart

function getTitle(movie) {
  return movie.title;
}

const titleFilms = data.films.map(getTitle);

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: titleFilms,
    datasets: [
      {
        label: "",
        data: ComputeStats(data.films),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      labels: {
        boxWidth: 0,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// data

let characterArray = ComputeStats(data.films);
let output = "";
for (let i = 0; i < data.films.length; i++) {
  output =
    output +
    `<div class="characterData">
          <figure class="circleMovieContainer">
            <img
              alt="Portada de ${data.films[i].title}"
              class="circleMovie"
              src="${data.films[i].poster}"
            />
          </figure>
          <span class="characterDataText"
            >${data.films[i].title} has ${characterArray[i]} characters
          </span>
        </div>`;
}

document.getElementById("characterDataContainer").innerHTML = output;
