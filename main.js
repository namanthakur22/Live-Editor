function ref(){
  var textcontent = document.getElementById('editor').value;
  document.getElementById('live-viewer').srcdoc = textcontent;
}