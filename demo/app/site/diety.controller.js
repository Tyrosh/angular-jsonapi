(function() {
  'use strict';

  angular.module('angularJsonapiExample')
    .controller('DietyCtrl', DietyCtrl);

  function DietyCtrl(
    $scope,
    diety
  ) {
    $scope.diety = diety;
  }
})();