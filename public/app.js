var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navMain").style.top = "0";
  } else {
    document.getElementById("navMain").style.top = "-72px";
  }
  prevScrollpos = currentScrollPos;
}

console.log('app js connected');