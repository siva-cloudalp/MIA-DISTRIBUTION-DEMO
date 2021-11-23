define('transaction_line_views_price.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"transaction-line-views-price\">\n		<span class=\"cart-lines-price-label\">Price:</span>\n	<span class=\"transaction-line-views-price-exact\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/Offer\">\n		<meta itemprop=\"priceCurrency\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyCode","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":58}}}) : helper)))
    + "\"/>\n		<span class=\"transaction-line-views-price-lead\" itemprop=\"price\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":6,"column":78},"end":{"line":6,"column":87}}}) : helper)))
    + "\">\n			"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rateFormatted") || (depth0 != null ? compilerNameLookup(depth0,"rateFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rateFormatted","hash":{},"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":7,"column":20}}}) : helper)))
    + "\n	</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + "		<link itemprop=\"availability\" href=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":14,"column":38},"end":{"line":14,"column":125}}})) != null ? stack1 : "")
    + "\"/>\n	</span>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<small class=\"transaction-line-views-price-old\">\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comparePriceFormatted","hash":{},"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":29}}}) : helper)))
    + "\n			</small>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/InStock";
},"6":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/OutOfStock";
},"8":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"transaction-line-views-price-login-to-see-prices\">\n		<p class=\"transaction-line-views-price-message\">\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a href=\"$(0)\" data-navigation=\"ignore-click\">Log in</a> to see price",(depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":20,"column":97}}}))
    + "\n		</p>\n	</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'transaction_line_views_price'; return template;});