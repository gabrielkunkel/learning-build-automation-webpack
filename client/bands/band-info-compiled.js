/**
 * Created by gabrielkunkel on 10/14/15.
 */
"use strict";

module.exports = function (app) {
  app.directive('bandInfo', function (bandList) {
    return {
      template: '<h1 ng-repeat="band in bands">{{band.name}} - {{band.formed}}</h1>',
      restrict: 'E',
      controller: function controller($scope) {
        $scope.bands = bandList;
      }
    };
  });
};

//# sourceMappingURL=band-info-compiled.js.map