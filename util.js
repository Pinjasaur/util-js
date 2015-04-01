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

    /**
    * Encodes/decodes a string based on the rot13 cipher.
    *
    * Acquired from http://phpjs.org/functions/str_rot13/.
    */
    rot13: function(str) {
      return (str + "").replace(/[a-z]/gi, function(s) {
          return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < "n" ? 13 : -13));
        });
    },

    /**
    * Removes all whitepsace from a string.
    */
    squish: function(str) {
      return str.replace(/\s+/g, "");
    },

    /**
    * "Engrishifies" a string by trimming and truncating excess whitespace.
    */
    engrishify: function(str) {
      return str.trim().replace(/\s+/g, " ");
    },

    /**
    * Returns a random hexadecimal color value.
    *
    * Optional parameter of "#" if an octothorpe needs to be appended to the hex output.
    *
    * Acquired from http://www.paulirish.com/2009/random-hex-color-code-snippets/.
    */
    randHexColor: function(hash) {
      return ((hash && hash === "#") ? "#" : "") + Math.floor(Math.random()*16777216).toString(16);
    },

    /**
    * Returns a random integer between a given min and max value.
    */
    randInt: function(min, max) {
      if (min && typeof min === "number" && max && typeof max === "number") {
        return Math.floor(Math.random()*(max - min + 1) + min);
      } else {
        throw new Error("Missing parameter(s) or parameter(s) are of wrong data type.");
      }
    },

    /**
    * Returns the factorial of a specified number (-1 if the number is less than 0).
    */
    fact: function(num) {
      if (num < 0) return -1;
      if (num === 0) return 1;
      return num*this.fact(num-1);
    },

    /**
    * Escapes RegEx special (meta) characters.
    *
    * Acquired from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters.
    */
    escRegEx: function(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    },

    /**
    * Find and replace all instances of a pattern in a string.
    */
    repAll: function(str, find, rep) {
      return str.replace(new RegExp(escRegEx(find), "g"), rep);
    }
  };

  if (global.Util) {
    throw new Error("Util has already been defined.");
  } else {
    global.Util = Util;
  }
})(typeof window === "undefined" ? this : window);