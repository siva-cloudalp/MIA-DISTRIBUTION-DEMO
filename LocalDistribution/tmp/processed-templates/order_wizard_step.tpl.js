define('order_wizard_step.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <header class=\"order-wizard-step-header\">\n            <h2 data-type=\"wizard-step-name-container\" class=\"order-wizard-step-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":22,"column":87},"end":{"line":22,"column":96}}}) : helper)))
    + "</h2>\n        </header>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<small class=\"order-wizard-step-message "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"bottomMessageClass") || (depth0 != null ? compilerNameLookup(depth0,"bottomMessageClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bottomMessageClass","hash":{},"data":data,"loc":{"start":{"line":35,"column":42},"end":{"line":35,"column":64}}}) : helper)))
    + "\">\n			"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"bottomMessage") || (depth0 != null ? compilerNameLookup(depth0,"bottomMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bottomMessage","hash":{},"data":data,"loc":{"start":{"line":36,"column":3},"end":{"line":36,"column":20}}}) : helper)))
    + "\n		</small>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<button class=\"order-wizard-step-button-continue\" data-action=\"submit-step\">\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"continueButtonLabel","hash":{},"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":44,"column":27}}}) : helper)))
    + "\n			</button>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "style=\"display:none;\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div data-action=\"skip-login-message\" class=\"order-wizard-step-guest-message\"></div>\n\n<div data-type=\"alert-placeholder-step\"></div>\n\n<div class=\"order-wizard-step-review-wrapper\">\n\n	<section class=\"order-wizard-step-review-main\">\n		<div id=\"wizard-step-review-left\"></div>\n	</section>\n\n	<section id=\"wizard-step-review-right\" class=\"order-wizard-step-review-secondary\">\n	</section>\n\n</div>\n\n<div class=\"order-wizard-step-content-wrapper\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":24,"column":11}}})) != null ? stack1 : "")
    + "\n    <section id=\"wizard-step-content-right\" class=\"order-wizard-step-content-secondary\">\n	</section>\n\n	<section id=\"wizard-step-content\" class=\"order-wizard-step-content-main\">\n	</section>\n\n	<div class=\"order-wizard-step-actions\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBottomMessage") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":2},"end":{"line":38,"column":9}}})) != null ? stack1 : "")
    + "\n		<div class=\"order-wizard-step-button-container\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":3},"end":{"line":46,"column":10}}})) != null ? stack1 : "")
    + "			<button class=\"order-wizard-step-button-back\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":49},"end":{"line":47,"column":107}}})) != null ? stack1 : "")
    + " data-action=\"previous-step\">\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":4},"end":{"line":48,"column":24}}}))
    + "\n			</button>\n		</div>\n	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_step'; return template;});