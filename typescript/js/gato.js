"use strict";
var animal;
(function (animal) {
    var gato = /** @class */ (function () {
        function gato() {
        }
        gato.prototype.hacerRuido = function () {
            return "miau";
        };
        return gato;
    }());
})(animal || (animal = {}));
