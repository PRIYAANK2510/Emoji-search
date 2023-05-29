import styles from './Search.module.css';
const Search = ({ search, setSearch }) => {
	return (
		<div className={styles.search}>
			<input
				className={styles.searchbox}
				type='text'
				placeholder='Enter Text to Search Emoji'
				aria-label='Search Emoji'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};
export default Search;
