function preventDefault(obj) {
  function handleEvent(e) {
    if(e && e.preventDefault) {
      e.preventDefault();
      return true;
    }
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