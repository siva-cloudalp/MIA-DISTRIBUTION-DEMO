define('overview_home.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"has_main_banner_item") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a data-hashtag=\"/product/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"main_banner_item") || (depth0 != null ? compilerNameLookup(depth0,"main_banner_item") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main_banner_item","hash":{},"data":data,"loc":{"start":{"line":4,"column":28},"end":{"line":4,"column":48}}}) : helper)))
    + "\" data-touchpoint=\"home\" target=\"_blank\" class=\"marketing-banners\"><img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"main_banner") || (depth0 != null ? compilerNameLookup(depth0,"main_banner") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main_banner","hash":{},"data":data,"loc":{"start":{"line":4,"column":125},"end":{"line":4,"column":140}}}) : helper)))
    + "\"/></a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"main_banner_url") || (depth0 != null ? compilerNameLookup(depth0,"main_banner_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main_banner_url","hash":{},"data":data,"loc":{"start":{"line":6,"column":11},"end":{"line":6,"column":30}}}) : helper)))
    + "\"  target=\"_blank\" class=\"marketing-banners\"><img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"main_banner") || (depth0 != null ? compilerNameLookup(depth0,"main_banner") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main_banner","hash":{},"data":data,"loc":{"start":{"line":6,"column":85},"end":{"line":6,"column":100}}}) : helper)))
    + "\"/></a>	\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n		<table class=\"overview-home-orders-list-table\">\n				<thead class=\"overview-home-content-table\">\n					<tr class=\"overview-home-content-table-header-row\">\n						<th class=\"overview-home-content-table-header-row-title\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchase No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":13},"end":{"line":22,"column":41}}}))
    + "</span>\n						</th>\n						<th class=\"overview-home-content-table-header-row-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":13},"end":{"line":25,"column":33}}}))
    + "</span>\n						</th>\n						<th class=\"overview-home-content-table-header-row-currency\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":13},"end":{"line":28,"column":35}}}))
    + "</span>\n						</th>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "						<!--th class=\"overview-home-content-table-header-row-track\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Track Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":13},"end":{"line":40,"column":40}}}))
    + "</span>\n						</th-->\n					</tr>\n				</thead>\n				<tbody class=\"overview-home-purchases-list\" data-view=\"Order.History.Results\"></tbody>\n			</table>\n\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "							<th class=\"overview-home-content-table-header-row-origin\">\n								<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Origin",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":32,"column":14},"end":{"line":32,"column":36}}}))
    + "</span>\n							</th>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "							<th class=\"overview-home-content-table-header-row-status\">\n								<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":14},"end":{"line":36,"column":36}}}))
    + "</span>\n							</th>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"overview-home-orders-empty-section\">\n				<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any purchases in your account right now.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":8},"end":{"line":49,"column":80}}}))
    + "</h5>\n			</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"overview-home-header-links\">\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Need Help? Contact <a href=\"$(0)\">Customer Service</a>",(depth0 != null ? compilerNameLookup(depth0,"customerSupportURL") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":74,"column":2},"end":{"line":74,"column":91}}}))
    + "\n	</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"overview-home\">\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"marketingBanners") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + "	<div data-view=\"Overview.Reports\"></div>\n	<div class=\"overview-home-orders\" data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data,"loc":{"start":{"line":10,"column":53},"end":{"line":10,"column":77}}}) : helper)))
    + "\">\n		<div class=\"overview-home-orders-title\">\n			<h3>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Recent Purchases",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":7},"end":{"line":12,"column":39}}}))
    + "</h3>\n			<a href=\"/purchases\" class=\"overview-home-orders-title-link\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View Purchase History",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":64},"end":{"line":13,"column":101}}}))
    + "</a>\n		</div>\n		<div class=\"overview-home-order-history-results-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":51,"column":9}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</section>\n\n<section class=\"overview-home-mysettings\">\n	<h3>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":57,"column":5},"end":{"line":57,"column":32}}}))
    + "</h3>\n	<div class=\"overview-home-mysettings-row\">\n		<div class=\"overview-home-mysettings-profile\">\n			<div data-view=\"Overview.Profile\"></div>\n		</div>\n		<div class=\"overview-home-mysettings-shipping\">\n			<div data-view=\"Overview.Shipping\"></div>\n		</div>\n		<div class=\"overview-home-mysettings-payment\">\n			<div data-view=\"Overview.Payment\"></div>\n		</div>\n	</div>\n</section>\n<div data-view=\"Overview.Banner\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCustomerSupportURL") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":0},"end":{"line":76,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_home'; return template;});