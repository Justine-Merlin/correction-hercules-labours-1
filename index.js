// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

let round = 1;
while (heracles.isAlive() && nemean.isAlive()) {

  heracles.fight(nemean);
  console.log(`round ${round}: Heracles se bat contre Nemean ! PV Nemean : ${nemean.life}`)

  nemean.fight(heracles);
  console.log(`round ${round}: Nemean se bat contre Heracles ! PV Heracles : ${heracles.life} `)

  round = round + 1;
}

if (heracles.life === 0) {
  console.log(`Vainqueur 🏆 : ${nemean.name} ! Perdant 💀 : ${heracles.name}`)
} else {
  console.log(`Vainqueur 🏆 : ${heracles.name} ! Perdant 💀 : ${nemean.name}`)
}