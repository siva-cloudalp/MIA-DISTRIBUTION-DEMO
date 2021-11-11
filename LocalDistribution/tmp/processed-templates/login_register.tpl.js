define('login_register.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " class=\"login-register-body\" ";
},"3":function(container,depth0,helpers,partials,data) {
    return " class=\"login-register-body-colored\" ";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"login-register-wrapper-column-login\">\n				<div class=\"login-register-wrapper-login\" data-view=\"Login\"></div>\n			</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\" row login-page-content\">\n<section class=\"login-register col-sm-6\" >\n  <h1 class=\"login-page-content-heading\">Howdy Partner,</h1>\n	   <h1 class=\"login-page-content-heading-2\">Welcome Back.</h1>\n    \n	<div "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":107}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLogin") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":21,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n	\n\n\n\n	<div data-cms-area=\"home_cms_main_content\" data-cms-area-filters=\"path\"></div>\n\n\n\n    <div class=\"register-page-redirect-link\">\n			<p class=\"not-a-partner\">Not a Partner? <a class=\"login-redirect-register\" data-touchpoint=\"\" data-hashtag=\"\"> Click Here</a> To start Your Journey </p>\n		</div>\n \n</section>\n<div class=\"col-sm-6 login-page-image-form\">\n      <div class=\"login-page-image-field\">\n        <img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,"img/login-main-img-content.png",(depths[1] != null ? compilerNameLookup(depths[1],"imageHomeSize") : depths[1]),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":146,"column":39},"end":{"line":146,"column":102}}}),{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":146,"column":18},"end":{"line":146,"column":104}}}))
    + "\" alt=\"demo-get in touch\">\n      </div>\n    </div>\n</div>\n\n\n\n    <div class=\"home-main-hr1\"><hr class=\"embeded-hr-content\"></div>\n\n\n\n      <div class=\"row find-the-location-content-login\">\n        <div class=\"main-content-of-location-content-login\">\n          <div class=\"col-sm-4 location-heading-text-content-component-login\">\n            <div class=\"location-heading-content-component-login\">\n             <h2 class=\"heading-1-location-login\">Find a Location</h2>\n              <h2 class=\"heading-2-location-login\">Right for You</h2>\n              </div>\n             <p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Book a time at one of our experience centres and explore UC solutions accross small mediam and large rooms.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":167,"column":16},"end":{"line":167,"column":139}}}))
    + "</p>\n              <div class=\"about-us-button12-login\">\n             <div class=\"about-us-eff-12-login\"></div>\n             <a href=\"#\" class=\"anchor12-login\" > Get In Touch </a>\n            </div>\n          </div>\n          <div class=\"col-sm-4 sydney-office-content1-login\">\n            <div class=\"sydney-office-text-content-login\">\n              <h2 class=\"sydney-heading-location-login\"><span class=\"highlited-span-content-login\">Sydney </span>Office &</h2>\n              <h2 class=\"component-login\"> Experience Centre</h2> \n            </div>\n            <p>Unit 4/7-9 Orion Rd,\n               Lane Cove West,\n              Sydney Australia, NSW 2066</p>\n              <div class=\"sydney-map-content1-login\">\n                <img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,"img/login-map-2.png",(depths[1] != null ? compilerNameLookup(depths[1],"imageHomeSize") : depths[1]),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":182,"column":47},"end":{"line":182,"column":99}}}),{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":182,"column":26},"end":{"line":182,"column":101}}}))
    + "\" alt=\"sydney map\">\n              </div>\n          </div>\n          <div class=\"col-sm-4 mailborney-office-content1-login\">\n            <div class=\"mailborney-office-text-content-login\">\n              <h2 class=\"melborney-heading-content-1-login\"><span class=\"highlited-span-content-login\">Melbourne </span>Office &  </h2>\n              <h2 class=\"melborney-heading-content-2-login\"> Experience Centre</h2>\n             </div>\n            <p>Pier 35 – Suite P1A,\n             263-329 Lorimer Street,\n            Port Melbourne, VIC 3207</p>\n              <div class=\"mailborney-map-content1-login\">\n                <img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,"img/login-map-1.png",(depths[1] != null ? compilerNameLookup(depths[1],"imageHomeSize") : depths[1]),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":194,"column":47},"end":{"line":194,"column":99}}}),{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":194,"column":26},"end":{"line":194,"column":101}}}))
    + "\" alt=\"mailborney map\">\n              </div>\n          </div>\n        </div>\n\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/sca/Suite_Commerce_Base_Theme/21.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register'; return template;});