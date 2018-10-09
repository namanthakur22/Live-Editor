function ref(){
  var textcontent = document.getElementById('editor').value;
  if (document.getElementById('reem').style.display ==="none"){
  document.getElementById('live-viewer').srcdoc = textcontent;
  }
}
function refr(){
  var textcontent = document.getElementById('editor').value;
  document.getElementById('live-viewer').srcdoc = textcontent;
}
  
function cbChanged(){
    if (document.getElementById('reem').style.display === "none") {
      document.getElementById("reem").style.display = "block";
    }
    else{
      document.getElementById("reem").style.display = "none";
    }
  }
