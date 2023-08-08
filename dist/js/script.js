//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
      header.classList.remove('navbar-fixed');  
    }
}

//hamburg
const hamburg = document.querySelector('#hamburg');
const navMenu = document.querySelector('#nav-menu');

hamburg.addEventListener('click', function() {
    hamburg.classList.toggle('hamburg-active');
    navMenu.classList.toggle('hidden');
});