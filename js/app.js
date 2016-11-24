$(document).foundation()
$(document).on("keypress", function (e) {
    console.log(String.fromCharCode(e.which));
});