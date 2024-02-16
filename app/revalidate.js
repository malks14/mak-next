import { revalidatePath } from 'next/cache'
export default async function handler(_req, res) {
    await res.revalidatePath('/')

    return res.json({revalidated: true})
}