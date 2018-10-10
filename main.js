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
function back(){
  if (document.getElementById('colour').style.backgroundColor === "black"){
    document.getElementById('colour').style.backgroundColor = "lightgrey";
    document.getElementById('editor').style.backgroundColor = "white";
    document.getElementById('editor').style.color = "black";
    document.getElementById('myform').style.color = "black";
    document.getElementById('live-viewer').style.color = "black";
    document.getElementById('live-viewer').style.backgroundColor = "white";
  }
  else{
    document.getElementById('colour').style.backgroundColor = "black";
    document.getElementById('editor').style.backgroundColor = "dimgrey";
    document.getElementById('editor').style.color = "white";
    document.getElementById('myform').style.color = "white";
    document.getElementById('live-viewer').style.color = "white";
    document.getElementById('live-viewer').style.backgroundColor = "dimgrey";
  }
}
