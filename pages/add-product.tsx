import Nav from './components/Nav';
import { GetServerSideProps } from 'next';
import { Category } from '@prisma/client';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch('http://localhost:3000/api/categories');
	const data: Category[] = await res.json();

	return {
		props: {
			data,
		},
	};
};

export default function AddProduct({ data }) {
	const addProduct = async (event) => {
		event.preventDefault();
		await fetch('http://localhost:3000/api/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: event.target.nameInput.value,
				description: event.target.descriptionInput.value,
				quantity: parseInt(event.target.quantityInput.value),
				price: parseFloat(event.target.priceInput.value),
				categoryName: event.target.categoryInput.value,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((e) => console.error(e));

		event.target.nameInput.value = '';
		event.target.descriptionInput.value = '';
		event.target.quantityInput.value = 0;
		event.target.priceInput.value = 0;
		event.target.categoryInput.selectedIndex = 0;

		// console.log({
		// 	name: event.target.nameInput.value,
		// 	description: event.target.descriptionInput.value,
		// 	quantity: event.target.quantityInput.value,
		// 	price: event.target.priceInput.value,
		// 	category: {
		// 		name: event.target.categoryInput.value,
		// 	},
		// });
	};
	return (
		<div className='container'>
			<Nav />
			<hr />
			<h1 className='title'>Add Product</h1>
			<form onSubmit={addProduct}>
				<div className='mb-3'>
					<label htmlFor='nameInput' className='form-label'>
						Name
					</label>
					<input
						type='text'
						name='nameInput'
						id='nameInput'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='descriptionInput' className='form-label'>
						Description
					</label>
					<input
						type='text'
						name='descriptionInput'
						id='descriptionInput'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='quantityInput' className='form-label'>
						Quantity
					</label>
					<input
						type='number'
						name='quantityInput'
						id='quantityInput'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='priceInput' className='form-label'>
						Price
					</label>
					<input
						type='text'
						name='priceInput'
						id='priceInput'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='categoryInput' className='form-label'>
						Category
					</label>
					<select
						name='categoryInput'
						id='categoryInput'
						className='form-select'
						defaultValue='Select Category'>
						<option>Select Category</option>
						{data.map((element: Category, i) => {
							return <option key={i}>{element.name}</option>;
						})}
					</select>
				</div>
				<button type='submit' className='btn btn-success'>
					Add Product
				</button>
			</form>
		</div>
	);
}
