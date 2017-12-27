'use babel';

import suggestions from '../../data/js/basic';

class BasicProvider {
	constructor() {
		this.selector = '.source.js';
	}

	getCustomPrefix(editor, bufferPosition) {
		let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
		let match = line.match(/\S+$/);
		return match ? match[0] : '';
	}

	getSuggestions(options) {
		const { prefix } = options;

		if (prefix.length >= 1) {
			return this.findMatchingSuggestions(prefix);
		}
	}

	findMatchingSuggestions(prefix) {
		prefix = prefix.toLowerCase();
		return suggestions
			.filter(suggestion => suggestion.toLowerCase().startsWith(prefix))
			.map(word => this.inflateSuggestion(word))
	}

	inflateSuggestion(suggestion) {
		return {
			text: suggestion
		}
	}
}
export default new BasicProvider();
