import Emoji from '../Emoji/Emoji';
const Content = ({ emojis }) => {
	return (
		<main>
			{emojis.map((emoji, index) => (
				<Emoji
					key={index}
					emoji={emoji}
				/>
			))}
		</main>
	);
};
export default Content;
