"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_product_js"],{

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

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/*
 Import all product specific js
 */










var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on("close.fndtn.reveal", function () {
      if (_this2.url.indexOf("#write_review") !== -1 && typeof window.history.replaceState === "function") {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($(".productView"), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $("body").on("click", '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);

    //Event Click magnificPopup
    var items = [];
    var activeIndex = 0;
    var productImages = this.context.productImages;
    $.each(productImages, function (index, image) {
      // Pass an extra titleSrc property to the item object so we can use it in the magnificPopup function
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].tools.imageSrcset.getSrcset(image.data, {
        "1x": _this2.context.zoomSize
      });
      items.push({
        src: mainImageUrl,
        titleSrc: image.alt
      });
    });
    if (items.length) {
      $(".btn-productViewzoom").magnificPopup({
        items: items,
        gallery: {
          enabled: true,
          preload: [0, 2]
        },
        type: "image",
        mainClass: "mfp-fade",
        callbacks: {
          open: function open() {
            if (items.length) {
              activeIndex = parseInt($(".productView-thumbnails .is-active").data("image-gallery-item"));
            }
            var magnificPopup = $.magnificPopup.instance;
            magnificPopup.goTo(activeIndex);
          }
        }
      });
    }
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUV6QyxTQUFTQyxnQkFBZ0JBLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxPQUFPLENBQUNGLElBQUksQ0FBQztFQUVuQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWkYsT0FBTyxDQUFDSSxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDNUI7QUFDSjtBQUVBLFNBQVNHLGdCQUFnQkEsQ0FBQ0wsT0FBTyxFQUFFQyxJQUFJLEVBQUU7RUFDckNELE9BQU8sQ0FBQ00sSUFBSSxDQUFDTCxJQUFJLENBQUM7QUFDdEI7QUFFQSxTQUFTTSxnQkFBZ0JBLENBQUNQLE9BQU8sRUFBRVEsS0FBSyxFQUFFQyxJQUFJLEVBQUU7RUFDNUMsSUFBSVQsT0FBTyxDQUFDVSxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ3RCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDdEJILEtBQUssQ0FBQ0ksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMxQjtJQUNBSixLQUFLLENBQUNLLElBQUksQ0FBQyxNQUFNLEVBQUtKLElBQUksQ0FBQ0ssT0FBTyxTQUFJZCxPQUFPLENBQUNlLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztJQUMxRFAsS0FBSyxDQUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDakIsT0FBTyxDQUFDVSxNQUFNLENBQUM7RUFDckQsQ0FBQyxNQUFNO0lBQ0hGLEtBQUssQ0FBQ1UsV0FBVyxDQUFDLE1BQU0sQ0FBQztFQUM3QjtBQUNKO0FBRUEsNkJBQWUsb0NBQUFDLElBQUEsRUFBc0M7RUFBQSxJQUExQkMsZ0JBQWdCLEdBQUFELElBQUEsQ0FBaEJDLGdCQUFn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Y29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3ZpZGVvLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybHMpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxzLmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IG5vQ29tcGFyZU1lc3NhZ2UsIHVybHMgfSkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG5vQ29tcGFyZU1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCB1dGlscyBmcm9tIFwiQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHNcIjtcbmltcG9ydCBcIm1hZ25pZmljLXBvcHVwXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgdGhpcy5yZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsLXJldmlldy1mb3JtJylbMF07XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbihcImNsb3NlLmZuZHRuLnJldmVhbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy51cmwuaW5kZXhPZihcIiN3cml0ZV9yZXZpZXdcIikgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscyhcbiAgICAgICAgICAgICQoXCIucHJvZHVjdFZpZXdcIiksXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcblxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgLy9FdmVudCBDbGljayBtYWduaWZpY1BvcHVwXG4gICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICBjb25zdCBwcm9kdWN0SW1hZ2VzID0gdGhpcy5jb250ZXh0LnByb2R1Y3RJbWFnZXM7XG5cbiAgICAgICAgJC5lYWNoKHByb2R1Y3RJbWFnZXMsIChpbmRleCwgaW1hZ2UpID0+IHtcbiAgICAgICAgICAgIC8vIFBhc3MgYW4gZXh0cmEgdGl0bGVTcmMgcHJvcGVydHkgdG8gdGhlIGl0ZW0gb2JqZWN0IHNvIHdlIGNhbiB1c2UgaXQgaW4gdGhlIG1hZ25pZmljUG9wdXAgZnVuY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS5kYXRhLCB7XG4gICAgICAgICAgICAgICAgXCIxeFwiOiB0aGlzLmNvbnRleHQuem9vbVNpemUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIHNyYzogbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgICAgIHRpdGxlU3JjOiBpbWFnZS5hbHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi5idG4tcHJvZHVjdFZpZXd6b29tXCIpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgICAgICAgICBnYWxsZXJ5OiB7IGVuYWJsZWQ6IHRydWUsIHByZWxvYWQ6IFswLCAyXSB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICBtYWluQ2xhc3M6IFwibWZwLWZhZGVcIixcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0Vmlldy10aHVtYm5haWxzIC5pcy1hY3RpdmVcIikuZGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2UtZ2FsbGVyeS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWduaWZpY1BvcHVwID0gJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbmlmaWNQb3B1cC5nb1RvKGFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsic2hvd0FsZXJ0TW9kYWwiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybHMiLCJsZW5ndGgiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIl9yZWYiLCJub0NvbXBhcmVNZXNzYWdlIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkIiwib24iLCIkY2hlY2tlZCIsIm1hcCIsImVsZW1lbnQiLCJ2YWx1ZSIsImdldCIsInRyaWdnZXJIYW5kbGVyIiwiZXZlbnQiLCJwcm9kdWN0IiwiY3VycmVudFRhcmdldCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiLCJQYWdlTWFuYWdlciIsIlJldmlldyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlByb2R1Y3REZXRhaWxzIiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwibW9kYWxGYWN0b3J5IiwiY29tcGFyZVByb2R1Y3RzIiwidXRpbHMiLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCIkYnVsa1ByaWNpbmdMaW5rIiwicmV2aWV3TW9kYWwiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwiZG9jdW1lbnQiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJwYXRobmFtZSIsInZhbGlkYXRvciIsInByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCIkcmV2aWV3Rm9ybSIsInJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiaXRlbXMiLCJhY3RpdmVJbmRleCIsInByb2R1Y3RJbWFnZXMiLCJlYWNoIiwiaW1hZ2UiLCJtYWluSW1hZ2VVcmwiLCJ0b29scyIsImltYWdlU3Jjc2V0IiwiZ2V0U3Jjc2V0IiwiZGF0YSIsInpvb21TaXplIiwic3JjIiwidGl0bGVTcmMiLCJhbHQiLCJtYWduaWZpY1BvcHVwIiwiZ2FsbGVyeSIsImVuYWJsZWQiLCJwcmVsb2FkIiwidHlwZSIsIm1haW5DbGFzcyIsImNhbGxiYWNrcyIsIm9wZW4iLCJwYXJzZUludCIsImluc3RhbmNlIiwiZ29UbyIsIiRmb3JtIiwiXyIsImlucHV0IiwiJGlucHV0IiwibXNnU3BhbklkIiwic2libGluZ3MiLCJ0cmlnZ2VyIiwiZGVmYXVsdCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==