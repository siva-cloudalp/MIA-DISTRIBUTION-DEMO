define('become_a_partner.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"become-a-partner-main-content\">\n    <div class=\"become-a-partner-container-content-top\">\n        <div class=\"become-a-partner-top-content-row\">\n	        <div class=\"become-a-partner-text-top-content\">\n			    <h2 class=\"have-a-question-content\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Have any Questions?",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":43},"end":{"line":6,"column":78}}}))
    + "</h2>\n				<h1 class=\"heading-chat-to-head-content\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Chat to our Customer Success Team",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":45},"end":{"line":7,"column":94}}}))
    + "</h1>\n                \n				<p class=\"content-p-component\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":35},"end":{"line":9,"column":308}}}))
    + "</p>\n			    \n      <div class=\"vendors-desktop-button\">\n\n      <div class=\"vendors-yealink-btn  become-btn\">\n      <div class=\"vendors-us-eff-1\"></div>\n      <a href=\"#\" class=\"anchor3 anchor3-become\" > Contact </a>\n      </div>\n\n     <div class=\"vendors-yealink-btn1 become-btn1\">\n      <div class=\"vendors-us-eff-2\"></div>\n      <a href=\"#\" class=\"anchor4 anchor4-become\" >Become a partner</a>\n     </div>\n\n     </div>\n\n      <div class=\"vendors-mobile-button\">\n\n      <div class=\"vendors-yealink-btn  become-btn\">\n      <div class=\"vendors-us-eff-1\"></div>\n      <a href=\"#\" class=\"anchor3 anchor3-become\" >Get in Touch</a>\n      </div>\n\n     <div class=\"vendors-yealink-btn1 become-btn1\">\n      <div class=\"vendors-us-eff-2\"></div>\n      <a href=\"#\" class=\"anchor4 anchor4-become\" >See Vendors</a>\n     </div>\n     \n     </div>\n\n			</div>\n		        <div class=\"become-a-partner-img-top-content\">\n		            <div class=\"become-a-partner-image-container\">\n		              <img src=\"/images/Mia distribution/become-a-partner/become_a_partner.png\" alt=\"miadistribution images\">\n			        </div>\n				</div>\n		    </div>\n	    </div>\n\n    </div>\n</div>\n<div class=\"become_a_partner_form\">\n<form method=\"POST\" novalidate class=\"become-a-partner-form-field\">\n<div class=\"become-a-partner-company-details row\">\n<h1 class=\"become-a-partner-h1\">Company Details</h1>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Company Name*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"companyname\" >\n		   </div>\n\n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field  become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >ABN*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"abn\">\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Business Phone</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"businessphone\" >\n		   </div>\n       \n</div>\n\n</div>\n\n\n<div class=\"become-a-partner-company-address row\">\n<h1 class=\"become-a-partner-h1\">Address</h1>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Address Line 1*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"addressline1\" >\n		   </div>\n\n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field  become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Address Line 2*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"addressline2\">\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >City*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"city\" >\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Zip/Postal Code*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"zippostalcode\" >\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Territory*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"territory\" >\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Country*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"country\" >\n		   </div>\n       \n</div>\n\n</div>\n\n\n\n<div class=\"become-a-partner-company-Contact-Details row\">\n<h1 class=\"become-a-partner-h1\">Contact Details</h1>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >First Name*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"firstname\" >\n		   </div>\n\n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field  become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Last Name*</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"lastname\">\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Job Title</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"jobtitle\" >\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Email*</lable>\n      <input class=\"become-a-partner-input\" type=\"email\" name=\"email\" >\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Phone Number</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"phonenumber\" >\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Login Email*</lable>\n      <input class=\"become-a-partner-input\" type=\"email\" name=\"loginmail\" >\n		   </div>\n       \n</div>\n\n</div>\n\n<div class=\"become-a-partner-Partner-Information row\">\n<h1 class=\"become-a-partner-h1\">Partner Information</h1>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Products of Interest*</lable>\n      <input class=\"become-a-partner-input input-area\" type=\"text\" name=\"productsofinterest\" >\n		   </div>\n\n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field  become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Where did you hear about us?</lable>\n      <input class=\"become-a-partner-input\" type=\"text\" name=\"question\">\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Current Distributor Relationship*</lable>\n      <select class=\"same-select-field\">\n      <option value=\"\" selected>Select an Options</option>\n      <option value=\"\"></option>\n      <option value=\"\"></option>\n      </select>\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Brands Sold/of Interest*</lable>\n      <select  class=\"same-select-field\">\n      <option value=\"\" selected>Choose Brands</option>\n      <option value=\"\"></option>\n      <option value=\"\"></option>\n      </select>\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Customer Market Segment*</lable>\n      <select  class=\"same-select-field\">\n      <option value=\"\" selected>Choose Brands</option>\n      <option value=\"\"></option>\n      <option value=\"\"></option>\n      </select>\n		   </div>\n       \n</div>\n\n<div class=\"input-field\" data-validation=\"control-group\">\n		  <div class=\"lastname-field become-a-partner-input-box\" data-validation=\"control\">\n      <lable class=\"become-a-partner-lable\" for=\"\" >Customer Industry Type*</lable>\n       <select  class=\"same-select-field\">\n      <option value=\"\" selected>Choose Brands</option>\n      <option value=\"\"></option>\n      <option value=\"\"></option>\n      </select>\n		   </div>\n       \n</div>\n <div class=\"become-btn\">\n<div class=\"submit-button-content become-a-partner-btn\"><a class=\"submit-home-button\" data-action=\"submitcontent\">Submit</a></div>\n</div>\n</div>\n</form>\n<div id=\"alert-placeholder\"><p class=\"alert-type\" data-type=\"alert-placeholder\"></p></div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'become_a_partner'; return template;});