{{!-- Edited for Horizon Theme --}}

{{!-- Edited for Manor Theme --}}

<nav class="header-menu-secondary-nav">


	<!--div class="header-menu-search">
			<button class="header-menu-search-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
					<i class="header-menu-search-icon"></i>
			</button>
	</div-->

	<ul class="header-menu-level1">

		{{#each categories}}
			{{#if text}}
				<li {{#if categories}}data-toggle="categories-menu"{{/if}}>
					<a class="{{class}}" {{objectToAtrributes this}}>
					{{#ifEquals id 'become-a-partner'}}<div class="button-primary button-medium">{{/ifEquals}}
					{{#ifEquals id 'shop'}}<div class="button-secondary button-medium">{{/ifEquals}}
						{{translate text}}
					{{#ifEquals id 'become-a-partner'}}</div>{{/ifEquals}}
					{{#ifEquals id 'shop'}}</div>{{/ifEquals}}
					</a>
					{{#if categories}}
					<ul class="header-menu-level-container">
						<li>
							<ul class="header-menu-level2">
								{{#each categories}}
								<li>
									<a class="{{class}}" {{objectToAtrributes this}}>
                                        {{#if thumbnailurl}}
										    <img src="{{resizeImage thumbnailurl 'thumbnail'}}" alt="{{name}}">
                                        {{/if}}
										<span>{{translate text}}</span>
									</a>
									{{#if categories}}
									<ul class="header-menu-level3">
										{{#each categories}}
										<li>
											<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
										</li>
										{{/each}}
									</ul>
									{{/if}}
								</li>
								{{/each}}
							</ul>
						</li>
					</ul>
					{{/if}}
				</li>
			{{/if}}
		{{/each}}
	</ul>
</nav>




{{!----
Use the following context variables when customizing this template:

	categories (Array)
	showExtendedMenu (Boolean)
	showLanguages (Boolean)
	showCurrencies (Boolean)

----}}
