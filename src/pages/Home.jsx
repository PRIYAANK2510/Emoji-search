import { useState } from 'react';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import { filterEmoji } from '../services/filterEmoji';

const Home = () => {
	const [search, setSearch] = useState('');
	return (
		<>
			<Header />
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<Content emojis={filterEmoji(search, 20)} />
		</>
	);
};
export default Home;
