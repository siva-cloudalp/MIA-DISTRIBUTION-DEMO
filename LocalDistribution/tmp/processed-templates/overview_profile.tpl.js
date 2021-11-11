define('overview_profile.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<p class=\"overview-profile-company\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"companyName") || (depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"companyName","hash":{},"data":data,"loc":{"start":{"line":8,"column":40},"end":{"line":8,"column":55}}}) : helper)))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "overview-profile-name-title";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<article class=\"overview-profile\">\n	<div class=\"overview-profile-header\">\n		<h4>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Profile",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":29}}}))
    + "</h4>\n	</div>\n	<section class=\"overview-profile-card\">\n		<div class=\"overview-profile-card-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompany") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":9,"column":10}}})) != null ? stack1 : "")
    + "			<p class=\"overview-profile-name "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNameTitle") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":35},"end":{"line":10,"column":88}}})) != null ? stack1 : "")
    + "\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":10,"column":90},"end":{"line":10,"column":98}}}) : helper)))
    + "</p>\n			<p class=\"overview-profile-email\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":11,"column":37},"end":{"line":11,"column":46}}}) : helper)))
    + "</p>\n			<p class=\"overview-profile-phone\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"phone","hash":{},"data":data,"loc":{"start":{"line":12,"column":37},"end":{"line":12,"column":46}}}) : helper)))
    + "</p>\n		</div>\n		<div class=\"overview-profile-card-button-edit-container\">\n			<a class=\"overview-profile-card-button-edit\" href=\"/profileinformation\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Edit",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":75},"end":{"line":15,"column":95}}}))
    + "</a>\n		</div>\n	</section>\n</article>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_profile'; return template;});