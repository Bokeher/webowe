$(document).ready(function() {
    const box = $("#box");

    function move(direction) {
        if(direction > 4) return null;

        let marginTop = box.css("margin-top");
        let marginLeft = box.css("margin-left");

        marginTop = +marginTop.substring(0, marginTop.length-2)
        marginLeft = +marginLeft.substring(0, marginLeft.length-2)

        const animationSpeed = 200; // ms

        if (direction == 1) {
            // up
            box.animate({
                "margin-top": "-=20px",
            }, animationSpeed)
        } else if (direction == 2) {
            //rigth
            box.animate({
                "margin-left": "+=20px",
            }, animationSpeed)
        } else if (direction == 3) {
            //down
            box.animate({
                "margin-top": "+=20px",
            }, animationSpeed)
        } else {
            //left
            box.animate({
                "margin-left": "-=20px",
            }, animationSpeed)
        }
    }

    $(".moveBox").on("click", function() {
        const direction = $(this).attr("id").substring(0, 1);
        move(direction);
    });

    $("#turn").on("click", function() {
        const angle = +box.getRotateAngle();
        box.rotate(angle + 30);
    });
});