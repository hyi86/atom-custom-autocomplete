'use babel';

import suggestions from '../../data/js/basic';

class BasicProvider {
	constructor() {
		this.selector = '.source.js';
		this.suggestionPriority = 1;
	}

	getSuggestions(options) {
		const { prefix } = options;

		if (prefix.length >= 1) {
			return new Promise(resolve => {
				const result = suggestions
					.filter(s => s.toLowerCase().startsWith(prefix.toLowerCase()))
					.map(text => ({ text }));
				resolve(result);
			});
		}
	}
}
export default new BasicProvider();
