window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

var typed = new Typed('.typing', {
    strings: ['Бритвин Н. С.', 'Козлов К. А.', 'Иванова А. Д.', 'Акопян К. Л.'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});