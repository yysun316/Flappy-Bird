var block = document.getElementById('block');
var hole = document.getElementById('hole');
var character = document.getElementById('character');

hole.addEventListener('animationiteration', () => {
    // hole.style.top will be range = [-150, -450]
    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
});