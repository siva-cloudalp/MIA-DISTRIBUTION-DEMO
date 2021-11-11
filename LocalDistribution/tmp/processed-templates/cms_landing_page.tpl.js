define('cms_landing_page.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cms-landing-page-row\">\n	<div class=\"cms-landing-page-row-full-col\">\n		<div data-cms-area=\"cms-landing-page-placeholder-page-type\" data-cms-area-filters=\"page_type\"></div>\n	</div>\n	<div class=\"cms-landing-page-row-full-col\">\n		<div data-cms-area=\"cms-landing-page-placeholder-path\" data-cms-area-filters=\"path\"></div>\n	</div>\n	<div class=\"cms-landing-page-half-col\">\n		<div data-cms-area=\"cms-landing-page-placeholder-third-row-half-1\" data-cms-area-filters=\"path\"></div>\n	</div>\n	<div class=\"cms-landing-page-half-col\">\n		<div data-cms-area=\"cms-landing-page-placeholder-third-row-half-2\" data-cms-area-filters=\"path\"></div>\n	</div>\n	<div class=\"cms-landing-page-quarter-col\">\n		<div data-cms-area=\"cms-landing-page-placeholder-fourth-row-quarter\" data-cms-area-filters=\"path\"></div>\n	</div>\n	<div class=\"cms-landing-page-three-quarter-col\">\n		<div data-cms-area=\"cms-landing-page-placeholder-fourth-row-three-quarter\" data-cms-area-filters=\"path\"></div>\n	</div>\n	<div class=\"cms-landing-page-three-quarter-col\">\n		<div data-cms-area=\"cms-landing-page-placeholder-fifth-row-three-quarter\" data-cms-area-filters=\"path\"></div>\n	</div>\n	<div class=\"cms-landing-page-quarter-col\">\n		<div data-cms-area=\"cms-landing-page-placeholder-fifth-row-quarter\" data-cms-area-filters=\"path\"></div>\n	</div>\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cms_landing_page'; return template;});