jQuery(document).ready(function($){var n=!1;$(".cd-nav-trigger").on("click",function(t){t.preventDefault(),n||($(this).parents(".csstransitions").length>0&&(n=!0),$("body").toggleClass("navigation-is-open"),$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){n=!1}))})}),jQuery(document).ready(function(){if($(".cd-stretchy-nav").length>0){var n=$(".cd-stretchy-nav");n.each(function(){var n=$(this);n.find(".cd-nav-trigger").on("click",function(t){t.preventDefault(),n.toggleClass("nav-is-visible")})}),$(document).on("click",function(t){!$(t.target).is(".cd-nav-trigger")&&!$(t.target).is(".cd-nav-trigger span")&&n.removeClass("nav-is-visible")})}});