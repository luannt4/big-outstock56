"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
    this.reinitView();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  }

  // ========================================================================
  // Show ReinitView - wikitheme
  // ========================================================================
  ;
  _proto.reinitView = function reinitView() {
    var viewAs = $('.filters-panel .view-mode').attr("data-reinitview");
    $('.view-mode .list-view button').bind("click", function () {
      $(this).parent().find('button').removeClass('active');
      $(this).addClass('active');
    });
    // Product List
    $('#list-view').click(function () {
      $('#product-listing-container .product-layout').attr('class', 'product-layout product-list col-sm-12');
      localStorage.setItem('listview', 'list');
    });

    // Product Grid
    $('#grid-6').click(function () {
      var cols = $('.page-sidebar').length;
      if (cols == 1) {
        $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-6 ');
      } else {
        $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xxl-2 col-xl-3 col-md-4 col-6 ');
      }
      localStorage.setItem('listview', 'grid-6');
    });
    $('#grid-5').click(function () {
      var cols = $('.page-sidebar').length;
      if (cols == 1) {
        $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xxl-15 col-xl-3 col-lg-4 col-md-4 col-6 ');
      } else {
        $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xxl-15  col-xl-3 col-lg-4 col-md-4 col-6 ');
      }
      localStorage.setItem('listview', 'grid-5');
    });
    $('#grid-4').click(function () {
      var cols = $('.page-sidebar').length;
      if (cols == 1) {
        $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-6 ');
      } else {
        $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-6 ');
      }
      localStorage.setItem('listview', 'grid-4');
    });
    $('#grid-3').click(function () {
      var cols = $('.page-sidebar').length;
      if (cols == 1) {
        $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-6 ');
      } else {
        $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-6 ');
      }
      localStorage.setItem('listview', 'grid-3');
    });
    if (localStorage.getItem('listview') === null) localStorage.setItem('listview', viewAs);
    if (localStorage.getItem('listview') == 'grid-6') {
      $('#grid-6').trigger('click');
    } else if (localStorage.getItem('listview') == 'grid-5') {
      $('#grid-5').trigger('click');
    } else if (localStorage.getItem('listview') == 'grid-4') {
      $('#grid-4').trigger('click');
    } else if (localStorage.getItem('listview') == 'grid-3') {
      $('#grid-3').trigger('click');
    } else if (localStorage.getItem('listview') == 'list') {
      $('#list-view').trigger('click');
    } else {
      $('#grid-5').trigger('click');
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLFFBQVEsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixRQUFBLEVBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdQLG1HQUEyQixDQUFDSSxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUMsSUFBQUcsTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsZ0NBQUEsRUFBa0M7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNTCxNQUFJLENBQUNQLHVCQUF1QixDQUFDUSxD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ZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG5cbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG5cbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLnJlc2V0LWJ0bicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzKCQoJ3NwYW4ucmVzZXQtbWVzc2FnZScpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcblxuICAgICAgICB0aGlzLmFyaWFOb3RpZnlOb1Byb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMucmVpbml0VmlldygpO1xuICAgIH1cblxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFNob3cgUmVpbml0VmlldyAtIHdpa2l0aGVtZVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHJlaW5pdFZpZXcoKSB7XG4gICAgICAgIGNvbnN0IHZpZXdBcyA9ICQoJy5maWx0ZXJzLXBhbmVsIC52aWV3LW1vZGUnKS5hdHRyKFwiZGF0YS1yZWluaXR2aWV3XCIpO1xuICAgICAgICAkKCcudmlldy1tb2RlIC5saXN0LXZpZXcgYnV0dG9uJykuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdidXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFByb2R1Y3QgTGlzdFxuICAgICAgICAkKCcjbGlzdC12aWV3JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdC1sYXlvdXQnKS5hdHRyKCdjbGFzcycsICdwcm9kdWN0LWxheW91dCBwcm9kdWN0LWxpc3QgY29sLXNtLTEyJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdHZpZXcnLCAnbGlzdCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQcm9kdWN0IEdyaWRcbiAgICAgICAgJCgnI2dyaWQtNicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvbHMgPSAkKCcucGFnZS1zaWRlYmFyJykubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoY29scyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QtbGF5b3V0JykuYXR0cignY2xhc3MnLCAnIHByb2R1Y3QtbGF5b3V0IHByb2R1Y3QtZ3JpZCBjb2wteHhsLTIgY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTQgY29sLTYgJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0LWxheW91dCcpLmF0dHIoJ2NsYXNzJywgJyBwcm9kdWN0LWxheW91dCBwcm9kdWN0LWdyaWQgY29sLXh4bC0yIGNvbC14bC0zIGNvbC1tZC00IGNvbC02ICcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdHZpZXcnLCAnZ3JpZC02Jyk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJCgnI2dyaWQtNScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvbHMgPSAkKCcucGFnZS1zaWRlYmFyJykubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvbHMgPT0gMSkge1xuICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0LWxheW91dCcpLmF0dHIoJ2NsYXNzJywgJyBwcm9kdWN0LWxheW91dCBwcm9kdWN0LWdyaWQgY29sLXh4bC0xNSBjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNCBjb2wtNiAnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QtbGF5b3V0JykuYXR0cignY2xhc3MnLCAnIHByb2R1Y3QtbGF5b3V0IHByb2R1Y3QtZ3JpZCBjb2wteHhsLTE1ICBjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNCBjb2wtNiAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3R2aWV3JywgJ2dyaWQtNScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjZ3JpZC00JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgY29scyA9ICQoJy5wYWdlLXNpZGViYXInKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY29scyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QtbGF5b3V0JykuYXR0cignY2xhc3MnLCAnIHByb2R1Y3QtbGF5b3V0IHByb2R1Y3QtZ3JpZCBjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNCBjb2wtNiAnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QtbGF5b3V0JykuYXR0cignY2xhc3MnLCAnIHByb2R1Y3QtbGF5b3V0IHByb2R1Y3QtZ3JpZCBjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNCBjb2wtNiAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3R2aWV3JywgJ2dyaWQtNCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjZ3JpZC0zJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgY29scyA9ICQoJy5wYWdlLXNpZGViYXInKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY29scyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QtbGF5b3V0JykuYXR0cignY2xhc3MnLCAnIHByb2R1Y3QtbGF5b3V0IHByb2R1Y3QtZ3JpZCBjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtNiAnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QtbGF5b3V0JykuYXR0cignY2xhc3MnLCAnIHByb2R1Y3QtbGF5b3V0IHByb2R1Y3QtZ3JpZCBjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtNiAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3R2aWV3JywgJ2dyaWQtMycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHZpZXcnKT09PSBudWxsKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdHZpZXcnLCB2aWV3QXMpO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHZpZXcnKSA9PSAnZ3JpZC02Jyl7XG4gICAgICAgICAgICAkKCcjZ3JpZC02JykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfWVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0dmlldycpID09ICdncmlkLTUnKXtcbiAgICAgICAgICAgICQoJyNncmlkLTUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9ZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3R2aWV3JykgPT0gJ2dyaWQtNCcpe1xuICAgICAgICAgICAgJCgnI2dyaWQtNCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1lbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHZpZXcnKSA9PSAnZ3JpZC0zJyl7XG4gICAgICAgICAgICAkKCcjZ3JpZC0zJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfWVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0dmlldycpID09ICdsaXN0Jyl7XG4gICAgICAgICAgICAkKCcjbGlzdC12aWV3JykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgJCgnI2dyaWQtNScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cblxuXG4gICAgfVxufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJjb21wYXJlUHJvZHVjdHMiLCJGYWNldGVkU2VhcmNoIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMyIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsIm9uUmVhZHkiLCJfdGhpczMiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmV4dCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCJyZWluaXRWaWV3IiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJ2aWV3QXMiLCJwYXJlbnQiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNvbHMiLCJnZXRJdGVtIiwidHJpZ2dlciIsImRlZmF1bHQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsImFyZ3VtZW50cyIsIkpTT04iLCJwYXJzZSIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9