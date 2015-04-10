# Mapular

A simple factory for generating device specific map urls for responsive sites.

Currently supports generating map urls from coordinates.

Example: 
```
Mapular.url( { latitude: 50.839766, longitude: -1.148695} )
```
Would return `'//maps.apple.com/?ll=50.839766,-1.148695'` on an iOS device and `//maps.google.com/maps?q=50.839766,-1.148695'` on an Android 4.x device.

The default scheme for unknown devices is `//maps.google.com/maps?q=x,y'`
