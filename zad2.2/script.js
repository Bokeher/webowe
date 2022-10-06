$(document).ready(() => {
    $("#box").change(function() {
        if(this.checked) $("#btn").prop('disabled', false);
        else $("#btn").prop('disabled', true);
    })

    $("#btn").on("click", () => {
        $("#akcept").html("WYSŁANO");
    })
})