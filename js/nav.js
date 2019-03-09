const menu = document.getElementById('menu');
const exit = document.getElementById('exit-btn');
const nav = document.getElementById('nav');

menu.addEventListener('click', function (e)  {
    nav.classList.toggle('hide-mobile');
});

exit.addEventListener('click', function (e)  {
    nav.classList.add('hide-mobile');
});