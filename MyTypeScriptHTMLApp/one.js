var isActive = false;
var size = 8;
var name = "Вася";

var list = [1, 2, 3];
var list = [1, 2, 3];

var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = 1 /* Green */;

var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

function sayHi() {
    console.log("Hi");
}

var one;
one = {
    firstName: "",
    lastName: "",
    age: 10,
    sayHi: function () {
        console.log("Hello " + this.firstName);
    }
};

var ff;
ff = function () {
    return "";
};
//# sourceMappingURL=one.js.map
