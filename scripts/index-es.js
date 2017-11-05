'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var praiseBtn = function () {
    function praiseBtn(num, element) {
        _classCallCheck(this, praiseBtn);

        this.num = num;
        this.element = element;
    }

    _createClass(praiseBtn, [{
        key: 'clickAction',
        value: function clickAction() {
            var _this = this;

            this.element.click(function () {
                if (_this.num < 10) {
                    _this.element.css({ '-webkit-filter': 'grayscale(0)' });
                    $('.up').addClass('upAction');
                    console.log($('.up')[0]);
                    _this.num = add(_this.num);
                    setTimeout(function () {
                        $('.up').removeClass('upAction');
                    }, 1000);
                } else {
                    _this.element.css({ '-webkit-filter': 'grayscale(1)' });
                    _this.num = 0;
                }
                console.log(_this.num);
            });
        }
    }]);

    return praiseBtn;
}();

var Thumb = function (_praiseBtn) {
    _inherits(Thumb, _praiseBtn);

    function Thumb(num, element) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
    }

    return Thumb;
}(praiseBtn);

exports.Thumb = Thumb;
