import ArticlesContext from '../context/ArticlesContext';
import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Article from './Article';

const Articles = () => {
	const { articles } = useContext(ArticlesContext);
	return (
		<Grid
			container
			spacing={{ xs: 2, md: 3 }}
			columns={{ xs: 4, sm: 8, md: 12 }}
		>
			{articles.map((article, index) => (
				<Grid item xs={2} sm={4} md={4} key={index}>
					<Article article={article} />
				</Grid>
			))}
		</Grid>
	);
};

export default Articles;
