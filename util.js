/**
* Keyboarded by @Pinjasaur.
*
* Thrown together with tears of dispair, coffee, StackOverflow, and other interwebs thingies.
*
* Long live #LordGaben.
*/
(function(global) {
  var Util = {
    version: "0.0.1",
    author: "@Pinjasaur",
    rot13: function(str) {
      return (str + "").replace(/[a-z]/gi, function(s) {
          return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < "n" ? 13 : -13));
        });
    },
    squish: function(str) {
      return str.replace(/\s+/g, "");
    },
    engrishify: function(str) {
      return str.trim().replace(/\s+/g, " ");
    },

    /**
    * Acquired from http://www.paulirish.com/2009/random-hex-color-code-snippets/.
    */
    randHex: function() {
      return "#" + Math.floor(Math.random()*16777216).toString(16);
    },
    randInt: function(min, max) {
      if (min && typeof min === "number" && max && typeof max === "number") {
        return Math.floor(Math.random()*(max - min + 1) + min);
      } else {
        throw new Error("Missing parameter(s) or parameter(s) are of wrong data type.")
      }
    }
  }

  if (global.Util) {
    throw new Error("Util has already been defined.");
  } else {
    global.Util = Util;
  }
})(typeof window === "undefined" ? this : window);