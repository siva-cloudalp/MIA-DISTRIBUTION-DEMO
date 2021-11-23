{{!-- Edited for Horizon Theme --}}

<div id="layout" class="myaccount-layout">
	<header id="site-header" class="myaccount-layout-header" data-view="Header"></header>

    <div class="myaccount-layout-breadcrumb" data-view="Global.Breadcrumb" data-type="breadcrumb"></div>

	<div id="main-container" class="myaccount-layout-container theme-has-static-header">
		<div class="myaccount-layout-notifications">
			<div data-view="Notifications"></div>
		</div>

		<div class="myaccount-layout-error-placeholder"></div>

		<h2 class="myaccount-layout-title">{{translate 'My Account'}}</h2>
		<div class="myaccount-layout-row">
			<nav id="side-nav" class="myaccount-layout-side-nav" data-view="MenuTree"></nav>
			{{#with salesRep}}
			<div class="channel-manager-details">
				{{#if fullname}}
				Channel Manager: {{fullname}} <br/>
				{{/if}}
				{{#if mobilephone}}
				Contact Phone: <a href="tel:{{mobilephone}}">{{mobilephone}}</a><br/>
				{{/if}}
				{{#if email}}
				Contact Email: <a href="mailto:{{email}}">{{email}}</a>
				{{/if}}
			</div>
			{{/with}}
			<div id="content" class="myaccount-layout-main"></div>
		</div>

	</div>

	<footer id="site-footer" class="myaccount-layout-footer" data-view="Footer"></footer>

</div>



{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
