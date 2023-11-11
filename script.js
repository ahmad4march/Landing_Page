window.onload = function() {
    setTimeout(function() {
      var navItems = document.querySelectorAll('.nav *');
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].style.textDecoration = 'underline';
        navItems[i].style.color = 'grey';
      }
    }, 1);
  };
  