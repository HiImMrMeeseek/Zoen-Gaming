// JSON de los equipos y jugadores
const equipos = {
  valorant: {
    equipo: "Valorant",
    couch: {
      id: "BeTony",
      name: "Martin Bourre",
      edad: "37",
      nacionalidad: "Argentina",
      rol: "Couch",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player1: {
      id: "Klaus",
      name: "Nicolas Ferrari",
      edad: "20",
      nacionalidad: "Argentino",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player2: {
      id: "Mazino",
      name: "Roberto Francisco Rivas Bugueño",
      edad: "20",
      nacionalidad: "Chile",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player3: {
      id: "NagZet",
      name: "Juan Pablo Lopez Miranda",
      edad: "20",
      nacionalidad: "Chile",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player4: {
      id: "Delz1k",
      name: "Joaquin Ignacio Espinoza Soto",
      edad: "21",
      nacionalidad: "Chile",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player5: {
      id: "Keznit",
      name: "Angelo Mori",
      edad: "20",
      nacionalidad: "Chile",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
  },
  lol: {
    equipo: "League Of Legends",
    couch: {
      id: "Araneae",
      name: "Alvar Martín Aleñar",
      edad: "32",
      nacionalidad: "España",
      rol: "Couch",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player1: {
      id: "Mithy",
      name: "Alfonso Aguirre Rodríguez",
      edad: "27",
      nacionalidad: "España",
      rol: "Player/Support",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player2: {
      id: "Zven",
      name: "Jesper Svenningsen",
      edad: "24",
      nacionalidad: "Dinamarca",
      rol: "Player/ADC",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player3: {
      id: "Amazing",
      name: "Maurice Stückender",
      edad: "27",
      nacionalidad: "Alemania",
      rol: "Player/Jungle",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player4: {
      id: "xPeke",
      name: "Enrique Cedeño Martínez",
      edad: "29",
      nacionalidad: "España",
      rol: "Player/Mid",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player5: {
      id: "sOAZ",
      name: "Paul Boyer",
      edad: "28",
      nacionalidad: "Francia",
      rol: "Player/Top",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
  },
  csgo: {
    equipo: "CSGO",
    couch: {
      id: "Zakk",
      name: "Rafael Fernandes",
      edad: "30",
      nacionalidad: "Brasil",
      rol: "Couch",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player1: {
      id: "Dav1d",
      name: "David Tapia Maldonado",
      edad: "21",
      nacionalidad: "Chile",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player2: {
      id: "Luken",
      name: "Luca Nadotti",
      edad: "25",
      nacionalidad: "Argentina",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player3: {
      id: "Rox",
      name: "Martin Molina",
      edad: "19",
      nacionalidad: "Argentina",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player4: {
      id: "Max",
      name: "Maximiliano Gonzalez",
      edad: "22",
      nacionalidad: "Uruguay",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player5: {
      id: "Dgt",
      name: "Franco Manuel Garcia Cabrera",
      edad: "20",
      nacionalidad: "Uruguay",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
  },
  dota2: {
    equipo: "Dota 2",
    couch: {
      id: "Robo-z",
      name: "Sebastian Cerralta Velarde",
      edad: "27",
      nacionalidad: "Colombia",
      rol: "Couch",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player1: {
      id: "Berna",
      name: "Bernardo Rocca Alarcón",
      edad: "23",
      nacionalidad: "Peru",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player2: {
      id: "Kingteka",
      name: "Abraham Steve Canez Gil",
      edad: "24",
      nacionalidad: "Mexico",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player3: {
      id: "Zxca",
      name: "Amilkar Fhelipe Layme Bonifacio",
      edad: "22",
      nacionalidad: "Peru",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player4: {
      id: "SexyeYogye",
      name: "Eddy Arnold Orosco Prada",
      edad: "24",
      nacionalidad: "Peru",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
    player5: {
      id: "Drakeel",
      name: "Isaac Zavaleta",
      edad: "26",
      nacionalidad: "Ecuador",
      rol: "Player",
      redes: [
        "https://twitter.com/",
        "https://instagram.com/",
        "https://twitch.com/",
      ],
    },
  },
};

// display team
const btns = document.querySelectorAll(".equipos");
const showTeam = document.querySelector(".team-container");
const eTitle = document.querySelector(".team-title");
const playerId = document.querySelector(".id-player");
const playerName = document.querySelector(".name-player");
const playerAge = document.querySelector(".edad-player");
const playerNacionalidad = document.querySelector(".nacionalidad-player");
const playerRol = document.querySelector(".rol-player");
const playerTwitter = document.getElementById("twitter-player").href;
const playerInstagram = document.getElementById("insta-player");
const playerTwitch = document.getElementById("twitch-player");
const teamBtns = document.querySelectorAll(".team-btns");

btns.forEach((item) => {
  item.addEventListener("click", function (e) {
    const equipoId = item.id;
    eTitle.innerHTML = equipos[equipoId].equipo;
    playerId.innerHTML = equipos[equipoId].couch.id;
    playerName.innerHTML = equipos[equipoId].couch.name;
    playerAge.innerHTML = equipos[equipoId].couch.edad;
    playerNacionalidad.innerHTML = equipos[equipoId].couch.nacionalidad;
    playerRol.innerHTML = equipos[equipoId].couch.rol;
    showTeam.classList.add("show-teams");
    teamBtns.forEach((item) => {
      item.addEventListener("click", function (e) {
        let playerItem = item.id;
        playerId.innerHTML = equipos[equipoId][playerItem].id;
        playerName.innerHTML = equipos[equipoId][playerItem].name;
        playerAge.innerHTML = equipos[equipoId][playerItem].edad;
        playerNacionalidad.innerHTML =
          equipos[equipoId][playerItem].nacionalidad;
        playerRol.innerHTML = equipos[equipoId][playerItem].rol;
      });
    });
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
