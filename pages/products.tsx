import Nav from './components/Nav';
import { GetServerSideProps } from 'next';
import { Product } from '@prisma/client';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch('http://localhost:3000/api/products');
	const data: Product[] = await res.json();

	return {
		props: {
			data,
		},
	};
};

export default function Products({ data }) {
	return (
		<div className='container'>
			<Nav />
			<hr />
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Quantity</th>
						<th scope='col'>Price</th>
						<th scope='col'>Category</th>
					</tr>
				</thead>
				<tbody>
					{data.map((element, i) => {
						return (
							<tr key={i}>
								<th scope='row'>{element.name}</th>
								<td>{element.quantity}</td>
								<td>$ {element.price}</td>
								<td>{element.categoryName}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
