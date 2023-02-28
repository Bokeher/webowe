$(document).ready(function(){
    $(".radioBtn").change(function() {
        const circle = $("#circle");
        const color = $(this).attr("id");

        if(circle.is(":hidden")) circle.show();
        
        circle.css("color", color);
    });
});
