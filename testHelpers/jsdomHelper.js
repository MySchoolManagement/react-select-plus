const raf = require('raf');

module.exports = function (html) {
	if (typeof document !== 'undefined') {
		return;
	}

	var jsdom = require('jsdom').jsdom;
	global.document = jsdom(html || '');
	global.window = global.document.defaultView;
	global.Node = {};

	raf.polyfill(global);
	raf.polyfill(global.window);

	global.navigator = {
		userAgent: 'JSDOM'
	};
};
