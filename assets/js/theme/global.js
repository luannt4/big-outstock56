import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import adminBar from './global/adminBar';
import carousel from './common/carousel';
//import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import { translatePageBuilderValues } from './common/utils/translations-utils';
// custom by wikitheme
import WBaddToCart from './wbtheme/addToCart';
import WBStickyHeader from './wbtheme/stickyHeader';
import WBtheme from './wbtheme/theme';
import WBInstagramFeed from './wbtheme/instagramFeed';

window.WBaddToCart = WBaddToCart;
window.WBStickyHeader = WBStickyHeader;
window.WBInstagramFeed = WBInstagramFeed;

export default class Global extends PageManager {
    onReady() {
        const {
            channelId,
            cartId,
            productId,
            categoryId,
            secureBaseUrl,
            maintenanceModeSettings,
            adminBarLanguage,
            showAdminBar,
            isProductCardPresented,
            isProductListPresented,
        } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        privacyCookieNotification();

        if (showAdminBar) {
            adminBar(secureBaseUrl, channelId, maintenanceModeSettings, JSON.parse(adminBarLanguage), productId, categoryId);
        }
       // loadingProgressBar();
        svgInjector();
        WBtheme(this.context);
	if (isProductListPresented || isProductCardPresented) {
            translatePageBuilderValues();
        }
    }
}
