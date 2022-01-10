import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['error', 'info', 'query'] });

export default async function handler(req, res) {
	if (req.method == 'GET') {
		const products = await prisma.product
			.findMany()
			.then((products) => {
				res.status(200).json(products);
			})
			.catch((e) => {
				res.status(500).json({ error: e });
			});
	} else if (req.method == 'POST') {
		const product = {
			name: req.body.name,
			description: req.body.description,
			quantity: req.body.quantity,
			price: req.body.price,
			category: {
				name: req.body.categoryName,
			},
		};

		await prisma.product
			.create({
				data: {
					name: product.name,
					description: product.description,
					quantity: product.quantity,
					price: product.price,
					category: {
						connect: {
							name: product.category.name,
						},
					},
				},
			})
			.then((product) => {
				res.status(200).json(product);
			})
			.catch((e) => {
				res.status(500).json({ error: e });
			});
	}
}
