import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';

export default class Category extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
    }

    setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
        $element.attr({
            role: roleType,
            'aria-live': ariaLiveStatus,
        });
    }

    makeShopByPriceFilterAccessible() {
        if (!$('[data-shop-by-price]').length) return;

        if ($('.navList-action').hasClass('is-active')) {
            $('a.navList-action.is-active').focus();
        }

        $('a.navList-action').on('click', () => this.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive'));
    }

    onReady() {
        this.arrangeFocusOnSortBy();

        $('[data-button-type="add-cart"]').on('click', (e) => this.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite'));

        this.makeShopByPriceFilterAccessible();

        compareProducts(this.context);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        $('a.reset-btn').on('click', () => this.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite'));

        this.ariaNotifyNoProducts();
        this.reinitView();
    }

    ariaNotifyNoProducts() {
        const $noProductsMessage = $('[data-no-products-notification]');
        if ($noProductsMessage.length) {
            $noProductsMessage.focus();
        }
    }

    initFacetedSearch() {
        const {
            price_min_evaluation: onMinPriceError,
            price_max_evaluation: onMaxPriceError,
            price_min_not_entered: minPriceNotEntered,
            price_max_not_entered: maxPriceNotEntered,
            price_invalid_value: onInvalidPrice,
        } = this.validationDictionary;
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        }, {
            validationErrorMessages: {
                onMinPriceError,
                onMaxPriceError,
                minPriceNotEntered,
                maxPriceNotEntered,
                onInvalidPrice,
            },
        });
    }

    // ========================================================================
    // Show ReinitView - wikitheme
    // ========================================================================
    reinitView() {
        const viewAs = $('.filters-panel .view-mode').attr("data-reinitview");
        $('.view-mode .list-view button').bind("click", function() {
            $(this).parent().find('button').removeClass('active');
            $(this).addClass('active');
        });
        // Product List
        $('#list-view').click(function() {
            $('#product-listing-container .product-layout').attr('class', 'product-layout product-list col-sm-12');
            localStorage.setItem('listview', 'list');
        });

        // Product Grid
        $('#grid-6').click(function() {
            var cols = $('.page-sidebar').length;

            if (cols == 1) {
                $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-6 ');
            } else {
                $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xxl-2 col-xl-3 col-md-4 col-6 ');
            }

            localStorage.setItem('listview', 'grid-6');
        });


        $('#grid-5').click(function() {
            var cols = $('.page-sidebar').length;
            if (cols == 1) {
                $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xxl-15 col-xl-3 col-lg-4 col-md-4 col-6 ');
            } else {
                $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xxl-15  col-xl-3 col-lg-4 col-md-4 col-6 ');
            }

            localStorage.setItem('listview', 'grid-5');
        });

        $('#grid-4').click(function() {
            var cols = $('.page-sidebar').length;
            if (cols == 1) {
                $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-6 ');
            } else {
                $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-6 ');
            }

            localStorage.setItem('listview', 'grid-4');
        });

        $('#grid-3').click(function() {
            var cols = $('.page-sidebar').length;
            if (cols == 1) {
                $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-6 ');
            } else {
                $('#product-listing-container .product-layout').attr('class', ' product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-6 ');
            }

            localStorage.setItem('listview', 'grid-3');
        });

        if(localStorage.getItem('listview')=== null) localStorage.setItem('listview', viewAs);

        if (localStorage.getItem('listview') == 'grid-6'){
            $('#grid-6').trigger('click');
        }else if (localStorage.getItem('listview') == 'grid-5'){
            $('#grid-5').trigger('click');
        }else if (localStorage.getItem('listview') == 'grid-4'){
            $('#grid-4').trigger('click');
        }else if (localStorage.getItem('listview') == 'grid-3'){
            $('#grid-3').trigger('click');
        }else if (localStorage.getItem('listview') == 'list'){
            $('#list-view').trigger('click');
        }else {
            $('#grid-5').trigger('click');
        }


    }
}
