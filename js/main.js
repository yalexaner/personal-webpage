var page = {};

page.resizeLanding = function() {
    var height = jQuery(window).height();
    var header_height = jQuery("#header").outerHeight();
    var footer_height = jQuery("#footer").outerHeight();
    var actions = jQuery("[data-buttons]");
    var actions_height = jQuery(actions).outerHeight();
    var banner = jQuery("[data-banner]");
    var banner_height = jQuery(banner).outerHeight();
    var banner_image = jQuery(banner).find("img");
    var image_height = jQuery(banner_image).height();
    var height_offset = height - header_height - footer_height - actions_height - banner_height;
    var new_height = image_height+height_offset;
    image_height = image_height+height_offset;

    if (height_offset > 0) {
        jQuery(banner_image).css("height", new_height);
    }

    else {
        image_height = image_height - height_offset;
        jQuery(banner_image).css("height", new_height);
    }
}

jQuery(document).ready(function() {
    if (jQuery(window).outerWidth() > 767) {
        page.resizeLanding();
    }
});

jQuery(window).on("resize", function() {
    if (jQuery(window).outerWidth() > 767) {
        page.resizeLanding();
    }
})