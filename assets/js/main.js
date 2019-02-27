
var target = false;

$(document).ready(function(){

    function ajaxCall(coords){
        $.ajax({
            url:'https://api.mapbox.com/styles/v1/cindysanhueza/cjs92l7py09ga1fnzpmb8styy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHlzYW5odWV6YSIsImEiOiJCVWVsUTBZIn0.7cZxUC2vdDdYsR9PLUKKGQ',
            method: 'GET'
        }).then(function(data){
            console.log(data);
        });

    }

    $('.collapse-trigger').on('click',function(){
        target=$(this).data('target');
        $('.section-children').removeClass('hidden').addClass('hidden');
        console.log(target);
        $(target).removeClass('hidden');
        var swiperH = new Swiper('.swiper-container-h', {
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-h',
                type: 'bullets',
                clickable: true,
            },
        });
        var swiperV = new Swiper('.swiper-container-v', {
            direction: 'vertical',
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-v',
                type: 'bullets',
                clickable: true,
            },
        });

    });

    $('.eye').on("click", function(){
        $('.overlay').toggleClass('displaynone');
    })




});
