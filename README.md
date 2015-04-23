![mapular logo](http://alliants.github.io/mapular/images/mapular-logo.png)
# Mapular
[![Build Status](https://travis-ci.org/Alliants/mapular.svg?branch=master)](https://travis-ci.org/Alliants/mapular)

A simple Angular module for generating device specific map urls for responsive sites.

Currently supports generating map urls from coordinates.

### Example
```
Mapular.url( { latitude: 50.839766, longitude: -1.148695} )
```
Would return `'//maps.apple.com/?ll=50.839766,-1.148695'` on an iOS device and `//maps.google.com/maps?q=50.839766,-1.148695'` on an Android 4.x device.

The default scheme for unknown devices is `//maps.google.com/maps?q=x,y'`

### Whitelisting URL schemes
You will need to add the `geo` and `bingmaps` url scheme to your href whitelist:

```javascript
.config(['$httpProvider', '$locationProvider', '$compileProvider',
  function ($httpProvider, $locationProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|geo|tel|bingmaps):/);
  }]);
```

### Demo
A demo of the module can be found at [alliants.github.com/mapular](https://alliants.github.com/mapular)


### Licence
Mapular is available under the MIT license.
