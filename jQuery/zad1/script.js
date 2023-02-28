$(document).ready(() => {
    $('.witcher').last().after("<li class='witcher'>Nieznane</li>");
    
    $('#stopka').css({
        "background-color": "blue",
    });
    
    $('#naglowek').css({
        "background-color": "green",
    });
    
    $('.witcher').even().css({
        "font-weight": "bold",
    });
    
    $('.witcher:gt(2)').css({
        "background-color": "red",
    });
    
    $('.witcher').css({
        "margin-bottom": "2px",
    });
});