const changeDaSpan = document.querySelector('span.mess-with-me');
changeDaSpan.style.fontSize = '40px'

const changeDaPara = document.querySelector('p.mess-with-me');
changeDaPara.style.backgroundColor = 'green';

const hideDaimg = document.querySelector('img#hide-me');
hideDaimg.style.display = 'none';

const wideosaur = document.querySelector('img#triceratops');
wideosaur.style.width = '324px';

const orangeSpan = () => {
    changeDaSpan.style.color = 'orange'
}
changeDaSpan.addEventListener('click', orangeSpan);

const redBorder = () => {
    wideosaur.style.border = ' solid red 10px'
}
wideosaur.addEventListener('click', redBorder);


const featherBoi = document.querySelector('img#feathers');
const feathersaur = () => {
    featherBoi.style.opacity = '0.5';
}
featherBoi.addEventListener('click', feathersaur);

const btn = document.querySelector('button');
const dinoFam = document.querySelector('section#row');
const btnToggle = () => {
    dinoFam.style.backgroundColor == '' ? 
    dinoFam.style.backgroundColor = 'purple' : 
    dinoFam.style.backgroundColor = ''
}
btn.addEventListener('click', btnToggle)

const notoriusBIG = document.querySelector('#biggify');
const bigPapa = () => {
    notoriusBIG.style.width === '' ?
    notoriusBIG.style.width = '200px' :
    notoriusBIG.style.width = ''


}
notoriusBIG.addEventListener('mouseover', bigPapa)
notoriusBIG.addEventListener('mouseout', bigPapa)