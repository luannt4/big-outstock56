"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/* eslint-disable */



var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-alert]').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-alert]').each(function () {
        var btnClose = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('.close');
        btnClose.click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.alert-box').addClass('d-none');
        });
      });
    }
    verticalMegaHome();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(function () {
      verticalMegaHome();
    });
    function verticalMegaHome() {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).innerWidth() > 1000 && jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).innerWidth() < 1600) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.page-type-default #verticalCategories').addClass('is-open');
      }
    }
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUV6QyxTQUFTQyxnQkFBZ0JBLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxPQUFPLENBQUNGLElBQUksQ0FBQztFQUVuQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWkYsT0FBTyxDQUFDSSxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDNUI7QUFDSjtBQUVBLFNBQVNHLGdCQUFnQkEsQ0FBQ0wsT0FBTyxFQUFFQyxJQUFJLEVBQUU7RUFDckNELE9BQU8sQ0FBQ00sSUFBSSxDQUFDTCxJQUFJLENBQUM7QUFDdEI7QUFFQSxTQUFTTSxnQkFBZ0JBLENBQUNQLE9BQU8sRUFBRVEsS0FBSyxFQUFFQyxJQUFJLEVBQUU7RUFDNUMsSUFBSVQsT0FBTyxDQUFDVSxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ3RCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDdEJILEtBQUssQ0FBQ0ksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMxQjtJQUNBSixLQUFLLENBQUNLLElBQUksQ0FBQyxNQUFNLEVBQUtKLElBQUksQ0FBQ0ssT0FBTyxTQUFJZCxPQUFPLENBQUNlLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztJQUMxRFAsS0FBSyxDQUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDakIsT0FBTyxDQUFDVSxNQUFNLENBQUM7RUFDckQsQ0FBQyxNQUFNO0lBQ0hGLEtBQUssQ0FBQ1UsV0FBVyxDQUFDLE1BQU0sQ0FBQztFQUM3QjtBQUNKO0FBRUEsNkJBQWUsb0NBQUFDLElBQUEsRUFBc0M7RUFBQSxJQUExQkMsZ0JBQWdCLEdBQUFELElBQUEsQ0FBaEJDLGdCQUFnQjtJ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LENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOO0lBRUMwQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xCL0IsNkNBQUMsQ0FBQ2dDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWTtNQUN6QkYsZ0JBQWdCLENBQUMsQ0FBQztJQUV0QixDQUFDLENBQUM7SUFDRixTQUFTQSxnQkFBZ0JBLENBQUEsRUFBRTtNQUN2QixJQUFJL0IsNkNBQUMsQ0FBQ2dDLE1BQU0sQ0FBQyxDQUFDRSxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSWxDLDZDQUFDLENBQUNnQyxNQUFNLENBQUMsQ0FBQ0UsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUU7UUFDaEVsQyw2Q0FBQyxDQUFDLHdDQUF3QyxDQUFDLENBQUNYLFFBQVEsQ0FBQyxTQUFTLENBQUM7TUFDbkU7SUFDSjtFQUNSLENBQUM7RUFBQSxPQUFBMkIsSUFBQTtBQUFBLEVBeEJnQ0YscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxzKSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJscy5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBub0NvbXBhcmVNZXNzYWdlLCB1cmxzIH0pIHtcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcblxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICQoJ2JvZHknKS5vbignY29tcGFyZVJlc2V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGNvbXBhcmVDb3VudGVyID0gJGNoZWNrZWQubGVuZ3RoID8gJGNoZWNrZWQubWFwKChpbmRleCwgZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZSkuZ2V0KCkgOiBbXTtcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJscyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChub0NvbXBhcmVNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYoJCgnW2RhdGEtYWxlcnRdJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtYWxlcnRdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuQ2xvc2UgPSAkKHRoaXMpLmZpbmQoJy5jbG9zZScpO1xuICAgICAgICAgICAgICAgIGJ0bkNsb3NlLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuYWxlcnQtYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAgdmVydGljYWxNZWdhSG9tZSgpO1xuICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgdmVydGljYWxNZWdhSG9tZSgpO1xuXG4gICAgICAgICB9KTtcbiAgICAgICAgIGZ1bmN0aW9uIHZlcnRpY2FsTWVnYUhvbWUoKXtcbiAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA+IDEwMDAgJiYgJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICAgJCgnLnBhZ2UtdHlwZS1kZWZhdWx0ICN2ZXJ0aWNhbENhdGVnb3JpZXMnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cblx0fVxuXG59XG4iXSwibmFtZXMiOlsic2hvd0FsZXJ0TW9kYWwiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybHMiLCJsZW5ndGgiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIl9yZWYiLCJub0NvbXBhcmVNZXNzYWdlIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkIiwib24iLCIkY2hlY2tlZCIsIm1hcCIsImVsZW1lbnQiLCJ2YWx1ZSIsImdldCIsInRyaWdnZXJIYW5kbGVyIiwiZXZlbnQiLCJwcm9kdWN0IiwiY3VycmVudFRhcmdldCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiLCJQYWdlTWFuYWdlciIsImNvbXBhcmVQcm9kdWN0cyIsIkhvbWUiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbnRleHQiLCJlYWNoIiwiYnRuQ2xvc2UiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudHMiLCJ2ZXJ0aWNhbE1lZ2FIb21lIiwid2luZG93IiwicmVzaXplIiwiaW5uZXJXaWR0aCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9