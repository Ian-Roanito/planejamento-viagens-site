document.querySelector('a[href="#footer"]').addEventListener('click', function(e) {
    e.preventDefault(); //Impede o salto instântaneo
    const target = document.querySelector('#footer');

    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});