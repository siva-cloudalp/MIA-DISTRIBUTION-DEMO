<div class="login-register-register-main-container container">

<div class="login-register-form-container-content col-sm-6">


<div class="login-register-regiister-heading">Join With Us <span class="required-level"> .</span></div>
{{#unless showFormFieldsOnly}}
<form class="login-register-register-form" method="POST" novalidate>
{{/unless}}

	<div class="login-register-register-form-controls-group" data-validation="control-group">
	
		<div class="login-register-register-form-controls" data-validation="control">
			<input {{#if hasAutoFocus}} autofocus {{/if}} type="text" name="firstname" id="register-firstname" placeholder="* First Name ." class="login-register-register-form-input">
		</div>
	</div>

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="text" name="lastname" id="register-lastname" placeholder="* Last Name ." class="login-register-register-form-input">
		</div>
	</div>

	{{#if showCompanyField}}
		<div class="login-register-register-form-controls-group" data-validation="control-group">
		  {{!----	<label class="login-register-register-form-label" for="register-company">
				{{#if isCompanyFieldRequire}}
					{{translate 'Company <small class="login-register-register-form-required">*</small>'}}
				{{else}}
					{{translate 'Company'}} <small class="login-register-register-form-optional">{{translate '(optional)'}}</small>
				{{/if}}
			</label>----}}
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="company" id="register-company" placeholder="Company (optional)." class="login-register-register-form-input"/>
			</div>
		</div>
	{{/if}}

	<div class="login-register-register-form-controls-group" data-validation="control-group">
	
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="email" name="email" id="register-email" class="login-register-register-form-input" placeholder="{{translate '* Email Address .'}}">
			<p class="login-register-register-form-help-block">
				<small>
					{{translate 'We need your email address to contact you about your order.'}}
				</small>
			</p>
		</div>
	</div>
	<div class="login-register-register-form-controls-group" data-validation="control-group">
		
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="password" name="password" id="register-password" placeholder=" {{translate '* Password'}} " class="login-register-register-form-input">
		</div>
	</div>

	<div class="login-register-register-form-controls-group" data-validation="control-group">
	
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="password" name="password2" id="register-password2" placeholder="* Re-Enter Password ." class="login-register-register-form-input">
		</div>
	</div>

	{{#if isRedirect}}
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<div class="login-register-register-form-controls" data-validation="control">
				<input value="true" type="hidden" name="redirect">
			</div>
		</div>
	{{/if}}

	<div data-view="Register.CustomFields"></div>

	<div class="login-register-register-form-controls-group">
		<label class="login-register-register-form-label">
			<input type="checkbox" name="emailsubscribe" id="register-emailsubscribe" value="T" {{#if isEmailSubscribeChecked}} checked {{/if}}>
			{{translate ' sign me up for Mia Distribution exclusive offers and promotions' siteName}}
		</label>
	</div>

	<div class="login-register-register-form-messages" data-type="alert-placeholder"></div>

{{#unless showFormFieldsOnly}}
	<div class="login-register-register-form-controls-group register-button1">
	<div class="register-eff-1"></div>
		<button type="submit" class="login-register-register-form-submit register-anchor-1">
			{{translate 'Create Account'}}
		</button>
	</div>
	
</form>
{{/unless}}
 </div>

 <div class="login-register-image-content col-sm-6">
    <img src="https://tstdrv1521025.secure.netsuite.com/c.TSTDRV1521025/sca-dev-2021-1-0/extensions/miaCustomTheme/miaCustomTheme/1.0.0/img/login-main-img-content.png">
 </div>
</div>


{{!----
Use the following context variables when customizing this template: 
	
	showCompanyField (Boolean)
	isCompanyFieldRequire (Boolean)
	siteName (String)
	showFormFieldsOnly (Boolean)
	isRedirect (Boolean)
	hasAutoFocus (Boolean)

----}}
