import { ArticlesProvider } from './context/ArticlesContext';

const App = () => {
	return (
		<ArticlesProvider>
			<div>Articles</div>
		</ArticlesProvider>
	);
};

export default App;
