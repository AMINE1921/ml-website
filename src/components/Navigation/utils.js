import $ from 'jquery';

// function for the hamburger nav
export const handleCollapse = (event) => {
    event.preventDefault();
    if( $('body').hasClass('menu-show') ) {
        $('body').removeClass('menu-show');
        $('#main-nav > .js-nav-toggle').removeClass('show');
    } else {
        $('body').addClass('menu-show');
        setTimeout(function(){
            $('#main-nav > .js-nav-toggle').addClass('show');
        }, 900);
    }
}

// function for link detection
export const isCurrentUrl = (url) => {
const { hash } = document.location;
return Array.isArray(url) ? url.some(u => hash === (u)) : hash === (url);
}