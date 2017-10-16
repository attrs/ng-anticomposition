module.exports = angular.module('ngAntiComposition', [])
.config(['$provide', function(provide) {
  provide.decorator('textareaDirective', ['$delegate', function($delegate) {
    angular.extend($delegate[0].link, {
      post: function(scope, element, attr, ctrls) {
        element.on('compositionupdate', function (event) {
          element.triggerHandler('compositionend');
        });
      }
    });
    return $delegate;
  }]);
}])
.config(['$provide', function(provide) {
  provide.decorator('inputDirective', ['$delegate', function($delegate) {
    angular.extend($delegate[0].link, {
      post: function(scope, element, attr, ctrls) {
        element.on('compositionupdate', function (event) {
          element.triggerHandler('compositionend');
        });
      }
    });
    return $delegate;
  }]);
}]);
