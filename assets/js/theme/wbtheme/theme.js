/* eslint-disable */
import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import collapsibleFactory from '../common/collapsible';
import countdown from './countdown/jquery.countdown';


export default function (context) {
    class Setting{
        constructor(context){
            this.context = context;
        }
        init(){
            this.CollapsiblesSidebar();

            this.backScrollTop();

            this.initAjaxCategoryTabs();
            this.enableSelectBoxes();

            this.collapsedFooter();
            this.megamenu();
            this.productFlashDeals();
            //this.getwowjs();
        }


         // Show Back To Top
         backScrollTop(){

            const scrollToTop = $('.scrollToTop');
            scrollToTop.addClass("hidden-top");
            $(window).scroll(function () {
                if ($(this).scrollTop() === 0) {
                    scrollToTop.addClass("hidden-top")
                } else {
                    scrollToTop.removeClass("hidden-top")
                }
            });
            scrollToTop.click(function () {
                $('body,html').animate({scrollTop:0}, 500);
                return false;
            });
        };


        // WBTheme - getPage Ajax Product
        getPage($placeholder, tmpl, urlKey = 'itemsCategoryurl') {
            let template = tmpl;
            if ($placeholder.data('urltemplate')) { template = $placeholder.data('urltemplate'); }
            let url = $placeholder.data(urlKey);
            url = url.replace(/https?:\/\/[^\/]+/, '');

            utils.api.getPage(url, { template }, (err, resp) => {
                $placeholder.html(resp);

                // init products carousel
                $('[data-slick]', $placeholder).slick();
                //window.WBaddToCart();
            });
        }


        // WBTheme -  Ajax initAjaxCategoryTabs
        initAjaxCategoryTabs($parents){
            if($('[data-products-by-category-tabs]').length > 0) {
                const template = 'wbcomponents/addons/wb_deal/horizontal/default_deals_item';
                const urlKey = 'productsByCategoryTabs';
                $('[data-products-by-category-tabs]', $parents).each((i, placeholder) => {
                    this.getPage($(placeholder), template, urlKey);

                });
            }
        }

        enableSelectBoxes() {
            if($('.wb-listing-tabs').length > 0) {
                $('.wb-listing-tabs').each(function() {
                    const tag_id =  $(this).attr('id');

                    (function (element) {
                        const $element = $(element);
                        const $tab = $('.tab', $element);
                        const $tab_wrap = $('.ltabs-tabs-wrap',$element);
                        const $tab_label_select = $('.ltabs-tab-selected',$element);

                        if($tab.length > 0){
                            $tab_label_select.html($tab.filter(':first').children('.tab-title').html());
                            if ( window.innerWidth <= 991) {
                                $tab_wrap.addClass('ltabs-selectbox');
                            } else {
                                $tab_wrap.removeClass('ltabs-selectbox');
                            }

                            $('span.ltabs-tab-selected, span.ltabs-tab-arrow', $element).click(function () {
                                if ($('.ltabs-tabs', $element).hasClass('ltabs-open')) {
                                    $('.ltabs-tabs', $element).removeClass('ltabs-open');
                                } else {
                                    $('.ltabs-tabs', $element).addClass('ltabs-open');
                                }
                            });
                            $tab.click(function () {
                                if ($(this).parents('.ltabs-tabs').hasClass('ltabs-open')) {
                                    $(this).parents('.ltabs-tabs').removeClass('ltabs-open');
                                }
                                $tab_label_select.html($(this).children('.tab-title').html());
                            });

                            $(window).resize(function () {
                                if ($(window).innerWidth() <= 991) {
                                    $tab_wrap.addClass('ltabs-selectbox');
                                } else {
                                    $tab_wrap.removeClass('ltabs-selectbox');
                                }
                            });
                        }

                    })('#'+tag_id);
                });
            }

        }

        initAjaxListingTabs() {
            if($('[data-tab-listingtab]').length > 0){
                const template = 'wbcomponents/addons/wb_supper_category/default/default_items';
                const urlKey = 'itemsListingtabs';

                // Ajax request loading products in the active tab
                $('.is-active[data-items-listingtabs]').each((i, placeholder) => {
                    getPage($(placeholder), template, urlKey);
                });

                $('[data-tab-listingtab]').on('toggled', (event, tab) => {
                    getPage($($('a', tab).attr('href')), template, urlKey);
                });
            }

        }



        collapsedFooter(){
            // Resonsive footer-info-heading
            $(".collapsed-block .expander").click(function (e) {
                var collapse_content_selector = $(this).parent().next();
                var expander = $(this).parent();

                if (!$(collapse_content_selector).hasClass("open")) {
                    expander.addClass("open") ;
                }
                else expander.removeClass("open");

                if (!$(collapse_content_selector).hasClass("open")) $(collapse_content_selector).addClass("open").slideDown("normal");
                else $(collapse_content_selector).removeClass("open").slideUp("normal");
                e.preventDefault()
            })
        }

        CollapsiblesSidebar(){
            // Init collapsibles
            collapsibleFactory();


            if( $(".open-sidebar").length > 0){
                // Resonsive Sidebar aside
                if(!$(".sidebar-offcanvas").length){
                    $(".open-sidebar").hide();
                }

                $(".open-sidebar").click(function(e){
                    e.preventDefault();

                    $(".sidebar-overlay").toggleClass("show");
                    if($(".sidebar-offcanvas").length){
                        $(".sidebar-offcanvas").toggleClass("active");
                    }else{
                        $(this).hide();
                    }

                });

                $(".sidebar-overlay,#close-sidebar").click(function(e){
                    e.preventDefault();
                    $(".sidebar-overlay").toggleClass("show");
                    $(".sidebar-offcanvas").toggleClass("active");
                });

            }

        }

        megamenu(){
            if($('.navPages-verticalCategories').length > 0){
                const itemver = $('[data-collapsible-limit]').data("collapsible-limit");
                const textmore = $('[data-collapsible-limit]').data("collapsible-textmore");
                const textclose = $('[data-collapsible-limit]').data("collapsible-textclose");

                var verticalMega =$(".verticalCategories ul.navPages-list > li");
                if(itemver < $(verticalMega).length) $('.verticalCategories ul.navPages-list').append('<li class="navPages-item loadmore"><div class="navPages-action"><i class="icon icon--plus-circle" aria-hidden="true"><svg><use xlink:href="#icon-plus-circle"></use></svg></i><span class="more-view"> '+textmore+'</span> </div></li>');
                var show_itemver = itemver-1 ;
                $(verticalMega).each(function(i){
                    if(i>show_itemver){
                        $(this).css('display', 'none');
                    }
                });

                $(".verticalCategories .loadmore").click(function(){
                    if($(this).hasClass('open')){
                        $(verticalMega).each(function(i){
                            if(i>show_itemver){
                                $(this).slideUp(200);
                                $(this).css('display', 'none');
                            }
                        });
                        $(this).removeClass('open');
                        $('.loadmore').html('<div class="navPages-action"><i class="icon icon--plus-circle" aria-hidden="true"><svg><use xlink:href="#icon-plus-circle"></use></svg></i><span class="more-view">' +textmore+ '</span></div>');
                    }else{
                        $(verticalMega).each(function(i){
                            if(i>show_itemver){
                                $(this).slideDown(200);
                            }
                        });
                        $(this).addClass('open');
                        $('.loadmore').html('<div class="navPages-action"><i class="icon icon--minus-circle" aria-hidden="true"><svg><use xlink:href="#icon-minus-circle"></use></svg></i> <span class="more-view">'+textclose+'</span></div>');
                    }
                });

                var wd_width = $(window).width();
                if (wd_width <= 1200) {
                    $('.megamenuToogle-wrapper').on('touchstart', function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if (!$(this).next().hasClass("is-open")) {
                            $(this).next().addClass("is-open");

                        }else{
                            $(this).next().removeClass("is-open");
                        }

                    });

                }
            }

        }

        productFlashDeals(){
            const countDownProduct = $(".deal-countdown");
            const extrasliderDeals= $(".extrasliderDeals");
            countDownProduct.countdown(countDownProduct.data("timer"), function(event) {
                var $this = $(this).html(event.strftime(
                    '<div class="time-item time-day"><div class="num-time">%D</div><div class="name-time">Day%!d </div></div>'
                    + '<div class="time-item time-hour"><div class="num-time">%H</div><div class="name-time">Hour%!H</div></div>'
                    + '<div class="time-item time-min"><div class="num-time">%M</div><div class="name-time">Min%!M </div></div>'
                    + '<div class="time-item time-sec"><div class="num-time">%S</div><div class="name-time">Sec%!S</div></div>'));
                    $this.on('finish.countdown', function(event){
                        $(this).hide();
                        $(extrasliderDeals).hide();
                    });
            });
            //$(countDownProduct).countdown('stop');
        }
        getwowjs(){
            const self = this;
            const wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                callback: function(e){
                    var $ele = $(e);
                    $('[data-urlcategory]',$ele).each(function(index, el){
                        $(this).attr('data-products-by-category-tabs', $(this).data('urlcategory'));
                    })

                    self.initAjaxCategoryTabs($ele);

                },
                live: true
            });

            wow.init();
        }
    }


    const setting = new Setting(context);
    setting.init();

}
