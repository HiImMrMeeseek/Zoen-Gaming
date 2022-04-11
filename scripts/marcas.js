const patrocinadores = [
  {
    title: "Asus ROG",
    info: "Asus ROG nos apoya desde los inicios, por eso es nuestro patrocinador principal y los queremos muchoMarca 1 nos apoya desde los inicios, por eso es nuestro patrocinador principal y los queremos muchoMarca 1 nos apoya desde los inicios, por eso es nuestro patrocinador principal y los queremos mucho",
    img: "../images/marca1.png",
  },
  {
    title: "Redragon",
    info: "Redragon siempre han sido muy cordiales y transparentes con nosotrxs por eso estamos totalmente agradecidosMarca 2 siempre han sido muy cordiales y transparentes con nosotrxs por eso estamos totalmente agradecidosMarca 2 siempre han sido muy cordiales y",
    img: "../images/marca2.png",
  },
  {
    title: "AORUS",
    info: "AORUS todo mas que bien con ellxs, en la buena siempre. gracias por los perifericosMarca 3 todo mas que bien con ellxs, en la buena siempre. gracias por los perifericosMarca 3 todo mas que bien con ellxs, en la buena siempre. gracias por los perifericos",
    img: "../images/marca3.png",
  },
  {
    title: "GG.BET",
    info: "GG.BET es el patrocinador mas nuevo pero no por eso menos que los demas, desde el dia 1 nos dieron todo lo que pudieron y mas.Marca 4 es el patrocinador mas nuevo pero no por eso menos que los demas, desde el dia 1 nos dieron todo lo que pudieron y mas.",
    img: "../images/marca4.png",
  },
];

const marcas = document.querySelectorAll(".btn-marcas");
const modalTitle = document.querySelector(".title-marca");
const modalInfo = document.querySelector(".p-marca");
const marcaImg = document.querySelector(".marca-img");

marcas.forEach(function (marca) {
  marca.addEventListener("click", (e) => {
    let title = patrocinadores[marca.id].title;
    let info = patrocinadores[marca.id].info;
    let img = patrocinadores[marca.id].img;

    marcaImg.setAttribute("src", `${img}`);
    modalTitle.innerHTML = `${title}`;
    modalInfo.innerHTML = `${info}`;
  });
});
// nav responsive
const showLinks = document.querySelector(".toggle-links");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function (e) {
  showLinks.classList.toggle("show-links");
  toggleBtn.classList.toggle("show-toggle-btn");
});

// foot
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
