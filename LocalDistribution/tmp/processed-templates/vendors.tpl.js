define('vendors.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div class=\"vendor-flip-card-container-col\">\r\n				<div class=\"vendor-flip-card\">\r\n				  <div class=\"vendor-flip-card-inner\">\r\n					<div class=\"vendor-flip-card-front\" style=\"background-image:url("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"image") || (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":24,"column":69},"end":{"line":24,"column":78}}}) : helper)))
    + ")\">\r\n					</div>\r\n					<div class=\"vendor-flip-card-back\">\r\n					  <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":23}}}) : helper)))
    + "\" data-touchpoint=\"home\">More About "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":27,"column":59},"end":{"line":27,"column":67}}}) : helper)))
    + "</a>\r\n					  <p>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":25}}}) : helper)))
    + "</p>\r\n					</div>\r\n				  </div>\r\n				</div>\r\n			</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<p>No Vendors Available</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"vendors-container\">\r\n  <div class=\"vendors-image-container\">\r\n\r\n    <div class=\"vendors-image-container-overlay\"></div>\r\n    <div class=\"vendors-image-text-container\">\r\n      <div class=\"vendors-image-text-wrapper\">\r\n        <div class=\"vendors-image-left-text\">\r\n          <div data-cms-area=\"vendors_cms_area_1\" data-cms-area-filters=\"path\"></div>\r\n        </div>\r\n        <div class=\"vendors-image-right-text\">\r\n        <div data-cms-area=\"vendors_cms_area_2\" data-cms-area-filters=\"path\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n	<div class=\"vendor-flip-card-container\">\r\n		<div class=\"vendor-flip-card-container-row\">\r\n		\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"vendors") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":35,"column":11}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n\r\n</div>\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'vendors'; return template;});