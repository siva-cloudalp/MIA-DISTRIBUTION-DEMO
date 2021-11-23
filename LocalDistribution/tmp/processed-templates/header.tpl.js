define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"header-main-wrapper"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChannelUc") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":79}}})) != null ? stack1 : "")
    + "\">\n    <nav class=\"header-main-nav\">\n\n        <div class=\"header-sidebar-toggle-wrapper\">\n            <button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n                <i class=\"header-sidebar-toggle-icon\"></i>\n            </button>\n        </div>\n\n        <div class=\"header-content\">\n            <!--div class=\"header-logo-wrapper\">\n                <div data-view=\"Header.Logo\"></div>\n            </div-->\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChannelUc") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":33,"column":14}}})) != null ? stack1 : "")
    + "\n            <div class=\"header-right-menu\">\n                <ul class=\"header-right-menu-options\">\n                    <!--li class=\"header-menu-storelocator-list-item\" data-view=\"StoreLocatorHeaderLink\"></li>\n                    <li data-view=\"RequestQuoteWizardHeaderLink\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Request a Quote",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":65},"end":{"line":38,"column":96}}}))
    + "</li-->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":20},"end":{"line":55,"column":27}}})) != null ? stack1 : "")
    + "                    <!--li data-view=\"QuickOrderHeaderLink\"></li-->\n                </ul>\n                \n\n                <!--div class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></div>\n                <div class=\"header-menu-searchmobile\">\n                    <button class=\"header-menu-searchmobile-link\" data-action=\"show-sitesearch\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":62,"column":103},"end":{"line":62,"column":125}}}))
    + "\">\n                        <i class=\"header-menu-searchmobile-icon\"></i>\n                    </button>\n                </div-->\n				\n            </div>\n\n        </div>\n    </nav>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " ischanneluc-subheader";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <div class=\"header-left-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":31,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<div class=\"footer-content-social\">\n						<ul class=\"footer-content-social-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":25,"column":15}}})) != null ? stack1 : "")
    + "						</ul>\n					</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "							<li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":24,"column":14},"end":{"line":24,"column":41}}}))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":24,"column":56},"end":{"line":24,"column":71}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":24,"column":90},"end":{"line":24,"column":108}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":24,"column":123},"end":{"line":24,"column":137}}}) : helper)))
    + "\" class=\"footer-content-social-link\" target=\"_blank\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":24,"column":190},"end":{"line":24,"column":281}}})) != null ? stack1 : "")
    + "</a></li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"footer-content-social-icon icon-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"icon") || (depth0 != null ? compilerNameLookup(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":24,"column":244},"end":{"line":24,"column":252}}}) : helper)))
    + "\"></i>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":24,"column":266},"end":{"line":24,"column":274}}}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1), depth0))
    + "</p>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "                        <li class=\"header-subheader-settings\">\n                            <a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":41,"column":109},"end":{"line":41,"column":133}}}))
    + "\">\n                                <i class=\"header-menu-settings-icon\"></i>\n                                <i class=\"header-menu-settings-carret\"></i>\n                            </a>\n                            <div class=\"header-menu-settings-dropdown\">\n                                <h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":80},"end":{"line":46,"column":109}}}))
    + "</h5>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":32},"end":{"line":49,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":32},"end":{"line":52,"column":39}}})) != null ? stack1 : "")
    + "                            </div>\n                        </li>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                                    <div data-view=\"Global.HostSelector\"></div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "                                    <div data-view=\"Global.CurrencySelector\"></div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "	  <div class=\"login-and-cart\">\n		<div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\n		<div class=\"header-menu-cart\">\n			<div class=\"header-menu-cart-dropdown\">\n				<div data-view=\"Header.MiniCart\"></div>\n			</div>\n		</div>\n	</div>\n	  <div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChannelUcUserNotLogin") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":72,"column":11}}})) != null ? stack1 : "")
    + "	<div class=\"logo-and-menu\">\n	  <div class=\"header-logo-wrapper\">\n		  <div data-view=\"Header.Logo\"></div>\n	  </div>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChannelUcUserNotLogin") : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":3},"end":{"line":87,"column":13}}})) != null ? stack1 : "")
    + "	</div>\n	\n\n<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\n\n<div class=\"header-site-search\" data-view=\"SiteSearch\" data-type=\"SiteSearch\"></div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});