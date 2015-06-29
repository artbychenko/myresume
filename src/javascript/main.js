var $ = global.$ = global.jQuery = require('jquery/dist/jquery');

// folder contains href
var links = require('images_links/data.json');

var Slider = require('app/app');

$(document).ready(function () {

// add hover effect for top logo
(function () {
    var $header_logo = $('header .header_logo');
    $('header .logo_img').hover(function() {
        $header_logo.css({
            color: '#6387bd',
            'background-color': '#22539d'
        });
    },function(){
        $header_logo.css({
            color: '#676b71',
            'background-color': '#282a2d'
        });
    });
}());

// add fade effect for tile images
(function(){
    $('.gallery-bg').hover(function(){
        $(this).css({
            opacity: 1
        });
        $('.gallery-title span', this).css({
            opacity: 1
        });
    },function(){
        $(this).css({
            opacity: 0.7
        });
        $('.gallery-title span', this).css({
            opacity: 0
        });
    });
}());


// initialize tiles with countries, use constructor Slider
(function (countries) {
    $('.gallery-bg').each(function(ix,val){
        if (val) {
            var country = val.textContent || val.innerText;
            if (country && countries[country] && !(Slider.gallery[country])) {
                val.parentNode.id = country;
                $(val).empty();
                Slider.gallery[country] =  new Slider('#'+country, countries[country]);
                Slider.gallery[country].init();
            }
        }
    });
})(links);

});