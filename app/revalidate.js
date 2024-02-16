import { revalidatePath } from 'next/cache'
export default async function handler(_req, res) {
     revalidatePath('/')

    return res.json({revalidated: true})
}