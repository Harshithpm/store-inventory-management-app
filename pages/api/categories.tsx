import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient({ log: ['error', 'info', 'query'] });

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method == 'GET') {
		await prisma.category
			.findMany()
			.then((categories) => {
				res.status(200).json(categories);
			})
			.catch((e) => {
				res.status(500).json({ error: e });
			});
	} else if (req.method == 'POST') {
		const category = {
			name: req.body.name,
			description: req.body.description,
		};

		await prisma.category
			.create({
				data: {
					name: category.name,
					description: category.description,
				},
			})
			.then((category) => {
				res.status(200).json(category);
			})
			.catch((e) => {
				res.status(500).json({ error: e });
			});
	}
}
