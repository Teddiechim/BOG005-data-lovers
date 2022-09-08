import data from "./data/ghibli/ghibli.js";
// data pagina personajes
data.films.people;
let SalidaFicha = "";
for (let i = 0; i < data.films.people1.length; i++) {
  SalidaFicha =
    SalidaFicha +
    `<div class="people">
          <figure>
            <img
              alt="personaje ${data.films.people1[i].people}"
              class="peopleImg"
              src="${data.films.people[i].img}"/>
          </figure>
          <span class="name">${data.films.people1[i].name}</span>
          <span class="Gender">${data.films.people1[i].gender}</span>
          <span class="age">${data.films.people1[i].age}</span>
          <span class="eye_color">${data.films.people1[i].eye_color}</span>
          <span class="hair_color">${data.films.people1[i].hair_color}</span>
          <span class="specie">${data.films.people1[i].specie}</span>        
        </div>`;
}
document.getElementById("peoples").innerHTML = SalidaFicha;
