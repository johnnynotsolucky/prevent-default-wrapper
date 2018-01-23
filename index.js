function preventDefault(obj) {
  if (obj === null || obj === undefined) {
    return obj;
  }

  function handleEvent(e) {
    if(isPreventDefaultAvailable(e) && isPreventDefaultAFunction(e)) {
      e.preventDefault();
      return true;
    }
  }

  function isPreventDefaultAvailable(e) {
    return e && !!e.preventDefault;
  }

  function isPreventDefaultAFunction(e) {
    return typeof e.preventDefault === 'function';
  }

  var result = false;

  if(handleEvent(obj)) {
    result = true;
  } else if(typeof obj === 'function') {
    result = function(){
    	for(var i = 0; i < arguments.length; i++) {
      	handleEvent(arguments[i]);
      }

      return obj.apply(this, arguments);
    };
  }

  return result;
}

module.exports = preventDefault;
