/**
* Written by @Pinjasaur.
*
* Last updated 3/15/2015.
*/
(function(global) {
  var Util = {
    version: "0.0.1",
    rot13: function(str) {
      return (str + "").replace(/[a-z]/gi, function(s) {
          return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < "n" ? 13 : -13));
        });
    },
    squish: function(str) {
      return str.replace(/\s+/g, "");
    }
  }

  if (global.Util) {
    throw new Error("Util has already been defined.");
  } else {
    global.Util = Util;
  }
})(typeof window === "undefined" ? this : window);