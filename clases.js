var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(_nombre, _edad) {
        var _this = this;
        this.muestraNombre = function () {
            console.log(_this.nombre);
        };
        this.edad = _edad;
        this.nombre = _nombre;
    }
    return Padre;
}());
;
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(_nombre, _edad, _apellido) {
        var _this = _super.call(this, _nombre, _edad) || this;
        _this.nombreHijo = function () {
            console.log(_this.nombre);
        };
        _this.apellido = _apellido;
        return _this;
    }
    ;
    return Hijo;
}(Padre));
;
var otroHijo = new Hijo('Pepe', 22, 'Vazquez');
/* modificador de classe **/
var Animal = /** @class */ (function () {
    function Animal(_nombre, _tamaño) {
        this.mover = function () {
            console.log('me muevo');
        };
        this.nombre = _nombre;
        this.tamaño = _tamaño;
    }
    return Animal;
}());
;
var obj = new Animal('serpiente', "grande");
/**
 *
 */ 
