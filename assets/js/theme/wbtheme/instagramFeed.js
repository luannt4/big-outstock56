/* eslint-disable */
import $ from 'jquery';

export default function () {

    // ========================================================================
    // Get Instagram Feed
    // ========================================================================
	function instagramFeed(){
		const $carousel = $('#instafeed');
		if ($carousel.length) {
			$carousel.on('instafeedAfter', (e) => {
				const $el = $(e.target);
				$el.slick($el.data('instagram'));
			});
		}
	}
	instagramFeed();
}
