import { revalidatePath } from 'next/cache';

export default async function handler(_req, res) {
    try {
        revalidatePath('/');
        return res.json({ revalidated: true });
    } catch (error) {
        console.error('Error occurred during revalidation:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
