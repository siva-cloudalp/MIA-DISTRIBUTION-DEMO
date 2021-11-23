<div class="vendors-container">
  <div class="vendors-image-container">

    <div class="vendors-image-container-overlay"></div>
    <div class="vendors-image-text-container">
      <div class="vendors-image-text-wrapper">
        <div class="vendors-image-left-text">
          <div data-cms-area="vendors_cms_area_1" data-cms-area-filters="path"></div>
        </div>
        <div class="vendors-image-right-text">
        <div data-cms-area="vendors_cms_area_2" data-cms-area-filters="path"></div>
        </div>
      </div>
    </div>
  </div>
  
	<div class="vendor-flip-card-container">
		<div class="vendor-flip-card-container-row">
		
		{{#each vendors}}
			<div class="vendor-flip-card-container-col">
				<div class="vendor-flip-card">
				  <div class="vendor-flip-card-inner">
					<div class="vendor-flip-card-front" style="background-image:url({{image}})">
					</div>
					<div class="vendor-flip-card-back">
					  <a href="{{url}}" data-touchpoint="home">More About {{name}}</a>
					  <p>{{description}}</p>
					</div>
				  </div>
				</div>
			</div>
		{{else}}
			<p>No Vendors Available</p>
		{{/each}}
		</div>
	</div>

</div>
