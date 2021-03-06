// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

function ShowHideSteps(){
	$('#steps').toggleClass('w3-hide');
	var expand = $('#showprocess').attr('aria-expanded');
	if (expand == 'false') {
		$('#showprocess').attr('aria-expanded','true');
		} else {
		$('#showprocess').attr('aria-expanded','false');
	}
}

function openHumane() {
  window.open("https://www.humanesociety.org/resources/information-renters-pets");
}

function openDummy() {
  window.open("socialdummy.html");
}

function dummyDown() {
	$('#dummydown').toggleClass('w3-hide');
}

function ShowHideDiv(Res2) {
        var check = document.getElementById("check");
        check.style.display = Res2.checked ? "block" : "none";
}

var el = document.getElementById('pet');
el.onfocus = showpet;
function showpet() {
window.open('https://www.petsafe.net/learn/essential-tips-for-first-time-pet-owners','mywindow').focus();
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
	  $('#logo').focus();
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}