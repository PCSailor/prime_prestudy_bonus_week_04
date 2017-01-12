// console.log("Hey, this works!");
var msg = "Hey this works!";
var func = function() {
  console.log(msg);
}
func();
/*var msg = "message";
function consoleMessage() {
  var el = document.getElementById("message");
  el.textContent = msg;
}
consoleMessage();
--
function augment(withFn) {
    var name, fn;
    for (name in window) {
        fn = navigator.webkitTemporaryStorage[name];
        if (typeof fn === 'function') {
            window[name] = (function(name, fn) {
                var args = arguments;
                return function() {
                    withFn.apply(this, args);
                    return fn.apply(this, arguments);

                }
            })(name, fn);
        }
    }
}

augment(function(name, fn) {
    console.log("calling " + name);
});
--
console.log = function(msg) {
    "Add whatever you want here";
    alert(msg);
}
*/
