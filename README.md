![mapular logo](http://alliants.github.io/mapular/images/mapular-logo.png)
# Mapular

[![Build Status](https://travis-ci.org/Alliants/mapular.svg?branch=master)](https://travis-ci.org/Alliants/mapular)

A simple Angular module for generating device-specific map urls. Allows responsive sites to open the device-native maps app from your Angular app.  Mapular currently supports generating map urls from coordinates.  Desktop browsers will be sent to the Google Maps website.

## Demo
A demo of the module can be found at [alliants.github.com/mapular](https://alliants.github.com/mapular)

## Example
```
<a ng-href="{{ mapsUrl({ latitude: property.latitude, longitude: property.longitude }) }}">My Location</a>
```
Would render as `<a href="//maps.apple.com/?ll=50.839766,-1.148695">My Location</a>` on an iOS device, which would open in the Apple Maps app when clicked.

### Default behaviour

| Platform    | Version | Map provider         |
|:--------    |:-------:|:------------         |
| iOS       | any     | Apple Maps           |
| Android     | >= 5.0  | RFC5870 `geo:`       |
| Android         | < 5.0   | Google Maps          |
| Windows Phone   | any     | Bing Maps `bingmaps:`|
| Desktop     | all     | Google Maps          |

The default scheme for unknown devices is `//maps.google.com/maps?q=x,y`

## Installation
### Bower component
Mapular is available via [bower](http://bower.io/), simply

```bower install mapular --save```

Or explicity add Mapular to your `bower.json` dependencies:

```json
"dependencies": {
  "mapular": "1.x.x",
}
```

### Include the component
Add Mapular to your page template, somewhere after Angular

```html
<script src="/bower_components/angular/angular.js"></script>
<script src="/bower_components/mapular/src/mapular.js"></script>
```

### Whitelisting URL schemes
You will need to add the `geo` and `bingmaps` url scheme to your href whitelist to prevent Angular prefixing the url with `unsafe:`

```javascript
.config(['$compileProvider',
  function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|geo|tel|bingmaps):/);
    // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
  }]);
```

## Contributing and Issues
The list of supported user agents is not exhastive but does provide a sensible baseline.  Any contributions to expand the list of supported user agents in the test suite or to cover edge cases are welcome.

## Licence
Mapular is available under the MIT license.
