import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CATEGORIES from '../data/Categories';

const Category = () => {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Category</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={age}
				label='Category'
				onChange={handleChange}
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
