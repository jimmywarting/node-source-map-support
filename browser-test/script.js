// Generated by CoffeeScript 1.7.1
(function() {
  var e, foo;

  sourceMapSupport.install();

  foo = function() {
    throw new Error('foo');
  };

  try {
    foo();
  } catch (_error) {
    e = _error;
    if (/\bscript\.coffee\b/.test(e.stack)) {
      document.body.appendChild(document.createTextNode('Test passed'));
    } else {
      document.body.appendChild(document.createTextNode('Test failed'));
      console.log(e.stack);
    }
  }

}).call(this);

//# sourceMappingURL=script.map