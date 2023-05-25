import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CATEGORIES from '../data/Categories';
import { useContext } from 'react';
import ArticlesContext from '../context/ArticlesContext';

const Category = () => {
	const { category, handlerChangeCategory } = useContext(ArticlesContext);
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Category</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={category}
				label='Category'
				onChange={handlerChangeCategory}
			>
				{CATEGORIES.map(category => (
					<MenuItem key={category.value} value={category.value}>
						{category.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default Category;
