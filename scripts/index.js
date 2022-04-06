const patrocinadores = [
    {
        title: 'Marca 1',
        info: 'Marca 1 nos apoya desde los inicios, por eso es nuestro patrocinador principal y los queremos muchoMarca 1 nos apoya desde los inicios, por eso es nuestro patrocinador principal y los queremos muchoMarca 1 nos apoya desde los inicios, por eso es nuestro patrocinador principal y los queremos mucho',
        web: 'index1.html',
        img: '../images/marca1.png'
    },
    {
        title: 'Marca 2',
        info: 'Marca 2 siempre han sido muy cordiales y transparentes con nosotrxs por eso estamos totalmente agradecidosMarca 2 siempre han sido muy cordiales y transparentes con nosotrxs por eso estamos totalmente agradecidosMarca 2 siempre han sido muy cordiales y',
        web: 'index2.html',
        img: '../images/marca1.png'
    },
    {
        title: 'Marca 3',
        info: 'Marca 3 todo mas que bien con ellxs, en la buena siempre. gracias por los perifericosMarca 3 todo mas que bien con ellxs, en la buena siempre. gracias por los perifericosMarca 3 todo mas que bien con ellxs, en la buena siempre. gracias por los perifericos',
        web: 'index3.html',
        img: '../images/marca1.png'
    },
    {
        title: 'Marca 4',
        info: 'Marca 4 es el patrocinador mas nuevo pero no por eso menos que los demas, desde el dia 1 nos dieron todo lo que pudieron y mas.Marca 4 es el patrocinador mas nuevo pero no por eso menos que los demas, desde el dia 1 nos dieron todo lo que pudieron y mas.',
        web: 'index4.html',
        img: '../images/marca1.png'
    }
]

const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.close-modal');
const marcas = document.querySelectorAll('.marca');
const modalTitle = document.querySelector('.title-marca');
const modalInfo = document.querySelector('.p-marca');
const marcaWeb = document.querySelector('.marca-link');
const marcaImg = document.querySelector('.marca-modal');

marcas.forEach(function (marca) {
    marca.addEventListener("click", (e) => {
        let title = patrocinadores[marca.id].title;
        let info = patrocinadores[marca.id].info;
        let web = patrocinadores[marca.id].web;
        let img = patrocinadores[marca.id].img;

        marcaImg.setAttribute('src', `${img}`);
        marcaWeb.setAttribute('href', `${web}`);
        modal.classList.add('open-modal');
        modalTitle.innerHTML = `${title}`;
        modalInfo.innerHTML = `${info}`;
    });
});
closeModal.addEventListener('click', function (e) {
    modal.classList.remove('open-modal');
})

// foot
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
