/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/utils/form-utils';
import modalFactory from './global/modal';
import compareProducts from './global/compare-products';
import utils from "@bigcommerce/stencil-utils";
import "magnific-popup";
export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
        this.reviewModal = modalFactory('#modal-review-form')[0];
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on("close.fndtn.reveal", () => {
            if (
                this.url.indexOf("#write_review") !== -1 &&
                typeof window.history.replaceState === "function"
            ) {
                window.history.replaceState(
                    null,
                    document.title,
                    window.location.pathname
                );
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails(
            $(".productView"),
            this.context,
            window.BCData.product_attributes
        );
        this.productDetails.setProductVariant();

        videoGallery();

        this.bulkPricingHandler();

        const $reviewForm = classifyForm('.writeReview-form');

        if ($reviewForm.length === 0) return;

        const review = new Review($reviewForm);

        $("body").on("click", '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
            this.ariaDescribeReviewInputs($reviewForm);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
        compareProducts(this.context);

        //Event Click magnificPopup
        let items = [];
        let activeIndex = 0;
        const productImages = this.context.productImages;

        $.each(productImages, (index, image) => {
            // Pass an extra titleSrc property to the item object so we can use it in the magnificPopup function
            const mainImageUrl = utils.tools.imageSrcset.getSrcset(image.data, {
                "1x": this.context.zoomSize,
            });
            items.push({
                src: mainImageUrl,
                titleSrc: image.alt,
            });
        });
            
        if (items.length) {
            $(".btn-productViewzoom").magnificPopup({
                items: items,
                gallery: { enabled: true, preload: [0, 2] },
                type: "image",
                mainClass: "mfp-fade",

                callbacks: {
                    open: function () {
                        if (items.length) {
                            activeIndex = parseInt(
                                $(".productView-thumbnails .is-active").data(
                                    "image-gallery-item"
                                )
                            );
                        }

                        var magnificPopup = $.magnificPopup.instance;
                        magnificPopup.goTo(activeIndex);
                    },
                },
            });
        }
    }

    ariaDescribeReviewInputs($form) {
        $form.find('[data-input]').each((_, input) => {
            const $input = $(input);
            const msgSpanId = `${$input.attr('name')}-msg`;

            $input.siblings('span').attr('id', msgSpanId);
            $input.attr('aria-describedby', msgSpanId);
        });
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }
}
