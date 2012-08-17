// ==UserScript==
// @name        Auto Complete Priority for Basecamp Classic
// @description When typing [h [w [c or [s it will auto complete to [HOT] [WARM] [COLD] or [*]
// @match       https://*.basecamphq.com/*
// @include     https://*.basecamphq.com/*
// @version     0.1
// @author      Kris Handley
// @homepage    http://twitter.com/Kris_0_o
// ==/UserScript==
(function(){
  document.body.addEventListener('keyup', function(e){
    if (e.target.className.match(/(submits_on_return|new_item_field)/)) {
      var v = e.target.value,
          two = v.substring(0,2),
          regex = /^\[(.*?)\[(.*?)\]/,
          override = v.match(regex),
          replacements = {
            'c':'[COLD]',
            'w':'[WARM]',
            'h':'[HOT]',
            's':'[*]'
          };

      if (override == null){
        var o = two.replace('[', '');

        if (o in replacements) {
          e.target.value = v.replace(/^\[+\w/, replacements[o] + ' ');
        }
      } else {
        var o = override[1].replace(' ', '');

        if (o in replacements) {
          e.target.value = v.replace(regex, replacements[o]);
        }
      }
    }
  } ,false);
})();
