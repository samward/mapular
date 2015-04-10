'use-strict';

describe('mapular', function () {
  var mapular;
  var query = { latitude: 50.839766, longitude: -1.148695 }

  function loadMapular(userAgentString) {
    module('mapular');
    inject(['Mapular', function (Mapular) {
      mapular = new Mapular(userAgentString);
    }]);
  };

  describe("on a Windows Phone 7.5 device", function () {
    beforeEach(function () {
      loadMapular("Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)");
    });

    it('should return a bingmaps: url', function () {
      // https://msdn.microsoft.com/en-us/library/windows/apps/xaml/dn614996.aspx
      expect(mapular.url(query)).toEqual(
        "bingmaps:?collection=point.50.839766_-1.148695");
    });
  });

  describe("on a iOS 8 iPhone", function () {
    beforeEach(function () {
      loadMapular("Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/8.0 Mobile/11A465 Safari/9537.53");
    });

    it('should return an Apple Maps url', function () {
      // https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
      expect(mapular.url(query)).toEqual(
        '//maps.apple.com/?ll=50.839766,-1.148695');
    });
  });

  describe("on a Android 5 device", function () {
    beforeEach(function () {
      loadMapular("Mozilla/5.0 (Linux; Android 5.0; Nexus 5 Build/LPX13D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.102 Mobile Safari/537.36");
    });

    it('should use the RFC 5870 geo: url scheme', function () {
      expect(mapular.url(query)).toEqual('geo:50.839766,-1.148695');
    });
  });

  describe("on a Android 4 device", function () {
    beforeEach(function () {
      loadMapular("Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30");
    });

    it('should return the a google maps url', function () {
      expect(mapular.url(query)).toEqual('//maps.google.com/maps?q=50.839766,-1.148695');
    });
  });

  describe("an unknown device", function () {
    beforeEach(function () {
      loadMapular("Gorilla/80.0 (BeOS; U; BEOS .0.3; ko-kr; Tribble Build/IML74K)");
    });

    it('should return the a google maps url', function () {
      expect(mapular.url(query)).toEqual('//maps.google.com/maps?q=50.839766,-1.148695');
    });
  });

});
