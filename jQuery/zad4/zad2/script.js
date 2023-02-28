$(document).ready(function() {
    $(".checkBoxes").change(function() {
        const id = $(this).attr("id");
        const checked = $(this).is(":checked");
        const colorsDiv = $("#colors");

        if (checked) {
            colorsDiv.append(`<div class="boxes" id="B${id}"></div>`);
        } else {
            $(`#B${id}`).remove();
        }

        const visibleCount = $(".boxes:visible").length;

        let text = "";
        if(visibleCount == 1) text = `${visibleCount} pole`;
        else if(visibleCount == 0 || visibleCount == 5) text = `${visibleCount} pól`;
        else text = `${visibleCount} pola`;

        $("#selectedCounter").text(text);
    });
});