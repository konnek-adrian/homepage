const firstname = "Ardianek";
const age = 26;
console.log("Noo heeeeeeej");
console.log(firstname);
console.log(age);
console.log(`Siema, nazywam się ${firstname} i mam ${age} lat.`);

const heading = document.querySelector(".main__heading--js");
heading.innerHTML = `Siema, nazywam się ${firstname} i mam ${age} lat.`;
const emptyParagraph = document.querySelector(".week-summary__description--js");
emptyParagraph.innerHTML = `Nawet uzupełniłem treść javascriptem!`;

function greet(age, firstname) {
  console.log(`Siema, nazywam się ${firstname} i mam ${age} lat.`);
}

greet(age, "Adrian");

function createContent(querySelectorContent, content) {
  let element = document.querySelector(querySelectorContent);
  element.innerHTML += content;
}
createContent('.week-summary__description--js', 'Witaj świecie!');

createContent('.about__heading--js', 'Podmianka JS!');



const deathStar = {
  diameter: 120000,
fire: (target) => {
  console.log(`${target} destroyed`)
},
isOperating: true,
levels: 357,
name: 'Death Star',
population: 10000,
}

console.log(deathStar)

const myClick = () => {
  const heading = document.querySelector(".learning__heading");
heading.innerHTML = `Ile chcę się uczyć?`;
}
const button = document.querySelector('.action--js');
button.addEventListener('click', myClick);