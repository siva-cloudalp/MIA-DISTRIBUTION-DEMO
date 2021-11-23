{{!-- Edited for Horizon Theme --}}
{{#if showResults}}
{{#if isCategory}}
<!-- for 1st level -->
<div data-view="Facets.Browse.CategoryHeading" class="facets-facet-browse-category-heading"></div>
{{/if}}
{{/if}}
<section class="facets-facet-browse facets-display-format-vertically">
	<div data-cms-area="item_list_banner" data-cms-area-filters="page_type"></div>

	{{#if showResults}}
		<div class="facets-facet-browse-content">

            {{#if isCategory}}
                <div class="facets-facet-browse-category row">
                    <!-- div data-view="Facets.Browse.CategoryHeading" class="facets-facet-browse-category-heading"></div -->
					
					{{#if hasSubcategories}}
					<div class="col-sm-3">
						<div class="know-inventory"><a href="/inventory-availability">Click here to know inventory availability</a></div>
						<div data-view="FacetsSideBar"></div>
						<div data-view="CartSidebar"></div>
						{{#with marketingBanners}}
							<a data-hashtag="/product/{{side_banner_item}}" data-touchpoint="home" target="_blank" class="marketing-banners"><img src="{{side_banner}}"/></a>
						{{/with}}
					</div>
					{{/if}}
                    <div class="facets-facet-browse-category-cells-container col-sm-9" id="categories_section">
						{{#if hasSubcategories}}
						<div class="categories-section-heading">
							<h3>CATEGORY</h3>
							<div class="devider-gradient"></div>
						</div>
						{{/if}}
                        <div data-view="Facets.CategoryCells" class="facets-facet-browse-category-cells"></div>
                    </div>
                </div>
            {{/if}}

			<div class="facets-facet-browse-facets" data-action="pushable" data-id="product-search-facets">

				<div data-cms-area="facet_navigation_top" data-cms-area-filters="page_type"></div>
				{{#unless hasSubcategories}}
					<div class="know-inventory"><a href="/inventory-availability">Click here to know inventory availability</a></div>
					<div data-view="FacetsSideBar"></div>
					<div data-view="CartSidebar"></div>
					{{#with marketingBanners}}
						<a data-hashtag="/product/{{side_banner_item}}" data-touchpoint="home" target="_blank" class="marketing-banners"><img src="{{side_banner}}"/></a>
					{{/with}}
				{{/unless}}
				<div data-view="Facets.FacetedNavigation" data-exclude-facets="commercecategoryname,category" class="facets-faceted-navigation-data-view"></div>

			</div>

			<!--
			Sample of how to add a particular facet into the HTML. It is important to specify the data-facet-id="<facet id>"
			properly <div data-view="Facets.FacetedNavigation.Item" data-facet-id="custitem1"></div>
			 -->

			<div class="facets-facet-browse-results" itemscope="" itemtype="https://schema.org/ItemList">

		<header class="facets-facet-browse-header">

					{{#if showItems}}
			<div class="facets-facet-browse-title" data-quantity="{{total}}">
				{{#if keywords}}
					{{#if isTotalProductsOne}}
						{{translate '1 Result for <span class="facets-facet-browse-title-alt">$(0)</span>' keywords}}
					{{else}}
						{{translate '$(0) Results for <span class="facets-facet-browse-title-alt">$(1)</span>' total keywords}}
					{{/if}}
				{{else}}
					{{#if isTotalProductsOne}}
						{{translate 'Showing 1 Product'}}
					{{else}}
						{{translate 'Showing $(0) Products' total}}
					{{/if}}
				{{/if}}
			</div>

			<nav class="facets-facet-browse-list-header">


				<!--div class="facets-facet-browse-list-header-actions" data-view="Facets.ItemListDisplaySelector"></div-->

				<div class="facets-facet-browse-list-header-expander">
					<button class="facets-facet-browse-list-header-expander-button collapsed" data-toggle="collapse" data-target="#list-header-filters" aria-expanded="true" aria-controls="list-header-filters">
						{{translate 'Sort & Filter'}}
						<i class="facets-facet-browse-list-header-expander-icon"></i>
					</button>
				</div>

				<div class="facets-facet-browse-list-header-filters collapse" id="list-header-filters">
					<div class="facets-facet-browse-list-header-filters-wrapper">

						<div class="facets-facet-browse-list-header-filters-row">

							<div class="facets-facet-browse-list-header-filter-column" data-view="Facets.ItemListShowSelector">
							</div>

							<div class="facets-facet-browse-list-header-filter-column" data-view="Facets.ItemListSortSelector">
							</div>

							{{#if hasItemsAndFacets}}
								<div class="facets-facet-browse-list-header-filter-column">
									<button class="facets-facet-browse-list-header-filter-facets" data-type="sc-pusher" data-target="product-search-facets">
										{{translate 'Narrow By'}}
										<i class="facets-facet-browse-list-header-filter-facets-icon"></i>
									</button>
								</div>
							{{/if}}
						</div>

					</div>
				</div>
			</nav>
					{{/if}}
		</header>

					<meta itemprop="name" content="{{title}}"/>
					<div data-cms-area="facets_facet_browse_cms_area_1" data-cms-area-filters="page_type"></div>

					<div id="banner-section-top" class="content-banner banner-section-top" data-cms-area="item_list_banner_top" data-cms-area-filters="path"></div>


				{{#if showItems}}
					<div class="facets-facet-browse-narrowedby" data-view="Facets.FacetsDisplay"></div>

					{{#if isEmptyList}}
						<div data-view="Facets.Items.Empty"></div>
					{{else}}
						<div class="facets-facet-browse-items" data-view="Facets.Items"></div>
					{{/if}}
				{{/if}}
			</div>
		</div>
			<div class="facets-facet-browse-pagination" data-view="GlobalViews.Pagination">
			</div>

			<div class="facets-facet-browse-cms-area-2" data-cms-area="facets_facet_browse_cms_area_2" data-cms-area-filters="page_type"></div>

	{{else}}
		<div class="facets-facet-browse-empty-items" data-view="Facets.Items.Empty"></div>
	{{/if}}

	<div id="banner-section-bottom" class="content-banner banner-section-bottom facets-facet-browse-banner-section-bottom" data-cms-area="item_list_banner_bottom" data-cms-area-filters="page_type"></div>
</section>
<!-- for 1st level -->
{{#if featuredItem}}
<div class="featured-item-section" id="featured_item_section">
	<div class="row">
	<div class="col-sm-6">
	<h3>FEATURED PRODUCT</h3>
	<div class="devider-gradient"></div>
	<h2>{{featuredItem.name}}</h2>
	<p>{{featuredItem.desc}}</p>
	<div>{{{featuredItem.featuredDesc}}}</div>
	<div class="animated-button-custom">
		<a class="nectar-button large regular extra-color-gradient-1" href="{{featuredItem.url}}">
			<span class="start">BUY NOW</span>
			<span class="hover">BUY NOW</span>
		</a>
	</div>
	</div>
	<div class="col-sm-6">
	{{#if featuredItem.image}}
		<img src="{{featuredItem.image.url}}" alt="{{featuredItem.image.altimagetext}}"/>
	{{/if}}
	</div>
	</div>
</div>
{{/if}}
<div class="video-section row" id="featured_video_section">
	<div class="col-sm-6">
		{{#if videoUrl}}
			<iframe width="100%" height="379" src="{{videoUrl}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
		{{/if}}
	</div>
	<div class="col-sm-6">
		{{#if videoImage}}
			<img src="{{videoImage}}" alt="featured-video-image"/>
		{{/if}}
	</div>
</div>
{{!----
Use the following context variables when customizing this template:

	total (Number)
	isTotalProductsOne (Boolean)
	title (String)
	hasItemsAndFacets (Boolean)
	collapseHeader (Boolean)
	keywords (undefined)
	showResults (Boolean)
	isEmptyList (Boolean)
	isCategory (Boolean)
	showItems (Number)

----}}
