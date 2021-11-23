{{!-- Edited for Horizon Theme --}}

<div class="product-views-price">
	{{#if isPriceEnabled}}
		{{#if isPriceRange}}
			<span class="product-views-price-range" itemprop="offers" itemscope itemtype="https://schema.org/AggregateOffer">
				<meta itemprop="priceCurrency" content="{{currencyCode}}"/>
				<meta itemprop="highPrice" data-rate="{{maxPrice}}" content="{{maxPrice}}"/>
				<meta itemprop="lowPrice" data-rate="{{minPrice}}" content="{{minPrice}}"/>
				<!-- Price Range -->
				{{#if showComparePrice}}
					<small class="product-views-price-old">
						{{comparePriceFormatted}}
					</small>
				{{/if}}
                <span class="product-views-price-lead">
					{{translate '<span data-rate="$(0)" >$(1)</span> to <span data-rate="$(2)">$(3)</span>' minPrice minPriceFormatted maxPrice maxPriceFormatted}}
				</span>
				<span class="product-views-price-lead-suffix">ex GST</span>
				<link itemprop="availability" href="{{#if isInStock}}https://schema.org/InStock{{else}}https://schema.org/OutOfStock{{/if}}"/>
			</span>

		{{else}}
			<span class="product-views-price-exact" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
				<meta itemprop="priceCurrency" content="{{currencyCode}}"/>
				<meta itemprop="price" data-rate="{{price}}" content="{{price}}"/>
				<!-- Single -->
				{{#if showComparePrice}}
					<small class="product-views-price-old">
						{{comparePriceFormatted}}
					</small>
				{{/if}}
                <span class="product-views-price-lead" data-rate="{{price}}">
					{{priceFormatted}}
				</span>
				<span class="product-views-price-lead-suffix">ex GST</span>
				<link itemprop="availability" href="{{#if isInStock}}https://schema.org/InStock{{else}}https://schema.org/OutOfStock{{/if}}"/>
			</span>
		{{/if}}
	{{else}}

		{{#if showHighlightedMessage}}
			<div class="product-views-price-login-to-see-prices-highlighted">
				<p class="product-views-price-message">
					{{translate 'Please <a href="$(0)" data-navigation="ignore-click">log in</a> to see price or purchase this item' urlLogin}}
				</p>
			</div>
		{{else}}
			<div class="product-views-price-login-to-see-prices">
				<p class="product-views-price-message">
					{{translate '<a href="$(0)" data-navigation="ignore-click">Log in</a> to see price' urlLogin}}
				</p>
			</div>
		{{/if}}
	{{/if}}
</div>



{{!----
Use the following context variables when customizing this template:

	isPriceEnabled (Boolean)
	urlLogin (String)
	isPriceRange (Boolean)
	showComparePrice (Boolean)
	isInStock (Boolean)
	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.internalid (String)
	model.options (Array)
	model.options.0 (Object)
	model.options.0.cartOptionId (String)
	model.options.0.itemOptionId (String)
	model.options.0.label (String)
	model.options.0.type (String)
	model.options.0.values (Array)
	model.location (String)
	model.fulfillmentChoice (String)
	model.description (String)
	model.priority (Object)
	model.priority.id (String)
	model.priority.name (String)
	model.created (String)
	model.createddate (String)
	model.lastmodified (String)
	currencyCode (String)
	priceFormatted (String)
	comparePriceFormatted (String)
	minPriceFormatted (String)
	maxPriceFormatted (String)
	price (Number)
	comparePrice (Number)
	minPrice (Number)
	maxPrice (Number)
	showHighlightedMessage (Boolean)

----}}
