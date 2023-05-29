import styles from './Emoji.module.css';
const Emoji = ({ emoji }) => {
	const codePointHex = emoji.symbol.codePointAt(0).toString(16);
	const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
	return (
		<div
			className={styles.emojisec}
			onClick={() => {
				navigator.clipboard.writeText(emoji.symbol);
			}}
		>
			<img
				className={styles.emojimg}
				alt={emoji.title}
				src={src}
			/>
			<p>{emoji.title}</p>
		</div>
	);
};
export default Emoji;
