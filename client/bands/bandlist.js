/**
 * Created by gabrielkunkel on 10/14/15.
 */
"use strict";

module.exports = function(app) {
  app.factory('bandList', function(){
    return [
      { name: 'Mirella', formed: 1983 },
      { name: 'Bon Jovi', formed: 1983 }
    ];
  });
};