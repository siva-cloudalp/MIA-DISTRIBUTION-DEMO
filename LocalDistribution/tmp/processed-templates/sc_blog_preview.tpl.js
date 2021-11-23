define('sc_blog_preview.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-sm-4\">\n	<div class=\"blog-preview-container\">\n		<a class=\"img-container\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":3,"column":33},"end":{"line":3,"column":40}}}) : helper)))
    + "\"><b>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"category") || (depth0 != null ? compilerNameLookup(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":3,"column":45},"end":{"line":3,"column":57}}}) : helper)))
    + "</b><img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"previewImage") || (depth0 != null ? compilerNameLookup(depth0,"previewImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewImage","hash":{},"data":data,"loc":{"start":{"line":3,"column":71},"end":{"line":3,"column":87}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"previewImageAlt") || (depth0 != null ? compilerNameLookup(depth0,"previewImageAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewImageAlt","hash":{},"data":data,"loc":{"start":{"line":3,"column":94},"end":{"line":3,"column":113}}}) : helper)))
    + "\"/></a>\n		<a class=\"post-content\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":39}}}) : helper)))
    + "\">\n				<span>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"datePublished") || (depth0 != null ? compilerNameLookup(depth0,"datePublished") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"datePublished","hash":{},"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":27}}}) : helper)))
    + "</span>\n				<h2>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":17}}}) : helper)))
    + "</h2>\n				"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"previewText") || (depth0 != null ? compilerNameLookup(depth0,"previewText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewText","hash":{},"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\n		</a>\n	</div>\n	<div class=\"post-by\">\n		<a><i class=\"user\"></i>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"author") || (depth0 != null ? compilerNameLookup(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":11,"column":25},"end":{"line":11,"column":35}}}) : helper)))
    + "</a><a><i class=\"likes\"></i> 0</a>\n	</div>\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetSuite/SC_Blog/1.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_preview'; return template;});