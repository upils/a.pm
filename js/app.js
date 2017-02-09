$(document).foundation()

//Get keypress to save them
$(document).on("keypress", function (e) {
    var elem = document.getElementById("keyButton");
    elem.firstChild.data = String.fromCharCode(e.which).toUpperCase();
    console.log(String.fromCharCode(e.which));
    saveKey(String.fromCharCode(e.which));
});

//Populate the left column
$(window).bind("load", function() {
   getUnitsBuildings();
   //console.log(getSelectedMode());
});

// Handle click on units or buildings
$('body').on('click', '.unit-building', function() {
    $(".unit-selector img").removeClass('img-selected');
    $(event.target).addClass('img-selected');
    loadAbilities($(this).attr('id'));
    console.log("test");
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
    //console.log(confFile);
  };
  reader.readAsText(selectedFile, 'UTF-8');
}

//Build the conf file
function fileBuilder(){
  var retrievedConf = JSON.parse(localStorage.getItem("confFile"));
  var content = "[Settings]\r\n\r\n[Hotkeys]";

  for (var ability in retrievedConf) {
    content = content + "\r\n" + ability + "=" + retrievedConf[ability]
  }
  //console.log(content);
  return content;
}

//Get GET parameter from URL
function getAllUrlParams(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0];
    // split our query string into its component parts
    var arr = queryString.split('&');
    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');
      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });
      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];
      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();
      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }
  return obj;
}

// Fill the HTML with units and buildings
function fillUnitsBuildings(responseText) {
  var modeRaceData = JSON.parse(responseText);
  var containerUnits = document.getElementsByClassName("units")[0];
  var containerBuildings = document.getElementsByClassName("buildings")[0];
  //console.log(modeRaceData);
  for(var i = 0; i < modeRaceData[0].units.length; i++) {
    var unit = modeRaceData[0].units[i];
    var unitImg = document.createElement("img");
    unitImg.className += "unit-building";
    unitImg.id = getAllUrlParams().mode + "." + getAllUrlParams().race + "." + unit.name
    unitImg.src = "img/"+getAllUrlParams().mode+"/"+getAllUrlParams().race+"/units/"+unit.img;
    containerUnits.appendChild(unitImg);
  }
  for(var i = 0; i < modeRaceData[1].buildings.length; i++) {
    var building = modeRaceData[1].buildings[i];
    var buildingImg = document.createElement("img");
    buildingImg.className += "unit-building";
    buildingImg.id = getAllUrlParams().mode + "." +getAllUrlParams().race + "." + building.name
    buildingImg.src = "img/"+getAllUrlParams().mode+"/"+getAllUrlParams().race+"/buildings/"+building.img;
    containerBuildings.appendChild(buildingImg);
  }
}

//Get units and buildings list and info to display
function getUnitsBuildings() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      localStorage.setItem("mode.race",this.responseText);
      fillUnitsBuildings(this.responseText);
    }
  };
  xhttp.open("GET", getAllUrlParams().mode+"."+getAllUrlParams().race+".json", true);
  xhttp.send();
}

//Save the selected key in the file
function saveKey(key) {

}

// Load abilities for a unit or building in a specific mode
function loadAbilities(id) {
  var modeRace = JSON.parse(localStorage.getItem("mode.race"));

}
