const messageList = ["Vous etes le roi", "Nou avons appris sur vous", "Le soleil apparaitra", "La lune est belle"];
const astroSign = ["Lion", "Dragon", "Balaine", "Soleil", "Lune"];

function getRandomValue(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
 
  function generateRandomMessage() {
    const astrology = getRandomValue(astroSign);
    const message = getRandomValue(messageList);

    return `Votre horoscope pour aujourd'hui : ${astrology}. Citation inspirante : "${message}`;
}

// Génère un message aléatoire
console.log(generateRandomMessage());