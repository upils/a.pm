$(document).foundation()
$(document).on("keypress", function (e) {
    console.log(String.fromCharCode(e.which));
});


function downloadFile() {
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

function fileGeter() {
  var selectedFile = document.getElementById('fileSelector').files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    var text = event.target.result;
    var lines = text.split(/[\r\n]+/g);
    var ability = "";
    var key ="";
    var pair;

    for(var i = 0; i < lines.length; i++) {
      pair = lines[i].split(/=/g);
      ability = pair[0];
      key = pair[1];
      console.log(ability);
      console.log(key);
    }
  };
  reader.readAsText(selectedFile, 'UTF-8');
}