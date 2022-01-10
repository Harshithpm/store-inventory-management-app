import Nav from './components/Nav';
import { useEffect, useRef } from 'react';

export default function Products() {
	let products = useRef([]);
	useEffect(() => {
		fetch('http://localhost:3000/api/products')
			.then((products) => products.json())
			.then((data) => (products.current = data))
			.catch((e) => console.error(e));
	}, []);

	return (
		<div>
			<Nav />
			<hr />
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>Product ID</th>
						<th scope='col'>Name</th>
						<th scope='col'>Quantity</th>
						<th scope='col'>Price</th>
						<th scope='col'>Category</th>
					</tr>
				</thead>
				<tbody>
					{products.current.map((v, i) => {
						return (
							<tr key={i}>
								<th scope='row'>{v.productId}</th>
								<td>{v.name}</td>
								<td>{v.quantity}</td>
								<td>{v.price}</td>
								<td>{v.categoryName}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
