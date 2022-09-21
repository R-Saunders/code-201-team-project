window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 1) {
    document.getElementById("marketplace-logo").style.width = "0";
    document.getElementById("marketplace-logo").style.height = "0";
  } else {
    document.getElementById("marketplace-logo").style.width = "120px";
    document.getElementById("marketplace-logo").style.height = "120px";
  }
}

