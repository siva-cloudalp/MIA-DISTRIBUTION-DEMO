define('receipt_details_item_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<span class=\"receipt-details-item-summary-label\">Quantity</span>: <span class=\"receipt-details-item-summary-quantity\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":5},"end":{"line":3,"column":159}}}))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<p>\n			<span>"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAmountLabel") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":8,"column":9},"end":{"line":8,"column":148}}})) != null ? stack1 : "")
    + "</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDiscount") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":20,"column":10}}})) != null ? stack1 : "")
    + "		</p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"amount_label") : stack1), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<span class=\"receipt-details-item-summary-label\">Amount</span>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":61},"end":{"line":8,"column":139}}}))
    + ": ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<span class=\"receipt-details-item-summary-non-discounted-amount\">\n					"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAmount") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":11,"column":5},"end":{"line":11,"column":63}}})) != null ? stack1 : "")
    + "\n				</span>\n				<span class=\"receipt-details-item-summary-amount\">\n					"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAmount") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":14,"column":5},"end":{"line":14,"column":62}}})) != null ? stack1 : "")
    + "\n				</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"amountFormatted","hash":{},"data":data,"loc":{"start":{"line":11,"column":23},"end":{"line":11,"column":42}}}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    return "&nbsp;";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"totalFormatted","hash":{},"data":data,"loc":{"start":{"line":14,"column":23},"end":{"line":14,"column":41}}}) : helper)));
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<span class=\"receipt-details-item-summary-amount\">\n					"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showAmount") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":18,"column":5},"end":{"line":18,"column":63}}})) != null ? stack1 : "")
    + "\n				</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"receipt-details-item-summary\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isDiscountType") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAmount") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":1},"end":{"line":22,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'receipt_details_item_summary'; return template;});