$(function() {
    $("#carousel").carousel({
        ride: true
    })

    $("#btn").on("click", function() {
        $("#carousel").carousel("dispose")
        
        $("#carousel").carousel({
            ride: true,
            interval: 1
        })
    })
})