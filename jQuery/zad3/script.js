$(document).ready(function() {
    const imgSrcs = [
        "zdj1.jpg",
        "zdj2.jpg",
        "zdj3.jpg",
        "zdj4.jpg",
        "zdj5.jpg",
        "zdj6.jpg"
    ];

    // on click shake
    $(".gablota").on("click", function() {
        $(this).effect("shake");
    });

    // on dblclick change img
    $(".gablota").on("dblclick", function() {
        if($("#zdjecie").is(":hidden")) $("#zdjecie").slideDown();

        const clickedImageSrc = $(this).attr("src");
        $("#wybraneZdjecie").attr("src", clickedImageSrc);
    });

    // close 
    $("#zamkniecie").on("click", () => {
        $("#zdjecie").slideUp();
    });
    // close 
    $("#disabling").on("click", () => {
        $("#zdjecie").slideUp();
    });

    //changing images with buttons
    $("#lewo").on("click", () => {
        changeImage(false);
    });

    $("#prawo").on("click", () => {
        changeImage(true);
    });

    // function for changing images (1 to right / 1 to left)
    function changeImage(right) {
        const currSrc = $("#wybraneZdjecie").attr("src");
        let i = 0;
        for (; i < imgSrcs.length; i++) {
            const src = `images/${imgSrcs[i]}`;
            if(currSrc == src) break;
        }
        
        if(right) return setImg(i+1);
        return setImg(i-1);
    }

    // set src of img 
    function setImg(i) {
        const leng = imgSrcs.length;
        if(i == leng) i = 0;
        if(i == -1) i = leng - 1;

        $("#wybraneZdjecie").attr("src", `images/${imgSrcs[i]}`)
    }
});