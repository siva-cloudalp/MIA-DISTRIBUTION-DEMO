define('jabra.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"jabra-container\">\r\n  <div class=\"jabra-image-container\">\r\n\r\n    <div class=\"jabra-image-container-overlay\"></div>\r\n    <div class=\"jabra-image-text-container\">\r\n      <div class=\"jabra-image-text-wrapper\">\r\n        <div class=\"jabra-image-left-text\">\r\n          <div data-cms-area=\"jabra_cms_area_1\" data-cms-area-filters=\"path\"></div>\r\n        </div>\r\n        <div class=\"jabra-image-right-text\">\r\n          <div data-cms-area=\"jabra_cms_area_2\" data-cms-area-filters=\"path\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"jabra-content-container\">\r\n  <div class=\"jabra-content-container-row\">\r\n     <div class=\"jabra-content-container-col text\">\r\n       <div data-cms-area=\"jabra_cms_area_3\" data-cms-area-filters=\"path\"></div>\r\n       <div data-cms-area=\"jabra_cms_area_4\" data-cms-area-filters=\"path\"></div>\r\n     </div>\r\n     <div class=\"jabra-content-container-col\">\r\n       <div class=\"\" data-cms-area=\"jabra_cms_area_5\" data-cms-area-filters=\"path\">\r\n       </div>\r\n     </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"jabra-middle-container\">\r\n  <div data-cms-area=\"jabra_cms_area_6\" data-cms-area-filters=\"path\"></div>\r\n  <div data-cms-area=\"jabra_cms_area_7\" data-cms-area-filters=\"path\"></div>\r\n  <div class=\"\"  data-cms-area=\"jabra_cms_area_8\" data-cms-area-filters=\"path\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"jabra-content-container\">\r\n  <div class=\"jabra-content-container-row\">\r\n    <div class=\"jabra-content-container-col text\">\r\n      <div data-cms-area=\"jabra_cms_area_9\" data-cms-area-filters=\"path\"></div>\r\n      <div data-cms-area=\"jabra_cms_area_10\" data-cms-area-filters=\"path\"></div>\r\n    </div>\r\n    <div class=\"jabra-content-container-col\">\r\n      <div class=\"\" data-cms-area=\"jabra_cms_area_11\" data-cms-area-filters=\"path\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</div>\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/miaCustomTheme/miaCustomTheme/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'jabra'; return template;});