$(document).foundation()
$(document).on("keypress", function (e) {
    console.log(String.fromCharCode(e.which));
});


function download() {
  var filename = "test";
  var text = "test\r\ntest";
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
