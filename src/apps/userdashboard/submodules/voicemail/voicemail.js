define(function(require){
	var $ = require('jquery'),
		toastr = require('toastr'),
		monster = require('monster');

	const CONFIG = {
		submoduleName: 'voicemail',
		i18n: [ 'en-US' ],
		css: [ 'voicemail' ]
	};

	var app = {
		requests: {},

		subscribe: {
			'userdashboard.initModules': 'voicemailInitModuleLayout'
		},

		voicemailInitModuleLayout: function(args) {
			var self = this;

			self.extendI18nOfSubmodule(CONFIG, function () {
				var menuTitle = self.i18n.active().userdashboard.submodules[CONFIG.submoduleName].menuTitle;
				self.layout.menus.push({
					tabs: [
						{
							text: menuTitle,
							callback: self.voicemailRender
						}
					]
				});
				args.callback && args.callback(CONFIG);
			});
		},
		voicemailRender: function(args){
			var self = this,
				$container = args.container,
				template = self.getTemplate({
					name: 'voicemail',
					submodule: CONFIG.submoduleName
				});

			$container
				.empty()
				.append(template)
				.show();
		}
	};

	return app;
});