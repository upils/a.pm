$(document).foundation()
$(document).on("keypress", function (e) {
    console.log(String.fromCharCode(e.which));
});


// Let the user download the resulting file
function downloadFile(text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileBuilder()));
  element.setAttribute('download', 'perso.SC2Hotkeys');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


// Store the conf file in localStorage as a stringify JSON
function fileGeter() {
  var selectedFile = document.getElementById('fileSelector').files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    var text = event.target.result;
    var lines = text.split(/[\r\n]+/g);
    var ability;
    var key;
    var pair;
    var confFile= {};

    for(var i = 0; i < lines.length; i++) {
      pair = lines[i].split(/=/g);
      ability = pair[0];
      key = pair[1];
      if (!(/\[.+\]/.test(ability)) && ability) {
        var ability = pair[0];
        confFile[ability] = pair[1];
      }
    }
    localStorage.setItem("confFile",JSON.stringify(confFile));
    console.log(confFile);
  };
  reader.readAsText(selectedFile, 'UTF-8');
}


function fileBuilder(){
  var retrievedConf = JSON.parse(localStorage.getItem("confFile"));
  var content = "[Settings]\r\n\r\n[Hotkeys]";

  for (var ability in retrievedConf) {
    content = content + "\r\n" + ability + "=" + retrievedConf[ability]
  }
  console.log(content);
  return content;
}

