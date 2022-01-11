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

export default function Products({ data }) {
	return (
		<div className='container'>
			<Nav />
			<hr />
			<h1>Categories</h1>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Description</th>
					</tr>
				</thead>
				<tbody>
					{data.map((element, i) => {
						return (
							<tr key={i}>
								<th scope='row'>{element.name}</th>
								<td>{element.description}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
