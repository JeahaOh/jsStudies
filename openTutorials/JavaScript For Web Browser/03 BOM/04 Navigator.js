/**
 * 이전에 Netscape 와 IE 브라우져가 경쟁을 하면서 무질서하게 기능을 넣음.
 * 이로 인해 같은 기능을 각기 다른 브라우져에서 다른 코드로 작성해야하는 문제가 생김.
 * 그래서 국제 표준화를 위해 W3C, ECMA가 출현.
 * 세밀한 부분까지는 표준화 할 수 없어서 아직 다른 부분이 남아 있고,
 * 이런 현상을 '크로스 브라우징'(cross browsing)이라고 부르고,
 * 각기 다른 브라우져의 호환성을 확인하기 위해 등장한게 'Navigator' 객체임.
 * 
 * 브라우져 상에서 아래 명령을 통해 이 객체의 모든 프로퍼티를 확인할 수 있음.
 */
console.dir(navigator);

/**
 * appName    : 브라우져의 이름
 * appVersion : 브라우져 버젼
 * userAgent  : 브라우져가 서버측으로 전송하는 USER-AGENT HTTP HEADER의 내용.
 * platform   : 브라우져가 작동하고 있는 운영체제에 대한 정보.
 * 
 * 모든 부라우져에 대응하는 것은 쉬운 일이 아니므로 아래와 같은 기능 테스트를 하는것이 선호 됨.
 * 아직 이해 할 수 없으니 이런게 있다는것만 알고 지나가도록 하자.
 */
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
 
    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }
 
      var result = [], prop, i;
 
      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }
 
      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}