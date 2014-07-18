# angular-speakingurl

[Speaking URL](https://github.com/pid/speakingurl) with AngularJS

## How do I add this to my project?

You can download angular-speakingurl by:

* (prefered) Using bower and running `bower install angular-speakingurl --save`
* Downloading it manually by clicking [here to download development unminified version](https://raw.github.com/zappan/angular-speakingurl/master/src/angular-speakingurl.js)


## How to use angular-speakingurl

This module exposes a `$speakingurl` service that can be used in the code,
and a `getSlug` filter that can be used in templates directly:

```
MyAngularModule = (function () {
  var myModule = angular.module('my.module', ['angular-speakingurl']);

  myModule.controller('MyController', function ($scope, $speakingurl, model) {
    $scope.model   = model;
    $scope urlSlug = $speakingurl.getSlug(model.name);
  });
```

```
<ul>
  <li ng-repeat="user in users">
    <a href="/user/{{ user.fullName | getSlug }}" ng-bind="user.fullName"></a>
  </li>
</ul>
```
