(function (window, angular, undefined) {
  var module = angular.module('angular-speakingurl', []);

  module.filter('getSlug', function ($speakingurl) {
    return function (value, format) {
      return (typeof value === 'undefined' || null === value) ? '' : $speakingurl.getSlug(String(value));
    };
  });

  module.provider('$speakingurl', function () {

    this.$get = ['$window', function ($window) {
      return {
        getSlug: $window.getSlug
      };
    }];
  });
})(this, this.angular, void 0);
