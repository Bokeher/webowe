$(document).ready(() => {
    $("#dodaj").on("click", () => {
        if(!$("#lista").length) $("#dodaj").after("<ol id='lista'></ol>")
        $("#lista").append("<li>LISTA</li>")
    })

})