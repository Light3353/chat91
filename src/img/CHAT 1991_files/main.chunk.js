(this["webpackJsonpchat91"] = this["webpackJsonpchat91"] || []).push([["main"],{

/***/ "./src/components/App/App.jsx":
/*!************************************!*\
  !*** ./src/components/App/App.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Header */ "./src/components/Header/index.js");
/* harmony import */ var components_DialogsBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/DialogsBlock */ "./src/components/DialogsBlock/index.js");
/* harmony import */ var components_Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Block */ "./src/components/Block/index.js");
/* harmony import */ var components_MessageBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MessageBlock */ "./src/components/MessageBlock/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/App/App.jsx";









const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Block__WEBPACK_IMPORTED_MODULE_3__["WrapperPrimary"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DialogsBlock__WEBPACK_IMPORTED_MODULE_2__["Primary"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DialogsBlock__WEBPACK_IMPORTED_MODULE_2__["Dialogs"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Block__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      backgroundColor: "#36344E"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_MessageBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(App));

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ "./src/components/App/App.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_App_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Block/Block.jsx":
/*!****************************************!*\
  !*** ./src/components/Block/Block.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Block = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;
/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./src/components/Block/Flex.jsx":
/*!***************************************!*\
  !*** ./src/components/Block/Flex.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Block_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block.jsx */ "./src/components/Block/Block.jsx");


const Flex = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Block_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
/* harmony default export */ __webpack_exports__["default"] = (Flex);

/***/ }),

/***/ "./src/components/Block/WrapperContent.jsx":
/*!*************************************************!*\
  !*** ./src/components/Block/WrapperContent.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Block_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block.jsx */ "./src/components/Block/Block.jsx");


const WrapperContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Block_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])`
    height: 100%;
    padding: 30px;
`;
/* harmony default export */ __webpack_exports__["default"] = (WrapperContent);

/***/ }),

/***/ "./src/components/Block/WrapperPrimary.jsx":
/*!*************************************************!*\
  !*** ./src/components/Block/WrapperPrimary.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Flex_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flex.jsx */ "./src/components/Block/Flex.jsx");


const WrapperContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Flex_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])`
    height: 100vh;
`;
/* harmony default export */ __webpack_exports__["default"] = (WrapperContent);

/***/ }),

/***/ "./src/components/Block/WrapperTitle.jsx":
/*!***********************************************!*\
  !*** ./src/components/Block/WrapperTitle.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flex_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flex.jsx */ "./src/components/Block/Flex.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const WrapperTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Flex_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])`
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    align-items: flex-start;

`;
/* harmony default export */ __webpack_exports__["default"] = (WrapperTitle);

/***/ }),

/***/ "./src/components/Block/index.js":
/*!***************************************!*\
  !*** ./src/components/Block/index.js ***!
  \***************************************/
/*! exports provided: default, Flex, WrapperPrimary, WrapperContent, WrapperTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Block_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block.jsx */ "./src/components/Block/Block.jsx");
/* harmony import */ var _Flex_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flex.jsx */ "./src/components/Block/Flex.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _Flex_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _WrapperPrimary_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WrapperPrimary.jsx */ "./src/components/Block/WrapperPrimary.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperPrimary", function() { return _WrapperPrimary_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _WrapperContent_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WrapperContent.jsx */ "./src/components/Block/WrapperContent.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperContent", function() { return _WrapperContent_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _WrapperTitle_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WrapperTitle.jsx */ "./src/components/Block/WrapperTitle.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperTitle", function() { return _WrapperTitle_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });






/* harmony default export */ __webpack_exports__["default"] = (_Block_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/DialogsBlock/DialogsItem.jsx":
/*!*****************************************************!*\
  !*** ./src/components/DialogsBlock/DialogsItem.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.jsx */ "./src/components/DialogsBlock/Item.jsx");
/* harmony import */ var _UserIcon_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserIcon.jsx */ "./src/components/DialogsBlock/UserIcon.jsx");
/* harmony import */ var img_user1_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! img/user1.jpeg */ "./src/img/user1.jpeg");
/* harmony import */ var img_user1_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(img_user1_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var img_user2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! img/user2.jpg */ "./src/img/user2.jpg");
/* harmony import */ var img_user2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(img_user2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Block */ "./src/components/Block/index.js");
/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Text */ "./src/components/Text/index.js");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/DialogsBlock/DialogsItem.jsx";








const data = [{
  id: 1,
  name: 'Michael',
  soname: 'Rodrigez',
  src: './static/media/user2.19254017.jpg',
  text: 'Loren lorem lorem'
}, {
  id: 2,
  name: 'Kira',
  soname: 'Anderson',
  src: './static/media/user1.7ec1dec1.jpeg',
  text: 'Loren lorem lorem'
}, {
  id: 3,
  name: 'Kira',
  soname: 'Anderson',
  src: './static/media/user1.7ec1dec1.jpeg',
  text: 'Loren lorem lorem'
}, {
  id: 4,
  name: 'Kira',
  soname: 'Anderson',
  src: './static/media/user1.7ec1dec1.jpeg',
  text: 'Loren lorem lorem'
}, {
  id: 5,
  name: 'Michael',
  soname: 'Rodrigez',
  src: './static/media/user2.19254017.jpg',
  text: 'Loren lorem lorem'
}, {
  id: 6,
  name: 'Michael',
  soname: 'Rodrigez',
  src: './static/media/user2.19254017.jpg ',
  text: 'Loren lorem lorem'
}, {
  id: 7,
  name: 'Michael',
  soname: 'Rodrigez',
  src: './static/media/user2.19254017.jpg',
  text: 'Loren lorem lorem'
}, {
  id: 8,
  name: 'Kira',
  soname: 'Anderson',
  src: './static/media/user1.7ec1dec1.jpeg',
  text: 'Loren lorem lorem'
}, {
  id: 9,
  name: 'Michael',
  soname: 'Rodrigez',
  src: './static/media/user2.19254017.jpg',
  text: 'Loren lorem lorem'
}, {
  id: 10,
  name: 'Kira',
  soname: 'Anderson',
  src: './static/media/user1.7ec1dec1.jpeg',
  text: 'Loren lorem lorem'
}, {
  id: 11,
  name: 'Michael',
  soname: 'Rodrigez',
  src: './static/media/user2.19254017.jpg',
  text: 'Loren lorem lorem'
}, {
  id: 12,
  name: 'Kira',
  soname: 'Anderson',
  src: './static/media/user1.7ec1dec1.jpeg',
  text: 'Loren lorem lorem'
}];

const DialogsItem = () => {
  return data.map(index => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserIcon_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      src: index.src,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Block__WEBPACK_IMPORTED_MODULE_5__["WrapperTitle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Text__WEBPACK_IMPORTED_MODULE_6__["TextTitle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 25
      }
    }, index.name, " ", index.soname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Text__WEBPACK_IMPORTED_MODULE_6__["TextSubTitle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }, index.text)));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DialogsItem));

/***/ }),

/***/ "./src/components/DialogsBlock/Item.jsx":
/*!**********************************************!*\
  !*** ./src/components/DialogsBlock/Item.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Block */ "./src/components/Block/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const Item = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(components_Block__WEBPACK_IMPORTED_MODULE_0__["Flex"])`
    min-height: 80px;
    border-bottom: 3px solid rgba(255,255,255, .1);
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    width: 90%;
    margin: 0 auto;
`;
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/components/DialogsBlock/Primary.jsx":
/*!*************************************************!*\
  !*** ./src/components/DialogsBlock/Primary.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Block */ "./src/components/Block/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
 // import React from 'react';

 // const myStyle = {
//     backgroundColor: "4B4B66",
//     width: "30%",
// }
// const Primary = () => {
//     return (
//         <WrapperContent style={myStyle}/>
//     )
// };

const Primary = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(components_Block__WEBPACK_IMPORTED_MODULE_0__["WrapperContent"])`
    background-color: #4B4B66;
    width: 40%;
    min-width: 260px;
`;
/* harmony default export */ __webpack_exports__["default"] = (Primary);

/***/ }),

/***/ "./src/components/DialogsBlock/UserIcon.jsx":
/*!**************************************************!*\
  !*** ./src/components/DialogsBlock/UserIcon.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Icon */ "./src/components/Icon/index.js");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/DialogsBlock/UserIcon.jsx";


const posImg = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
  width: "90px",
  height: "60px"
};

const UserIcon = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_1__["UserIconWrap"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.src,
    alt: "user",
    style: posImg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(UserIcon));

/***/ }),

/***/ "./src/components/DialogsBlock/WrapperDialogs.jsx":
/*!********************************************************!*\
  !*** ./src/components/DialogsBlock/WrapperDialogs.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Block */ "./src/components/Block/index.js");
/* harmony import */ var _DialogsItem_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogsItem.jsx */ "./src/components/DialogsBlock/DialogsItem.jsx");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/DialogsBlock/WrapperDialogs.jsx";




const WrapDialogs = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(components_Block__WEBPACK_IMPORTED_MODULE_2__["default"])`
    flex-direction: column;
    height: 85vh;
    display: flex;
    overflow-y: scroll;
    padding: 10px 0 15px 0;
    margin-top: 5px;

`;

const Dialogs = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapDialogs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogsItem_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Dialogs));

/***/ }),

/***/ "./src/components/DialogsBlock/index.js":
/*!**********************************************!*\
  !*** ./src/components/DialogsBlock/index.js ***!
  \**********************************************/
/*! exports provided: DialogsItem, Dialogs, UserIcon, Primary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogsItem_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogsItem.jsx */ "./src/components/DialogsBlock/DialogsItem.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogsItem", function() { return _DialogsItem_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _WrapperDialogs_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WrapperDialogs.jsx */ "./src/components/DialogsBlock/WrapperDialogs.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialogs", function() { return _WrapperDialogs_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _UserIcon_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserIcon.jsx */ "./src/components/DialogsBlock/UserIcon.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return _UserIcon_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Primary_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Primary.jsx */ "./src/components/DialogsBlock/Primary.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return _Primary_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Icon */ "./src/components/Icon/index.js");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Input */ "./src/components/Input/index.js");
/* harmony import */ var components_Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Block */ "./src/components/Block/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/Header/Header.jsx";






const WrapHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(components_Block__WEBPACK_IMPORTED_MODULE_3__["Flex"])`
    height: 80px;
    border-bottom: 3px solid rgba(255,255,255, .2);
    padding: 0 10px;
    width: auto;
`;

const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_1__["BurgerIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Block__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_1__["SearchIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Input__WEBPACK_IMPORTED_MODULE_2__["InputSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Header));

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.jsx */ "./src/components/Header/Header.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Header_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Icon/BurgerMenu/BurgerIcon.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Icon/BurgerMenu/BurgerIcon.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrapButtonMenu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WrapButtonMenu.jsx */ "./src/components/Icon/BurgerMenu/WrapButtonMenu.jsx");
/* harmony import */ var _PrimaryIcon_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimaryIcon.jsx */ "./src/components/Icon/BurgerMenu/PrimaryIcon.jsx");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/Icon/BurgerMenu/BurgerIcon.jsx";




const BurgerIcon = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WrapButtonMenu_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrimaryIcon_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    viewBox: "0 0 24 24",
    width: "30",
    height: "30",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 81
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 118
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BurgerIcon));

/***/ }),

/***/ "./src/components/Icon/BurgerMenu/PrimaryIcon.jsx":
/*!********************************************************!*\
  !*** ./src/components/Icon/BurgerMenu/PrimaryIcon.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const PrimaryIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg`
        fill: #fff;
        width: 26px;
        height: 26px;
`;
/* harmony default export */ __webpack_exports__["default"] = (PrimaryIcon);

/***/ }),

/***/ "./src/components/Icon/BurgerMenu/WrapButtonMenu.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Icon/BurgerMenu/WrapButtonMenu.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Block */ "./src/components/Block/index.js");


const WrapButtonMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(components_Block__WEBPACK_IMPORTED_MODULE_1__["Flex"])`
    width: 35px;
    min-width: 35px;
    height: 35px;
    border-radius: 50%;
    outline: transparent;
    color: #fff;
    margin-right: 10px;
    cursor: pointer;
    border: 3px solid #fff;
    background: transparent;
    position: relative;
    font-size: 15px;
    justify-content: center;
`;
/* harmony default export */ __webpack_exports__["default"] = (WrapButtonMenu);

/***/ }),

/***/ "./src/components/Icon/BurgerMenu/index.js":
/*!*************************************************!*\
  !*** ./src/components/Icon/BurgerMenu/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BurgerIcon_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BurgerIcon.jsx */ "./src/components/Icon/BurgerMenu/BurgerIcon.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_BurgerIcon_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Icon/SearchIcon/PrimaryIcon.jsx":
/*!********************************************************!*\
  !*** ./src/components/Icon/SearchIcon/PrimaryIcon.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const PrimaryIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg`
        fill: #fff;
        width: 26px;
        height: 26px;
        position: absolute;
        top: 28px;
        left: 10px;
        z-index: 2;
`;
/* harmony default export */ __webpack_exports__["default"] = (PrimaryIcon);

/***/ }),

/***/ "./src/components/Icon/SearchIcon/SearchIcon.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Icon/SearchIcon/SearchIcon.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PrimaryIcon_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrimaryIcon.jsx */ "./src/components/Icon/SearchIcon/PrimaryIcon.jsx");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/Icon/SearchIcon/SearchIcon.jsx";



const SearchIcon = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrimaryIcon_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    viewBox: "0 0 24 24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 46
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 292
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchIcon));

/***/ }),

/***/ "./src/components/Icon/SearchIcon/index.js":
/*!*************************************************!*\
  !*** ./src/components/Icon/SearchIcon/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchIcon_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchIcon.jsx */ "./src/components/Icon/SearchIcon/SearchIcon.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_SearchIcon_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Icon/UserIconWrap.jsx":
/*!**********************************************!*\
  !*** ./src/components/Icon/UserIconWrap.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const UserIconWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    min-width: 60px;
    min-height: 60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #7F7896;
    position: relative;
    overflow: hidden;
    padding: 0;
    margin: 0; 
`;
/* harmony default export */ __webpack_exports__["default"] = (UserIconWrap);

/***/ }),

/***/ "./src/components/Icon/index.js":
/*!**************************************!*\
  !*** ./src/components/Icon/index.js ***!
  \**************************************/
/*! exports provided: BurgerIcon, UserIconWrap, SearchIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserIconWrap_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserIconWrap.jsx */ "./src/components/Icon/UserIconWrap.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserIconWrap", function() { return _UserIconWrap_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BurgerMenu */ "./src/components/Icon/BurgerMenu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BurgerIcon", function() { return _BurgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchIcon */ "./src/components/Icon/SearchIcon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return _SearchIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/components/Input/Input.jsx":
/*!****************************************!*\
  !*** ./src/components/Input/Input.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
    outline: transparent;
    transition: all .1s linear;
    color: #fff;
`;
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/Input/InputSearch.jsx":
/*!**********************************************!*\
  !*** ./src/components/Input/InputSearch.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Input_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.jsx */ "./src/components/Input/Input.jsx");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/Input/InputSearch.jsx";


 // import search form ''

const InputNav = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Input_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])`
    font-size: 12px;
    width: 100%;
    padding: 10px 5% 10px 40px;
    border-radius: 35px;
    border: transparent;
    background-color: #36344E;
    position: relative;
    &::placeholder {
        color: #fff;
    }
`;

const InputSearch = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputNav, {
    type: "search",
    placeholder: "Search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(InputSearch));

/***/ }),

/***/ "./src/components/Input/index.js":
/*!***************************************!*\
  !*** ./src/components/Input/index.js ***!
  \***************************************/
/*! exports provided: default, InputSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.jsx */ "./src/components/Input/Input.jsx");
/* harmony import */ var _InputSearch_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputSearch.jsx */ "./src/components/Input/InputSearch.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return _InputSearch_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/MessageBlock/WrapperMessages.jsx":
/*!*********************************************************!*\
  !*** ./src/components/MessageBlock/WrapperMessages.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Block */ "./src/components/Block/index.js");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/components/MessageBlock/WrapperMessages.jsx";



const Messages = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(components_Block__WEBPACK_IMPORTED_MODULE_2__["default"])`
    flex-direction: column;
    height: 100%;
    display: flex;
    // background-color: #36344E;
    overflow: scroll;
`;

const WrapperMessages = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Messages, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(WrapperMessages));

/***/ }),

/***/ "./src/components/MessageBlock/index.js":
/*!**********************************************!*\
  !*** ./src/components/MessageBlock/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WrapperMessages_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WrapperMessages.jsx */ "./src/components/MessageBlock/WrapperMessages.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_WrapperMessages_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Text/Text.jsx":
/*!**************************************!*\
  !*** ./src/components/Text/Text.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
    font-size: 10px;
    color: #fff;
    display: block;
    margin: 0;
`;
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/components/Text/TextSubTitle.jsx":
/*!**********************************************!*\
  !*** ./src/components/Text/TextSubTitle.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.jsx */ "./src/components/Text/Text.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const TextSubTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Text_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])`
    font-size: 15px;
    color: rgba(255,255,255, .5);
    margin-top: 5px;
`;
/* harmony default export */ __webpack_exports__["default"] = (TextSubTitle);

/***/ }),

/***/ "./src/components/Text/TextTitle.jsx":
/*!*******************************************!*\
  !*** ./src/components/Text/TextTitle.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.jsx */ "./src/components/Text/Text.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const TextTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Text_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])`
    font-weight: bold;
    font-size: 18px;
`;
/* harmony default export */ __webpack_exports__["default"] = (TextTitle);

/***/ }),

/***/ "./src/components/Text/index.js":
/*!**************************************!*\
  !*** ./src/components/Text/index.js ***!
  \**************************************/
/*! exports provided: default, TextTitle, TextSubTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.jsx */ "./src/components/Text/Text.jsx");
/* harmony import */ var _TextTitle_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextTitle.jsx */ "./src/components/Text/TextTitle.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextTitle", function() { return _TextTitle_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TextSubTitle_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextSubTitle.jsx */ "./src/components/Text/TextSubTitle.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextSubTitle", function() { return _TextSubTitle_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_Text_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/components/App/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/img/user1.jpeg":
/*!****************************!*\
  !*** ./src/img/user1.jpeg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/user1.7ec1dec1.jpeg";

/***/ }),

/***/ "./src/img/user2.jpg":
/*!***************************!*\
  !*** ./src/img/user2.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/user2.19254017.jpg";

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./src/components/index.js");
var _jsxFileName = "/Users/vaceslavasuk/Documents/webDev/chat91/src/index.jsx";


 // import { ThemeProvider } from 'styled-components';
// import * as theme from 'theme';

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), document.getElementById('root'));

/***/ }),

/***/ 1:
/*!***************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.jsx ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/vaceslavasuk/Documents/webDev/chat91/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/vaceslavasuk/Documents/webDev/chat91/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/vaceslavasuk/Documents/webDev/chat91/src/index.jsx */"./src/index.jsx");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map