"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('.product-layout').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.focus();
    }, 100);
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        _this5.showProducts(false);
      }
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
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDZ0I7QUFDa0I7QUFDZDtBQUNSO0FBQzFCO0FBQ2dDO0FBQ3RDO0FBQ2U7QUFFL0IsSUFBTVMsWUFBWSxHQUFHLEVBQUU7QUFDdkIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7QUFBQyxJQUVKQyxNQUFNLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsTUFBQSxFQUFBQyxZQUFBO0VBQUEsU0FBQUQsT0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxJQUFBQyxNQUFBLEdBQUFMLE1BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3ZCRSwyQkFBMkIsR0FBM0IsU0FBQUEsNEJBQTRCQyxJQUFJLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQzlCLElBQU1DLFFBQVEsR0FBRztNQUNiQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtNQUNmQyxFQUFFLEVBQUVMLElBQUksQ0FBQ00sUUFBUSxDQUFDRCxFQUFFO01BQ3BCRSxLQUFLLEVBQUU7UUFDSEMsUUFBUSxFQUFFUixJQUFJLENBQUNRO01BQ25CO0lBQ0osQ0FBQztJQUVELElBQUlSLElBQUksQ0FBQ08sS0FBSyxFQUFFO01BQ1pMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUdULElBQUksQ0FBQ08sS0FBSyxLQUFLLE1BQU07TUFDN0NMLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLElBQUk7SUFDNUI7SUFFQSxJQUFJVixJQUFJLENBQUNVLFFBQVEsRUFBRTtNQUNmUixRQUFRLENBQUNRLFFBQVEsR0FBRyxFQUFFO01BQ3RCVixJQUFJLENBQUNVLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLFNBQVMsRUFBSztRQUNqQ1YsUUFBUSxDQUFDUSxRQUFRLENBQUNHLElBQUks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QUFJLENBQUNBLFNBQVMsQ0FBQ2lGLEdBQUcsQ0FBQztRQUNmQyxRQUFRLEVBQUVGLFFBQVE7UUFDbEJHLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxZQUFZLEVBQUVKLFFBQVEsQ0FBQ3ZKLElBQUksQ0FBQyxjQUFjO01BQzlDLENBQUMsQ0FBQztJQUNOO0lBRUEsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUFBUCxNQUFBLENBRUR1RixLQUFLLEdBQUwsU0FBQUEsTUFBQSxFQUFRO0lBQ0osSUFBSSxJQUFJLENBQUNULFNBQVMsRUFBRTtNQUNoQixJQUFJLENBQUNBLFNBQVMsQ0FBQ3FGLFlBQVksQ0FBQyxDQUFDO01BQzdCLE9BQU8sSUFBSSxDQUFDckYsU0FBUyxDQUFDc0YsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN6QztJQUVBLE9BQU8sS0FBSztFQUNoQixDQUFDO0VBQUEsT0FBQXpLLE1BQUE7QUFBQSxFQWxWK0JWLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCAnanN0cmVlJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcblxuY29uc3QgbGVmdEFycm93S2V5ID0gMzc7XG5jb25zdCByaWdodEFycm93S2V5ID0gMzk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKSk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudChuYXZpZ2F0ZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykpO1xuXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCBzcGFuJykuZGF0YSgpO1xuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVUYWIoJHRhYlRvQWN0aXZhdGUpIHtcbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xuXG4gICAgICAgICR0YWJzQ29sbGVjdGlvbi5lYWNoKChpZHgsIHRhYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhYiA9ICQodGFiKTtcblxuICAgICAgICAgICAgaWYgKCR0YWIuaXMoJHRhYlRvQWN0aXZhdGUpKSB7XG4gICAgICAgICAgICAgICAgJHRhYi5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgICR0YWIuYXR0cignYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHRhYi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhYkNoYW5nZVdpdGhBcnJvd3MoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBldmVudC53aGljaDtcbiAgICAgICAgY29uc3QgaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93biA9IGV2ZW50S2V5ID09PSBsZWZ0QXJyb3dLZXlcbiAgICAgICAgICAgIHx8IGV2ZW50S2V5ID09PSByaWdodEFycm93S2V5O1xuICAgICAgICBpZiAoIWlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24pIHJldHVybjtcblxuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmVFbGVtZW50Tm90VGFiID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpID09PSAtMTtcbiAgICAgICAgaWYgKGlzQWN0aXZlRWxlbWVudE5vdFRhYikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKGAjJHtkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkfWApO1xuICAgICAgICBjb25zdCBhY3RpdmVUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJGFjdGl2ZVRhYik7XG4gICAgICAgIGNvbnN0IGxhc3RUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICAgICAgICBsZXQgbmV4dFRhYklkeDtcbiAgICAgICAgc3dpdGNoIChldmVudEtleSkge1xuICAgICAgICBjYXNlIGxlZnRBcnJvd0tleTpcbiAgICAgICAgICAgIG5leHRUYWJJZHggPSBhY3RpdmVUYWJJZHggPT09IDAgPyBsYXN0VGFiSWR4IDogYWN0aXZlVGFiSWR4IC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHJpZ2h0QXJyb3dLZXk6XG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSBsYXN0VGFiSWR4ID8gMCA6IGFjdGl2ZVRhYklkeCArIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAkKCR0YWJzQ29sbGVjdGlvbi5nZXQobmV4dFRhYklkeCkpLmZvY3VzKCkudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5vbigna2V5dXAnLCB0aGlzLm9uVGFiQ2hhbmdlV2l0aEFycm93cyk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJy5wcm9kdWN0LWxheW91dCcpLmxlbmd0aCA9PT0gMCB8fCB1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgJHNlYXJjaFJlc3VsdHNNZXNzYWdlID0gJChgPHBcbiAgICAgICAgICAgIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgICAgICAgICAgPiR7dGhpcy5jb250ZXh0LnNlYXJjaFJlc3VsdHNDb3VudH08L3A+YClcbiAgICAgICAgICAgIC5wcmVwZW5kVG8oJ2JvZHknKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICRzZWFyY2hSZXN1bHRzTWVzc2FnZS5mb2N1cygpLCAxMDApO1xuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBjb250ZW50TGlzdGluZzogJ3NlYXJjaC9jb250ZW50LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICAgICAgY29udGVudENvdW50OiAnc2VhcmNoL2NvbnRlbnQtY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJGYWNldGVkU2VhcmNoIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbXBhcmVQcm9kdWN0cyIsInVybFV0aWxzIiwiVXJsIiwiY29sbGFwc2libGVGYWN0b3J5Iiwibm9kIiwibGVmdEFycm93S2V5IiwicmlnaHRBcnJvd0tleSIsIlNlYXJjaCIsIl9DYXRhbG9nUGFnZSIsIl9pbmhlcml0c0xvb3NlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwiX3RoaXMiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwibmF2aWdhdGUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCIkIiwiYWN0aXZhdGVUYWIiLCJzZWFyY2hEYXRhIiwidXJsIiwiY291bnQiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIiR0YWJUb0FjdGl2YXRlIiwiJHRhYnNDb2xsZWN0aW9uIiwiZmluZCIsImVhY2giLCJpZHgiLCJ0YWIiLCIkdGFiIiwiaXMiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm9uVGFiQ2hhbmdlV2l0aEFycm93cyIsImV2ZW50IiwiZXZlbnRLZXkiLCJ3aGljaCIsImlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24iLCJpc0FjdGl2ZUVsZW1lbnROb3RUYWIiLCJpbmRleCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIiRhY3RpdmVUYWIiLCJhY3RpdmVUYWJJZHgiLCJsYXN0VGFiSWR4IiwibGVuZ3RoIiwibmV4dFRhYklkeCIsImdldCIsImZvY3VzIiwidHJpZ2dlciIsIm9uUmVhZHkiLCJfdGhpczIiLCJjb250ZXh0IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc2VhcmNoRm9ybSIsIiRjYXRlZ29yeVRyZWVDb250YWluZXIiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRyZWVEYXRhIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJzZWN0aW9uIiwidmFsaWRhdG9yIiwiaW5pdFZhbGlkYXRpb24iLCJiaW5kVmFsaWRhdGlvbiIsImNhdGVnb3J5VHJlZSIsImNhdGVnb3J5VHJlZURhdGEiLCJjcmVhdGVDYXRlZ29yeVRyZWUiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwianN0cmVlIiwiZ2V0X3NlbGVjdGVkIiwiY2hlY2siLCJyZW1vdmUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiY2F0ZWdvcnlJZCIsInZhbHVlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImFwcGVuZCIsIiRzZWFyY2hSZXN1bHRzTWVzc2FnZSIsInNlYXJjaFJlc3VsdHNDb3VudCIsInByZXBlbmRUbyIsInNldFRpbWVvdXQiLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJfdGhpczMiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJmb3JtYXR0ZWRSZXN1bHRzIiwiZGF0YU5vZGUiLCIkY29udGFpbmVyIiwiX3RoaXM0IiwidHJlZU9wdGlvbnMiLCJjb3JlIiwidGhlbWVzIiwiaWNvbnMiLCJjaGVja2JveCIsInRocmVlX3N0YXRlIiwicGx1Z2lucyIsIl90aGlzNSIsIl90aGlzJGNvbnRleHQiLCJvbk1pblByaWNlRXJyb3IiLCJvbk1heFByaWNlRXJyb3IiLCJtaW5QcmljZU5vdEVudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJvbkludmFsaWRQcmljZSIsIiRjb250ZW50TGlzdGluZ0NvbnRhaW5lciIsIiRzZWFyY2hIZWFkaW5nIiwiJHNlYXJjaENvdW50IiwiJGNvbnRlbnRDb3VudCIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImNvbnRlbnRMaXN0aW5nIiwic2lkZWJhciIsImhlYWRpbmciLCJwcm9kdWN0Q291bnQiLCJjb250ZW50Q291bnQiLCJjb25maWciLCJwcm9kdWN0X3Jlc3VsdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCIkZm9ybSIsInN1Ym1pdCIsInRhcCIsIiRlbGVtZW50IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9