function pageLoad() {

    document.querySelector('.hamburger-menu').onclick = () => {
        console.log(document.querySelector('.menu-links'));

        document.querySelector('#ham-bar-1').classList.toggle('transform');
        document.querySelector('#ham-bar-2').classList.toggle('transform');
        document.querySelector('#ham-bar-3').classList.toggle('transform');

        document.querySelector('.menu-links').classList.toggle('drop-down-menu');
    }

    document.querySelector('body').onscroll = () => {
        if (document.documentElement.scrollTop > 50) {
            document.querySelector('nav').classList.add('solid-background');
        } else {
            document.querySelector('nav').classList.remove('solid-background');
        }
    }
    
}