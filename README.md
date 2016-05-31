# prevent-default-wrapper

Wraps an event or an event handler and calls `preventDefault()`

# Installation

    npm install prevent-default-wrapper

# Usage

    $('a').click(preventDefault(function(e) {
      // ...
    }));
    
    $('a').click(function(e) {
      preventDefault(e);
      
      // ...
    });
