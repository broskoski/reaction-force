"use strict";var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
var storybook_1 = require("@kadira/storybook");
var React = require("react");
var default_1 = require("../buttons/default");
var modal_1 = require("../modal/modal");
var modal_header_1 = require("../modal_header");
var title_1 = require("../title");
var ModalStyle = {
    height: "500px",
    width: "500px" };var

ModalDemo = function (_React$Component) {_inherits(ModalDemo, _React$Component);
    function ModalDemo(props) {_classCallCheck(this, ModalDemo);var _this = _possibleConstructorReturn(this, (ModalDemo.__proto__ || Object.getPrototypeOf(ModalDemo)).call(this,
        props));
        _this.state = { isModalOpen: false };
        _this.openModal = _this.openModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);return _this;
    }_createClass(ModalDemo, [{ key: "openModal", value: function openModal()
        {
            this.setState({ isModalOpen: true });
        } }, { key: "closeModal", value: function closeModal()
        {
            this.setState({ isModalOpen: false });
        } }, { key: "render", value: function render()
        {
            return React.createElement("div", null,
            React.createElement(default_1.default, { onClick: this.openModal }, "Open Modal"),
            React.createElement(modal_1.default, { style: ModalStyle, show: this.state.isModalOpen, onClose: this.closeModal },
            React.createElement(modal_header_1.default, null,
            React.createElement(title_1.default, null, "This is a modal title")),
            React.createElement("div", null,
            React.createElement("p", null, "This is modal contents"),
            React.createElement("hr", null),
            React.createElement("div", null, "Even more contents"))));
        } }]);return ModalDemo;}(React.Component);

storybook_1.storiesOf("ModalDemo", ModalDemo).
add("ModalDemo", function () {return React.createElement(ModalDemo, null);});
//# sourceMappingURL=modal.js.map