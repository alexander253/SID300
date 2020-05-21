function myFunction() {
  var x = document.getElementById("hcontent");
  if (x.style.display === "none")
    {x.style.display = "block";}
   else {
    x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("hcontent2");
  if (x.style.display === "none")
    {x.style.display = "block";}
   else {
    x.style.display = "none";
  }
}

function myFunction3() {
  var x = document.getElementById("hcontent3");
  if (x.style.display === "none")
    {x.style.display = "block";}
   else {
    x.style.display = "none";
  }

}

function myFunction4() {
  var x = document.getElementById("hcontent4");
  if (x.style.display === "none")
    {x.style.display = "block";}
   else {
    x.style.display = "none";
  }

}

function navFunc() {
  var x = document.getElementById("nav_menu");
  if (x.style.display === "none")
    {x.style.display = "block";}
   else {
    {x.style.display = "none";}
  }
}


var d = document
var w = window
w.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (d.body.scrollTop > 20 || d.documentElement.scrollTop > 20) {
    d.getElementById("backtotop").style.display = "block";
  } else {
    d.getElementById("backtotop").style.display = "none";
  }
}

function topFunction() {
  d.body.scrollTop = 0;
  d.documentElement.scrollTop = 0;
}
