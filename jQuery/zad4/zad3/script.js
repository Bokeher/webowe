$(document).ready(function() {
    const box = $("#box");

    function move(direction) {
        if(direction > 4) return null;

        let marginTop = box.css("margin-top");
        let marginLeft = box.css("margin-left");

        marginTop = +marginTop.substring(0, marginTop.length-2)
        marginLeft = +marginLeft.substring(0, marginLeft.length-2)

        const animationSpeed = 200; // ms
        let dist = "";
        
        if (direction == 1) {
            // up
            dist = "-=20px"
            if(marginTop < 20) dist = "0px"
        
            box.animate({
                "margin-top": dist,
            }, animationSpeed)
        } else if (direction == 2) {
            //rigth
            dist = "+=20px"
            if(marginLeft > 1220) dist = "1240px"

            box.animate({
                "margin-left": dist,
            }, animationSpeed)
        } else if (direction == 3) {
            //down
            dist = "+=20px";

            if(marginTop > 820) dist = "840px"
            box.animate({
                "margin-top": dist,
            }, animationSpeed)
        } else {
            //left
            dist = "-=20px";

            if(marginLeft < 20) dist = "0px"

            box.animate({
                "margin-left": dist,
            }, animationSpeed)
        }
    }

    $(".moveBox").on("click", function() {
        const direction = $(this).attr("id").substring(0, 1);
        move(direction);
    });

    $("#turn").on("click", function() {
        const angle = +box.getRotateAngle();
        box.rotate(angle + 90);
    });
});