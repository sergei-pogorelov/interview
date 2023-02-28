var x = 23;

(function() {
  var x = 43;

  (function func() {
    x++;

    console.log(x);

    var x = 21;
  })();

  console.log(x);
})();
