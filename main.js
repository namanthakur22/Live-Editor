function ref(){
  var textcontent = document.getElementById('editor').value;
  document.getElementById('live-viewer').srcdoc = textcontent;
  document.getElementById("hide").style.display="none";
}
  
function cbChanged(checkboxElem) {
  if (checkboxElem.checked) {
       document.getElementById('ree').disabled = true;
  } else {
      document.getElementById('ree').disabled = false;
  }
}
