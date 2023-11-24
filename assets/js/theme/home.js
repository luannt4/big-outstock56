/* eslint-disable */
import PageManager from './page-manager';
import compareProducts from './global/compare-products';
import $ from 'jquery';
export default class Home extends PageManager {
    onReady() {
        compareProducts(this.context);

        if($('[data-alert]').length > 0) {
            $('[data-alert]').each(function () {
                const btnClose = $(this).find('.close');
                btnClose.click(function (e) {
                    e.preventDefault();
                    $(this).parents('.alert-box').addClass('d-none');
                });
            });
        }

         verticalMegaHome();
         $(window).resize(function () {
             verticalMegaHome();

         });
         function verticalMegaHome(){
             if ($(window).innerWidth() > 1000 && $(window).innerWidth() < 1600) {
                 $('.page-type-default #verticalCategories').addClass('is-open');
             }
         }
	}

}
