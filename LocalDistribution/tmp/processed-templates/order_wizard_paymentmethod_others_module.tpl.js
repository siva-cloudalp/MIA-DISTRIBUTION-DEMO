define('order_wizard_paymentmethod_others_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n\n<div class=\"order-wizard-paymentmethod-others-module-list\" data-view=\"Others.List\"></div>\n<div class=\"order-wizard-paymentmethod-others-module-description\" data-view=\"External.Description\">\n	<!-- <p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You will be redirected to your external payment site after reviewing your order on next step. Once your order is placed, you will return to our site to see the confirmation of your purchase.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":9},"end":{"line":5,"column":215}}}))
    + "</p> -->\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_others_module'; return template;});