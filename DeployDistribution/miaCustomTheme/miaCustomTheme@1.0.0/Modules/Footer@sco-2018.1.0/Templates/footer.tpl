{{!-- Edited for Horizon Theme --}}

<section class="footer-wrapper"{{#if extraFooterView.backgroundUrl}} style="background-image: url('{{getThemeAssetsPath extraFooterView.backgroundUrl}}');"{{/if}}>

	<div data-view="Global.BackToTop"></div>
	<div id="banner-footer" class="content-banner banner-footer" data-cms-area="global_banner_footer" data-cms-area-filters="global"></div>

	<div class="footer-content">

		<div class="footer-content-bottom">
            <div class="footer-content-copyright">
				{{#if isChannelUc}}
					{{#with extraFooterView.copyright}}
						{{translate '&copy; $(0) Channel UC.' currentYear}}
					{{/with}}
				{{else}}
					{{#with extraFooterView.copyright}}
		                {{#unless hide}}
		                    {{#if showRange}}
		                        {{translate '&copy; $(0) &#8211; $(1) $(2)' initialYear currentYear companyName}}
		                        <!-- an en dash &#8211; is used to indicate a range of values -->
		                    {{else}}
		                        {{translate '&copy; $(0) $(1)' currentYear companyName}}
		                    {{/if}}
		                {{/unless}}
					{{else}}
						{{translate '&copy; 2008-2018 Company Name'}}
		            {{/with}}
				{{/if}}
            </div>
            <div class="footer-extra-info">
            	{{#unless isChannelUc}}
					{{#if extraFooterView.socialMediaLinks}}
						<div class="footer-content-social">
							<ul class="footer-content-social-list">
							{{#each extraFooterView.socialMediaLinks}}
								<li><a {{objectToAtrributes item}} data-hashtag="{{datahashtag}}" data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}" class="footer-content-social-link" target="_blank">{{#if icon}}<i class="footer-content-social-icon icon-{{icon}}"></i>{{else}}{{text}}{{/if}}</a></li>
							{{/each}}
							</ul>
						</div>
					{{/if}}
				{{/unless}}
            </div>
        </div>
	</div>

</section>

{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)

----}}
