import emojiList from '../data/emojiList.json';

export function filterEmoji(search, maxOut) {
	return emojiList
		.filter((emoji) => {
			if (emoji.title.toLowerCase().includes(search.toLowerCase())) {
				return true;
			}
			if (emoji.keywords.includes(search)) {
				return true;
			}
			return false;
		})
		.slice(0, maxOut);
}
