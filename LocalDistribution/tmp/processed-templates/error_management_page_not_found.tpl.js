define('error_management_page_not_found.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":20}}}) : helper)))
    + "</h1>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"error-management-page-not-found\">\n	<div data-cms-area=\"error_management_page_not_found_cms_area_1\" data-cms-area-filters=\"path\"></div>\n\n    <div class=\"error-management-page-not-found-header\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":7,"column":8}}})) != null ? stack1 : "")
    + "\n	   <div id=\"main-banner\" class=\"error-management-page-not-found-main-banner\"></div>\n    </div>\n    <div id=\"page-not-found-content\" class=\"error-management-page-not-found-content\">\n    	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Sorry, we could not load the content you requested.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":5},"end":{"line":12,"column":72}}}))
    + "\n    </div>\n\n    <div data-cms-area=\"error_management_page_not_found_cms_area_2\" data-cms-area-filters=\"path\"></div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'error_management_page_not_found'; return template;});