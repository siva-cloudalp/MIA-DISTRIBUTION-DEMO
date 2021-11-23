define('login_register_login.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " autofocus ";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\r\n				<div class=\"login-register-login-form-controls\" data-validation=\"control\">\r\n					<input value=\"true\" type=\"hidden\" name=\"redirect\">\r\n				</div>\r\n			</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"GlobalMessageSessionTimeout\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<script src=\"https://www.google.com/recaptcha/api.js\"></script>\r\n\r\n<form class=\"login-register-login-form\" novalidate>\r\n	<fieldset class=\"login-register-login-form-fieldset\">\r\n		<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\r\n			<div class=\"login-register-login-form-controls\" data-validation=\"control\">\r\n				<input "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasAutoFocus") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":11},"end":{"line":19,"column":49}}})) != null ? stack1 : "")
    + " type=\"email\" name=\"email\" id=\"login-email\" class=\"login-register-login-form-input\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"* Email Address.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":146},"end":{"line":19,"column":178}}}))
    + "\"/>\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\r\n			<div class=\"login-register-login-form-controls\" data-validation=\"control\">\r\n				<input type=\"password\" name=\"password\" id=\"login-password\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"* Password.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":76},"end":{"line":28,"column":103}}}))
    + "\"class=\"login-register-login-form-input\">\r\n			</div>\r\n		</div>\r\n\r\n		<div data-view=\"Login.CustomFields\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":2},"end":{"line":40,"column":9}}})) != null ? stack1 : "")
    + "\r\n		<div data-type=\"alert-placeholder\" class=\"login-register-login-form-messages\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isUserSessionTimedOut") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":3},"end":{"line":45,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	<div class=\"container-recaptcha\">\r\n        <div class=\"g-recaptcha\" data-sitekey=\"6LcJIFAdAAAAAL7dUX5_yRJI7I4arROEY8ChQpEQ\"></div>\r\n    </div>\r\n		<div class=\"login-register-login-form-controls-group login-button1 desktop-site\" data-type=\"form-login-action\">\r\n             <div class=\"login-eff-1\"></div>\r\n			<button type=\"submit\" class=\"login-register-login-submit anchor-1\" data-action=\"login-button\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Submit",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":4},"end":{"line":53,"column":26}}}))
    + "\r\n			</button>\r\n		</div>\r\n		<div class=\"login-register-login-form-controls-group login-button2 mobile-site\" data-type=\"form-login-action\">\r\n             <div class=\"login-eff-2\"></div>\r\n			<button type=\"submit\" class=\"login-register-login-submit anchor-2\" data-action=\"login-button\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Login",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":59,"column":4},"end":{"line":59,"column":25}}}))
    + "\r\n			</button>\r\n         \r\n		</div>\r\n		<div id=\"alert-placeholder\" >\r\n				    <p class=\"alert-type\" data-id=\"alert-type\" data-type=\"alert-placeholder\"></p>\r\n				 </div>\r\n	</fieldset>\r\n</form>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_login'; return template;});