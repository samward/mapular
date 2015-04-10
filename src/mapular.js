'use-strict';

(function (angular) {
  angular.module('mapular', [])
    .factory('Mapular', [
      function () {
        var Mapular = function (userAgentString) {
          this._userAgent = userAgentString || navigator.userAgent;
        };

        Mapular.prototype.url = function (args) {
          var url;
          var ua = parseUserAgent(this._userAgent);

          if (agentSupportsGeoIntent(ua)) {
            url = 'geo:' + args.latitude + ',' + args.longitude;
            return url;
          }

          switch(ua.platform.name) {
            case 'ios':
              url = '//maps.apple.com/?ll=' + args.latitude + ',' + args.longitude;
              break;
            case 'windows-mobile':
              url = 'bingmaps:?collection=point.' + args.latitude + '_' + args.longitude;
              break;
            default:
              url = '//maps.google.com/maps?q=' + args.latitude + ',' + args.longitude;
          }

          return url;
        };

        function parseUserAgent(userAgentString) {
          return {
            string: userAgentString,
            platform: userAgentPlatform(userAgentString),
          };
        };

        function userAgentPlatform(userAgentString) {
          if (/Android/i.test(userAgentString)) {
            return { name: 'android', version: getAndroidVersionFromString(userAgentString) };
          } else if (/iPhone|iPad|iPod/i.test(userAgentString)) {
            return { name: 'ios' };
          } else if (/IEMobile/i.test(userAgentString)) {
            return { name: 'windows-mobile' };
          } else {
            return { name: 'unknown' };
          }
        };

        function agentSupportsGeoIntent(ua) {
          if (ua.platform.name === 'android' && ua.platform.version  >= 5) {
            return true;
          }
          return false;
        };

        function getAndroidVersionFromString(userAgentString) {
          var match = (userAgentString.toLowerCase()).match(/android\s([0-9\.]*)/);
          var version = match ? match[1] : 0;
          return parseFloat(version);
        };

        function getAndroidVersion(ua) {
          return ua.platform.version || getAndroidVersionFromString(ua.string);
        }

        return Mapular;
      }
])})(angular);
